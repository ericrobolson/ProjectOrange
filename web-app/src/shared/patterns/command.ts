interface ICommand{
    Execute(): boolean;
    Undo(): boolean;
}
