import mermaid from 'mermaid';
import { Node, Edge, MarkerType } from 'reactflow';

export async function parseMermaidCode(
  mermaidCode?: string
): Promise<{ nodes: Node[]; edges: Edge[] }> {
  // const renderCallback = (svgCode) => {
  //   // Now, you have the SVG code in the `svgCode` variable.
  //   // You can use it to convert to React-Flow elements.
  //   convertToReactFlowElements(svgCode);
  // };

  // Render the Mermaid code and invoke the callback

  const mermaidCode1 = `graph LR
  start[Start] --> type_username[Type Username]
  type_username --> type_password[Type Password]
  type_password --> click_button[Click on Button]
  click_button -->|Success| check_title[Check Home Page Title]
  click_button -->|Error| check_alert[Check Alert Message]
  check_title --> finish[Finish]
  check_alert --> finish`;
  mermaid.initialize({ startOnLoad: false }); // Initialize Mermaid (if not already initialized)
  const svgCode = await mermaid.render('mermaid-chart', mermaidCode1);
  console.log(svgCode);
  return convertToReactFlowElements(svgCode.svg);
}

const convertToReactFlowElements = (
  svgCode: string
): {
  nodes: Node[];
  edges: Edge[];
} => {
  // Create a dummy div element to parse the SVG code as HTML
  const dummyDiv = document.createElement('div');
  dummyDiv.innerHTML = svgCode;

  // Select nodes and edges from the SVG
  const mermaidNodes = Array.from(dummyDiv.querySelectorAll('.node'));
  const mermaidEdges = Array.from(dummyDiv.querySelectorAll('.edgePaths path'));
  console.log(mermaidNodes);
  console.log(mermaidEdges);

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

    const label = node.querySelector('.nodeLabel')?.textContent;
    const position = {
      x: parseFloat(node.getAttribute('transform')!.split('(')[1]) * 1.2,
      y: parseFloat(node.getAttribute('transform')!.split(',')[1]) * 1.2,
    };

    nodes.push({
      id,
      type: 'activity',
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
