## Step 1
- Create a workspace folder, where you will instantiate your project.
```bash
# C:\Users\rahul (HOME DIRECTORY)
cd C:\Users\rahul\Desktop\
mkdir project
cd project
ls # this will print the list of files and folder in your current folder
mkdir rststore
cd rststore
```
- Create a vite project
```bash
npm create vite@latest client -- --template react
cd client
npm install
cd .. # go back one folder
code .
cd client
npm run dev
Ctrl c Ctrl c # to shut the current process
```

## Step 2
- Install TailwindCSS (https://tailwindcss.com/)
```bash
cd client
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- Modify `tailwind.config.js` file
- Add the Tailwind directives to your CSS (`./src/index.css`)
- Remove all unnecessary files from `src`
- Modify `App.jsx` and `main.jsx`
- Modify `vite.config.js`
- Cleanup the `index.html`, change the title and add Inter UI font family link (https://rsms.me/inter/)
- To use Inter font, modify `tailwind.config.js`
- Rename `vite.svg` to `favicon.svg` inside the public folder
- Replace the name `vite.svg` to `favicon.svg` in the `index.html` file
- Replace the svg code with whatever icon code you like (https://heroicons.com/outline)

## Step 3
- Install hero icons package in `client`
```bash
npm install @heroicons/react
```
#   E - C o m m e r c e - P l a t f o r m  
 