use std::sync::mpsc;
use std::thread;

mod command_buffer;


fn collect_input(data: &mut command_buffer::InputData) {
    data.reset();
    // TODO:
}

fn render() {
    // TODO: takes gfx stuff
}

fn main() {
    // Two threads; main thread and game thread
    
    // Game thread:    
    //// Swap
    //// Logic update
    //// Extract render commands
        
    // Main thread:
    //// Collect input
    //// Swap
    //// Render render commands
    
    // Message channels
    let (tx1, rx1) = mpsc::channel();
    let (tx2, rx2) = mpsc::channel();

    // Child thread
    let child = thread::spawn(move || {
        let mut game_data = command_buffer::CommandData::new();
        while game_data.end_game == false {
            // run game loop

            tx1.send(game_data).unwrap();
            let recieved = rx2.recv().unwrap();
            game_data = recieved;
        }
    });

    // Main thread
    let mut main_data = command_buffer::CommandData::new();

    while main_data.end_game == false {
        // Collect input and send off to game loop
        collect_input(&mut main_data.input_data);
        tx2.send(main_data);

        // Recieve input and execute render commands
        let mut recieved = rx1.recv().unwrap();
        main_data = recieved;

        // Render render commands
        render(); // TODO: actually wire up
    }

    let res = child.join();
}
