import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';
import { Widget          } from '@lumino/widgets';
import { MainAreaWidget  } from '@jupyterlab/apputils';
import { ILauncher       } from '@jupyterlab/launcher';

/**
 * Initialization data for the epjlx extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'epjlx:plugin',
  description: 'A JupyterLab extension for EuroPython 2024',
  autoStart: true,
  requires: [ ICommandPalette ],
  optional: [ ILauncher ],
  activate: _activate
}

function _activate(app: JupyterFrontEnd,
                   palette: ICommandPalette,
                   launcher: ILauncher|null ) {
  console.log('JupyterLab extension epjlx is activated!');
  let commandId = 'epjlx:Hello';
  app.commands.addCommand(commandId,
    { label: 'Hello World',
      execute: (args: any) => { say_hello(app, args) }
    });

  palette.addItem(
    { command: commandId,
      category: 'Anything',
      args: {greeting: 'Hello from the Command Palette!'}
    });

  if (launcher) {
    launcher.add(
      { command: commandId,
        category: 'Notebook'
      });
  } else {
    console.log('ILauncher is not available');
  }

  let sbwidget = new SideBarHelloWidget();
  app.shell.add(sbwidget,'left');
  app.shell.activateById(sbwidget.id);
}

class HelloWorldWidget extends Widget {
  constructor(greeting: string|null) {
    super();
    this.id = 'hello-world';
    this.title.label = 'Hello World';
    this.title.closable = true;
    this.addClass('hww');
    let body = document.createElement('body');
    let heading = document.createElement('h1');
    if (greeting) {
      heading.innerText = greeting;
    } else {
      heading.innerText = 'Hello World from EuroPython!';
    }
    body.appendChild(heading);
    this.node.appendChild(body);
  }
}

class SideBarHelloWidget extends Widget {
  constructor() {
    super();
    this.id = 'sidebar-hello';
    this.title.label = 'Hello World';
    this.title.closable = true;
    this.addClass('sbhw');
    let body = document.createElement('body');
    let b1 = document.createElement('button');
    let b2 = document.createElement('button');
    let b3 = document.createElement('button');
    let b4 = document.createElement('button');
    b1.innerText = 'C';
    b2.innerText = 'D';
    b3.innerText = 'E';
    b4.innerText = 'F';
    body.append(b1,b2,b3,b4);
    this.node.appendChild(body);
  }
}

function say_hello(app: JupyterFrontEnd, args: any) {
  let content = new HelloWorldWidget(args['greeting']);
  let widget  = new MainAreaWidget({content});

  app.shell.add(widget,'main');
  app.shell.activateById(widget.id);
}

export default plugin;
