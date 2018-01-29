var js_manager = require('./js_manager');
var serial_interface = new SerialInterface();

var button = InterruptIn(BUTTON1);
    
run_program_from_flash();

button.fall(function() {
    gg();
});

print("Press button for demo.\r");

