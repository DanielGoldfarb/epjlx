# EuroPython JupyterLab Extension Tutorial

## [The slides can be found by clicking here.](https://github.com/DanielGoldfarb/epjlx/blob/main/Slides.pdf)  
### Note that GitHub only displays a few slides a few slides at a time, so I suggest that after clicking the above link, then click the download button on the right side of that page to download the whole slide deck.

---
---

## Steps in Detail:

## Step 0: Copier Extension Template (basic do-nothing extension)
1. ```bash
   # create the conda environment
   conda create -n jlx --override-channels --strict-channel-priority -c conda-forge -c nodefaults jupyterlab=4 nodejs=18 git copier=7 jinja2-time
    ```
2. ```bash
   # activate the conda environment:
   conda activate jlx
   ```
3. ```bash
   # copier copy <template> <destination>
   copier copy https://github.com/jupyterlab/extension-template epjlx   
   ```
4. ```bash
   # cd into the project directory
   cd epjlx

   # take a look at the files that were created by the copier template:
   ls -l  
   ```
5. ```bash
   # optionally create a git repository for the extension package:
   git init
   git add .
   git commit -m 'step0: template extension'
   ```
6. ```bash
   # install our extension's dependencies so that we can build the extension:
   jlpm install

   # confirm that yarn.lock and node_modules were created:
   ls -ltr 
   ```
7. ```bash
   # build the extension
   jlpm run build
   # Did the build end with "... compiled successfully in ... ms"?
   ```
8. ```bash
   # list currently installed extensions:
   jupyter labextension list
   # note that the above out also shows the directory where the isntalled extensions were found.
9. ```bash
   # install our extension as a symbolic link:
   jupyter labextension develop --overwrite ./

   # confirm the install:
   jupyter labextension list
10. ```bash
    # Open another command/linux window, 
    # activate our conda environment, and run jupyter lab:

    conda activate jlx
    jupyter lab
    ```
11. **Confirm that you see "Jupyterlab extension epjlx is activated!"**  
    1. In the browser window where JupyterLab is running, ***open the browser console***
    2. In Chrome, the console is under "More Tools" --> "Developer Tools".
    3. Confirm that you see **"Jupyterlab extension epjlx is activated!"**  

---

## Next, for each of Steps 1 through 7:
### 1. Make the [**code change indicated below:**](https://github.com/DanielGoldfarb/epjlx/blob/main/README.md#code-changes).
### 2. **`jlpm run build`**
### 3. Refresh browser, and test.

## Code Changes:
* [**Step1 :** Create a command in the command registry](https://github.com/DanielGoldfarb/epjlx/commit/5c290e28402c76068cdea77ac865a556ff4902a3)
* [**Step2 :** Execute command from ICommandPalette](https://github.com/DanielGoldfarb/epjlx/commit/008e87af0fbc68be2c6e36989023feba3244ee20)
* [**Step3a:** Split out activate function](https://github.com/DanielGoldfarb/epjlx/commit/90096fbe72e0ccc544de0804b78bffa3031c64e6)
* [**Step3b:** Add widget to main area](https://github.com/DanielGoldfarb/epjlx/commit/dc329c4d37c6a4404428dd87d5fd659d62076827)
* [**Step4 :** Style the widget](https://github.com/DanielGoldfarb/epjlx/commit/35e74c6de47b94d73bdecf5001afd3be4885f4d6)
* [**Step5:** Execute command from the Launcher](https://github.com/DanielGoldfarb/epjlx/commit/a641357e84918cb71dd4c9aeaacef9550e7c8fc6)
* [**Step6 :** Execute command with arguments](https://github.com/DanielGoldfarb/epjlx/commit/e6a156ff90025d829c742b6a665acedd54c6ab4b)
* [**Step7a:** Create Side-bar widget with buttons](https://github.com/DanielGoldfarb/epjlx/commit/5e29b396f01b98ee28461898330fdc4aebba9b9d)
* [**Step7b:** Style side-bar widget](https://github.com/DanielGoldfarb/epjlx/commit/26f00e03c88ca070e7bddf3e70111c5569360403)
* [**Step7c:** Add event listeners on buttons](https://github.com/DanielGoldfarb/epjlx/commit/5902339cfc6d7442114a071fb6c9b2708f368a58)
