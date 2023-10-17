export const sampleMermaidCode2 = `graph TD
Start["Start ¡!startEvent!¡"]
Username["Type username ¡!activity!¡"]
Password["Type password ¡!activity!¡"]
Button["Click on the button ¡!activity!¡"]
Success["Check home page title ¡!activity!¡"]
Error["Check alert message ¡!activity!¡"]
Finish["Finish ¡!endEvent!¡"]

Start --> Username
Username --> Password
Password --> Button
Button --> Success
Button --> Error
Success --> Finish
Error --> Finish`;
