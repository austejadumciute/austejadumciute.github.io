// Šoninės juostos valdymas žemėlapio puslapyje
// Šis failas valdo šoninės informacijos juostos slėpimą ir rodymą

// document.getElementById – suranda elementą puslapyje pagal unikalų id atributą
const toggle = document.getElementById('sidebarToggle');
const content = document.getElementById('sidebarContent');
const sidebar = document.getElementById('mapSidebar');
const layout = document.getElementById('mapLayout');

// Tikrina ar visi reikalingi elementai egzistuoja puslapyje
// Apsaugo nuo klaidų konsolėje kai elementų nėra
if (toggle && content && sidebar && layout) {

  // Saugo dabartinę juostos būseną – true = suskleista, false = atvira
  let collapsed = false;

  // Fiksuotas šoninės juostos plotis pikseliais
  const SIDEBAR_WIDTH = 380;

  // updateTogglePosition – atnaujina mygtuko poziciją pagal juostos būseną
  // Kai juosta suskleista – mygtukas ties dešiniuoju kraštu (20px)
  // Kai juosta atvira – mygtukas ties juostos kairiuoju kraštu (380px)
  function updateTogglePosition(isCollapsed) {
    toggle.style.right = isCollapsed ? '20px' : SIDEBAR_WIDTH + 'px';
  }

  // addEventListener('click') – klausosi paspaudimo įvykio ant mygtuko
  // classList.toggle(class, force) – prideda klasę kai force=true, šalina kai force=false
  // innerHTML – keičia mygtuko rodyklės kryptį
  // gridTemplateColumns – dinamiškai keičia tinklelio kolonų plotį
  toggle.addEventListener('click', () => {
    collapsed = !collapsed;
    content.classList.toggle('hidden', collapsed);
    toggle.innerHTML = collapsed ? '▶' : '◀';
    sidebar.classList.toggle('collapsed', collapsed);
    layout.style.gridTemplateColumns = collapsed
      ? '1fr 0px'
      : `1fr ${SIDEBAR_WIDTH}px`;
    updateTogglePosition(collapsed);
  });

  // Iškviečia funkciją iš karto – nustato pradinę mygtuko poziciją
  updateTogglePosition(false);

}