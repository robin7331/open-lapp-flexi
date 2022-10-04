# LAPP FLEXIMARK® WYSIWYG Label Designer


> Note: This currently only works for [FLEXIMARK® Etikett LFL1H 9,9-35](https://www.lappkabel.de/produkte/online-kataloge-shop/kennzeichnungssysteme/fleximark-laserdruck-etiketten/kabel-und-einzeladerkennzeichnung/fleximark-kabeletikett-lfl.html) labels.

## How to use

This App is hosted on GitHub Pages and can be accessed and used [here](https://robin7331.github.io/open-lapp-flexi/).    
Simply fill in the labels you need and print them onto the empty labels that you have inserted into your laser printer.   
   

The browser preview is fairly accurate. Still I would recommend printing on a A5 sheet of paper before using the actual labels. 

![header image showing prefilled labels](https://github.com/robin7331/open-lapp-flexi/blob/main/readme/header.jpg?raw=true)

## Features

- To edit a text simply click into a label. The text will turn into a textarea allowing for text input. Once your click away from the field it re-renders it properly.
- A second line will automatically be rendered in a smaller font size.
- All your input will be stored in the [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage?retiredLocale=de) of your browse. If you visit the page another day your input will not be lost. 
- When printing, the app automatically removes all unnecessary clutter leaving only the text.