export class CommandQueue {
    executedCommands: ICommand[];
    undoCommands: ICommand[];

    Execute(command: ICommand) {
        command.Execute();
        this.executedCommands.push(command);
    }

    Undo() {
        const command = this.executedCommands.pop();
        command.Undo();

        this.undoCommands.push(command);
    }
}