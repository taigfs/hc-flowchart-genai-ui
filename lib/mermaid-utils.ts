import mermaid from 'mermaid';
import { Node, Edge, MarkerType } from 'reactflow';

export async function parseMermaidCode(
  mermaidCode: string
): Promise<{ nodes: Node[]; edges: Edge[] }> {
  console.log(mermaidCode);
  // Render the Mermaid code and invoke the callback

  mermaid.initialize({ startOnLoad: false }); // Initialize Mermaid (if not already initialized)
  const svgCode = await mermaid.render('mermaid-chart', mermaidCode);
  return convertToReactFlowElements(svgCode.svg);
}

const convertToReactFlowElements = (
  svgCode: string
): {
  nodes: Node[];
  edges: Edge[];
} => {
  // Now, you have the SVG code in the svgCode variable.
  console.log(svgCode);

  // Create a dummy div element to parse the SVG code as HTML
  const dummyDiv = document.createElement('div');
  dummyDiv.innerHTML = svgCode;

  // Select nodes and edges from the SVG
  const mermaidNodes = Array.from(dummyDiv.querySelectorAll('.node'));
  const mermaidEdges = Array.from(dummyDiv.querySelectorAll('.edgePaths path'));

  // Initialize an array to store React-Flow elements
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  // Convert nodes to React-Flow elements
  mermaidNodes.forEach((node, index) => {
    const elId = node.getAttribute('id') || `n${index}`;
    let id = elId;

    const classPattern = /^flowchart-([^-\d]+)-\d+$/;
    const matches = elId.match(classPattern);

    if (matches) {
      id = matches[1];
    }

    const nodeLabel = node.querySelector('.nodeLabel')?.textContent;
    const { label, type } = extractLabelAndType(nodeLabel || '');

    const position = {
      x: parseFloat(node.getAttribute('transform')!.split('(')[1]) * 1.2,
      y: parseFloat(node.getAttribute('transform')!.split(',')[1]) * 1.2,
    };

    nodes.push({
      id,
      type: type,
      position,
      data: { label },
    });
  });

  // Convert edges to React-Flow elements
  mermaidEdges.forEach((edge, index) => {
    const id = edge.getAttribute('id') || `e${index}`;
    const source = edge
      ?.getAttribute('class')
      ?.split(' ')[3]
      .replace('LS-', '');
    const target = edge
      ?.getAttribute('class')
      ?.split(' ')[4]
      .replace('LE-', '');

    if (!source || !target) {
      return;
    }

    edges.push({
      id,
      source,
      target,
      type: 'default',
      markerEnd: { type: MarkerType.ArrowClosed },
    });
  });

  // Now, you have reactFlowElements containing the data in the format expected by React-Flow.
  console.log(nodes, edges); // Print for demonstration
  return {
    nodes,
    edges,
  };
};

function extractLabelAndType(input: string): { label: string; type: string } {
  const [label, type] = input.split('¡!');

  return {
    label: label.trim(),
    type: type.trim().replace('!¡', ''),
  };
}
