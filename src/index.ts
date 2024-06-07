import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the epjlx extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'epjlx:plugin',
  description: 'A JupyterLab extension for EuroPython 2024',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension epjlx is activated!');
    let commandId = 'epjlx:Hello';
    app.commands.addCommand(commandId,
      { label: 'Hello World',
        execute: say_hello
      });

    app.commands.execute(commandId);
  }
};

function say_hello() {
  console.log('epjlx says "Hello World!"');
}

export default plugin;
