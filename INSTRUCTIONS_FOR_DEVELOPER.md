## React Native 
## Coding Assessment


# Task 
Implement `./components/FileTree.js` to make it render tree view using data from json file given in `./components/data.json`. 

# Requirements
- Provide your implementation here in Expo environment direclty. No need to send *.zip files, screen recordings and links to your personal github 

- Test your solution that it works on Android and iOS (Expo provides this capabilities for free). Optionally, support web rendering.
 
- The tree must be expandable/collapsible, similiar to File Explorer in Windows OS (see the example view below) 

- Your code must not use Class Component. Use Function Components, with Hooks if needed

- Each node of the tree must display icon. Icons are available under `./assets` folder. If folder is expanded, it should use 'folder-open.svg' icon, if folder is collapsed, then icon 'folder.svg'.

- Symbolic link must also be rendered as INFINITELY EXPANDABLE targer directory

- Do not use a 3rd party package for rendering tree views. Only simple controls allowed for rendering (such as text, container, buttons, image)


# Tree View example 

![](https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/146141f3a3af67034dec4cc4d4ce90d6)


`Data.json` represents the virtual file system, where each node is a file or a folder or a symbolic link. Json structure is the following:
```
{
  "C:": <Node>
}
```
Each `<Node>` has the following structure:
```
{
  "type":"file" or "folder" or "symlink", //defines the icon to show
  "children": {         // optional - only applicable for nodes of type "folder"
    "<Child1-Name>" : <Node>,
    "<Child2-Name>" : <Node>,
    ...
  },
  "symlink.target" : <Path\to\target> //Only for node type 'symlink' - absolute forward-slash separated concat of node names
}
```