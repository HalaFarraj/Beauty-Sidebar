const ICONS = [
    'bars',
    'user',
    'heart',
    'bookmark',
    'share-from-square',
  ];
  const bgImageSrc = './aurora.mp4';
  let showSidebar = true;
  
  class Background {
    constructor(image) {
      const Wrapper = document.querySelector('.wrapper');
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
  
    get Background() {
      return this.backgroundWrapper;
    }
  }
  
  class Sidebar {
    constructor(icons) {
      this.sidebar = document.createElement('div');
      this.sidebar.className = 'sidebar';
      const toBeHiddenDiv = document.createElement('div');
      toBeHiddenDiv.className = 'toBeHidden';
  
      for (const icon of icons) {
        if (icon === 'bars') {
          const bars = new Icon(`${icon}`).Icon;
          bars.id = 'hamburgerIcon';
          this.sidebar.appendChild(bars);
        } else toBeHiddenDiv.appendChild(new Icon(`${icon}`).Icon);
      }
  
      this.sidebar.appendChild(toBeHiddenDiv);
    }
  
    get Sidebar() {
      return this.sidebar;
    }
  }
  
  class Icon {
    constructor(iconType) {
      this.icon = document.createElement('i');
      this.icon.style.color = 'white';
      if (iconType === 'bars') {
        this.icon.className = `fa-solid fa-${iconType} fa-2x`;
      } else {
        let type = `regular`;
        this.icon.className = `fa-${type} fa-${iconType} fa-2x`;
        this.icon.style.color = 'white';
        this.icon.onmouseover = () => {
          type = 'solid';
          this.icon.className = `fa-${type} fa-${iconType} fa-2x`;
        };
        this.icon.onmouseout = () => {
          type = 'regular';
          this.icon.className = `fa-${type} fa-${iconType} fa-2x`;
        };
      }
    }
  
    get Icon() {
      return this.icon;
    }
  }
  
  class Page {
    constructor() {
      this.webPage = document.querySelector('.wrapper');
      this.webPage.appendChild(new Sidebar(ICONS).Sidebar);
      this.webPage.appendChild(new Background(bgImageSrc).Background);
  
      window.addEventListener('resize', () => {
        console.log(window.innerWidth);
        const sidebar = document.querySelector('.sidebar');
        const bgWrapper = document.querySelector('.background-wrapper');
        if (window.innerWidth <= 768) {
          // console.log("less than 768")
          window.onclick = () => {};
          document.getElementById('hamburgerIcon').style.display =
            'block';
          const hamburgerIcon =
            document.querySelector('#hamburgerIcon');
  
          let clicked = false;
  
          hamburgerIcon.addEventListener('click', function () {
            clicked = !clicked;
            const Icons = document.querySelector('.toBeHidden');
            const sidebar = document.querySelector('.sidebar');
            const barsIcon = document.getElementById('hamburgerIcon');
  
            if (clicked) {
              barsIcon.style.backgroundColor = 'transparent';
  
              Icons.style.display = 'none';
              barsIcon.className =
                'fa-solid fa-bars fa-2x hamburgerIcon hamburger';
              bgWrapper.style.flexBasis = '100%';
              sidebar.style.flexBasis = '0';
              Wrapper.appendChild(barsIcon);
            } else {
              Icons.style.display = 'flex';
              bgWrapper.style.flexBasis = '90%';
              sidebar.style.flexBasis = '10%';
              barsIcon.className =
                'fa-solid fa-x fa-2x hamburgerIcon hamburger';
            }
          });
        } else {
          document.getElementById('hamburgerIcon').style.display =
            'none';
          window.onclick = (e) => {
            showSidebar = !showSidebar;
            if (showSidebar) {
              bgWrapper.style.flexBasis = '90%';
              document.querySelector('.wrapper').style.backgroundImage =
                'url("./3.jpg")';
            } else {
              sidebar.style.display = '0';
              bgWrapper.style.flexBasis = '100%';
              document.querySelector('.wrapper').style.backgroundImage =
                'none';
              document.querySelector('.wrapper').style.backgroundColor =
                'black';
            }
          };
        }
      });
    }
  
    get Page() {
      return this.webPage;
    }
  }
  
  let Wrapper = new Page().Page;
  