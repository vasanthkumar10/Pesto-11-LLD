// // throttling -> time bound
// // each and every 1 sec -> api call

// // Debouncing -> make API call after user stopped typing (300ms)

// // CODE EDITOR

// // UNDO - REDO  -> 2 stacks

// // MEMENTO

// Originator -> the provider or playground
class TextFile {
  constructor() {
    this.content = "";
  }

  getContent() {
    return this.content;
  }

  setContent(newContent) {
    this.content = newContent;
  }

  // createSnapshot
  createMemento() {
    return new Memento(this.content);
  }

  restore(memento) {
    this.content = memento.getState();
  }
}

// Memento -> represents the exact saved snapshot
class Memento {
  constructor(content) {
    this.state = content;
  }

  getState() {
    return this.state;
  }
}

// caretaker -> manages the undo and redo operation
class CodeEditor {
  constructor() {
    this.history = [new Memento("")];
    this.currentIndex = 0;
  }

  save(memento) {
    this.history.push(memento);
    this.currentIndex = this.history.length - 1;
  }

  undo(file) {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      const currentSnapshot = this.history[this.currentIndex];
      file.restore(currentSnapshot);
    }
  }

  redo(file) {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      const currentSnapshot = this.history[this.currentIndex];
      file.restore(currentSnapshot);
    }
  }
}

// file
const file = new TextFile();
// console.log(file.getContent());
// file.setContent("writing something....");
// console.log(file.getContent());

// // Editor
const vscode = new CodeEditor();
// vscode.save(file.createMemento());
// console.log(vscode);

// file.setContent("modified content....");
// vscode.save(file.createMemento());
// console.log(vscode);
// console.log(file.getContent());

file.setContent("1");
vscode.save(file.createMemento());
file.setContent("12");
vscode.save(file.createMemento());
file.setContent("123");
vscode.save(file.createMemento());

// UNDO ops
console.log("=".repeat(50));
console.log(file.getContent());
vscode.undo(file);
console.log(file.getContent());
vscode.undo(file);
console.log(file.getContent());
vscode.undo(file);
console.log(file.getContent());
vscode.undo(file);
console.log(file.getContent());
console.log("=".repeat(50));

vscode.redo(file);
console.log(file.getContent());
vscode.redo(file);
console.log(file.getContent());
vscode.redo(file);
console.log(file.getContent());
console.log("nothing changed");
vscode.redo(file);
console.log(file.getContent());

file.setContent("1234");
vscode.save(file.createMemento());

console.log(file.getContent());
vscode.undo(file);
console.log(file.getContent());
