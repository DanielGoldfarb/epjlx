import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils'

/**
 * Initialization data for the epjlx extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'epjlx:plugin',
  description: 'A JupyterLab extension for EuroPython 2024',
  autoStart: true,
  requires: [ ICommandPalette ],
  activate: _activate
}

function _activate(app: JupyterFrontEnd,
                   palette: ICommandPalette ) {
  console.log('JupyterLab extension epjlx is activated!');
  let commandId = 'epjlx:Hello';
  app.commands.addCommand(commandId,
    { label: 'Hello World',
      execute: say_hello
    });

  palette.addItem(
    { command: commandId,
      category: 'Anything'
    });
}

function say_hello() {
  console.log('epjlx says "Hello World!"');
}

export default plugin;
