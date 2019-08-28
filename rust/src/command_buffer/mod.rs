const MAXINPUTS: usize = 25; // Size of inputs

///Based on an Xbox controller layout
#[derive(Copy, Clone)]
#[allow(dead_code)]
pub enum Inputs {
    None,

    RStickUp(InputStates),
    RStickDown(InputStates),
    RStickLeft(InputStates),
    RStickRight(InputStates),
    RStickClick(InputStates),

    LStickUp(InputStates),
    LStickDown(InputStates),
    LStickLeft(InputStates),
    LStickRight(InputStates),
    LStickClick(InputStates),

    DPadUp(InputStates),
    DPadDown(InputStates),
    DPadLeft(InputStates),
    DPadRight(InputStates),

    LBumper(InputStates),
    LTrigger(InputStates),

    RBumper(InputStates),
    RTrigger(InputStates),

    ButtonX(InputStates),
    ButtonA(InputStates),
    ButtonY(InputStates),
    ButtonB(InputStates),

    ButtonStart(InputStates),
    ButtonSelect(InputStates)
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub enum InputStates {
    None,
    Pressed,
    Held,
    Released,
}

pub struct InputData {
    inputs: [Inputs; MAXINPUTS],    
    input_count: i32,    
}

impl InputData {
    pub fn new() -> InputData {
        return InputData {
            inputs: [Inputs::None; MAXINPUTS],            
            input_count: 0,            
        };
    }

    pub fn reset(&mut self) {
        for i in 0..self.input_count as usize {
            self.inputs[i] = Inputs::None;            
        }

        self.input_count = 0;
    }
}

pub struct CommandData {
    pub input_data: InputData,
    pub end_game: bool
}

impl CommandData {
    pub fn new() -> CommandData {
        return CommandData {
            input_data: InputData::new(),
            end_game: false
        };
    }
}

// A double buffered thing
pub struct CommandBuffer {
    pub main_thread_data: CommandData,
    pub game_thread_data: CommandData
}

pub trait Buffer<'a>{
    fn new() -> Self;
    fn swap<'b>(&mut self);
}


impl Buffer<'_> for CommandBuffer {
  fn new() -> CommandBuffer{
        return CommandBuffer{
            main_thread_data: CommandData::new(),
            game_thread_data: CommandData::new()
        };
    }

  fn swap<'a>(&mut self) {
        //TODO: wait for game thread to finish, then swap
    }
}