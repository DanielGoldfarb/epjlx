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
  }
};

export default plugin;
