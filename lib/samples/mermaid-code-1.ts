export const mermaidCode1 = `graph LR
start[Start] --> type_username[Type Username]
type_username --> type_password[Type Password]
type_password --> click_button[Click on Button]
click_button -->|Success| check_title[Check Home Page Title]
click_button -->|Error| check_alert[Check Alert Message]
check_title --> finish[Finish]
check_alert --> finish`;
