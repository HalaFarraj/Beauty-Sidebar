const Wrapper = document.querySelector('.wrapper');
let showSidebar=false;

class Body {
  constructor(image) {
    this.backgroundWrapper = document.createElement('div');
    this.backgroundWrapper.className = 'background-wrapper';
    Wrapper.appendChild(this.backgroundWrapper);

    const backgroundImage = document.createElement('video');
    backgroundImage.src = image;
    backgroundImage.load();
    backgroundImage.autoplay = true;
    backgroundImage.loop = true;
    this.backgroundWrapper.appendChild(backgroundImage);
  }

  get Body() {
    return this.backgroundWrapper;
  }
}

class Sidebar {
  constructor(...icons) {
    this.sidebar = document.createElement('div');
    this.sidebar.className = 'sidebar';
    for (const icon of icons)
    {
        this.sidebar.appendChild(new Icon(`${icon}`).Icon);
    }
  }

  get Sidebar() {
    return this.sidebar;
  }
}

class Icon{
    constructor(iconType){
        this.icon = document.createElement('i');
        let type = `regular`;
        this.icon.className = `fa-${type} fa-${iconType} fa-2x`;
        this.icon.style.color="white";
        // this.icon.style.backgroundColor="transparent";
        // this.icon.setAttribute('data-fa-user','fa-solid');
        this.icon.onmouseover = () =>{
            type = 'solid';
            this.icon.className = `fa-${type} fa-${iconType} fa-2x`;
            
        }
        this.icon.onmouseout= ()=>{
            type = 'regular';
            this.icon.className = `fa-${type} fa-${iconType} fa-2x`;
        }
    }
    
    get Icon()
    {
        return this.icon;
    }

}

function createWebpage() {
  const bgImageSrc = './aurora.mp4';
  
Wrapper.appendChild(new Sidebar('user','heart','bookmark','share-from-square').Sidebar);
Wrapper.appendChild(new Body(bgImageSrc).Body);
//   Wrapper.appendChild(new Icon('user').Icon);
}

createWebpage();

window.onclick = (e)=>{
    
    let sidebar= document.querySelector(".sidebar");
    let bgWrapper = document.querySelector('.background-wrapper');
    showSidebar=!showSidebar;
    if (showSidebar)
    {
        // sidebar.style.display = 'flex';
        bgWrapper.style.flexBasis = '93%';
        document.querySelector('.wrapper').style.backgroundImage='url("./3.jpg")';
    }
    else{
        // document.querySelector(".sidebar").style.display = 'none'
        // sidebar.style.display = 'none';
        sidebar.style.display='0';
        bgWrapper.style.flexBasis = '100%';
        document.querySelector('.wrapper').style.backgroundImage='none';
        document.querySelector('.wrapper').style.backgroundColor='black';

    }
}