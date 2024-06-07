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
      execute: () => { say_hello(app) }
    });

  palette.addItem(
    { command: commandId,
      category: 'Anything'
    });

  if (launcher) {
    launcher.add(
      { command: commandId,
        category: 'Notebook'
      });
  } else {
    console.log('ILauncher is not available');
  }

}

class HelloWorldWidget extends Widget {
  constructor() {
    super();
    this.id = 'hello-world';
    this.title.label = 'Hello World';
    this.title.closable = true;
    this.addClass('hww');
    let body = document.createElement('body');
    let heading = document.createElement('h1');
    heading.innerText = 'Hello World from EuroPython!';
    body.appendChild(heading);
    this.node.appendChild(body);
  }
}

function say_hello(app: JupyterFrontEnd) {
  let content = new HelloWorldWidget();
  let widget  = new MainAreaWidget({content});

  app.shell.add(widget,'main');
  app.shell.activateById(widget.id);
}

export default plugin;
