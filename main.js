const allSpeakers = document.querySelector('.speakers');
const menuIcon = document.querySelector('.menu');
const phoneMenuList = document.querySelector('.menu-sec');

menuIcon.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu')) {
    phoneMenuList.style.display = 'flex';
    menuIcon.style.display = 'none';
  }
});

phoneMenuList.addEventListener('click', (e) => {
  const clicked = e.target.classList.contains('links');
  if (clicked) {
    phoneMenuList.style.display = 'none';
    menuIcon.style.display = 'flex';
  }
});

const guests = [
  {
    Name: 'Prof. Anicia Peters',
    Title: 'Pro-vice-chancellor for Research, Innovation and Development and an associate professor at the University of Namibia.',
    Desciption: ' Anicia Peters is a Namibian computer scientist specializing in human–computer interaction (HCI).',
    Img: './images/Prof-Anicia-Peters.jpg',
    Alt: 'Prof-Anicia-Peters.jpg',
  },

  {
    Name: 'Prof Fungai Bhunu Shava',
    Title: 'Acting Executive Dean, Faculty of Computing and Informatics.',
    Desciption: 'PhD. IT (NMMU), M.Sc.: Comp. Sci. (UZ), B.Sc.: Comp. Sci. & Math. (UZ), PGCHE (NUST).',
    Img: './images/Prof-Fungai-Bhunu-Shava.jpg',
    Alt: 'Prof-Fungai-Bhunu-Shava',
  },

  {
    Name: 'Prof. Jose Quenum',
    Title: 'Associate Professor DEPARTMENT:Software Engineering',
    Desciption: 'PhD. Comp. Sci. (UPMC), MSc. Comp. Sci. (Univ. Paris Dauphine), BSc. (Hons) Comp. Sci. (Univ. Paris Dauphine), BSc. Comp. Sci. (Univ. Nationale du Bénin).',
    Img: './images/Prof-Jose-Quenum.jpg',
    Alt: 'Prof-Jose-Quenum.jpg',
  },

  {
    Name: 'Prof. Guy-Alain Lusilao Zodi',
    Title: 'Associate Dean DEPARTMENT:Computer Science',
    Desciption: 'PhD. Eng. (UCT), MSc. Comp. Sci. (Stell.), Post.Dipl. (AIMS-SA), BSc., (Hons) Univ. Kinshasa.',
    Img: './images/Prof-Lusilao-Zodi.jpg',
    Alt: 'Prof-Lusilao-Zodi.jpg',
  },

  {
    Name: 'Ms Uakomba Mbasuva',
    Title: 'Lecturer DEPARTMENT: Cyber Security',
    Desciption: 'B Compt Sc Honours Information Security [NUST], B Compt Sc Systems Administration [NUST], CCNA1 [NUST].',
    Img: './images/Ms-Uakomba-Mbasuva.jpeg',
    Alt: 'Ms-Uakomba-Mbasuva.jpeg',
  },

  {
    Name: 'Prof Samuel Akinsola',
    Title: "Salif Keïta is a Malian singer-songwriter, referred to as the 'Golden Voice of Africa'",
    Desciption: 'D -Tech. BIS (TUT), M-Tech. BIS (TUT), B. Tech.: (Hons): Comp. Sci. (The Federal Univ. of Tech., Nigeria).',
    Img: './images/Prof-Samuel-Akinsola.jpg',
    Alt: 'Prof-Samuel-Akinsola.jpg',
  },
];

function renderSpeakers() {
  let speakerCarry = '';
  for (let i = 0; i < guests.length; i += 1) {
    speakerCarry += `
    <li class="guest">
      <img src="${guests[i].Img}" alt="${guests[i].Alt}">
      <section>
        <h3>
        ${guests[i].Name}
        </h3>
        <p class="p1"> 
        ${guests[i].Title}
        </p>
        <p class="p2">
        ${guests[i].Desciption}
        </p>
      </section>
    </li>`;
  }

  allSpeakers.innerHTML = speakerCarry;
}

renderSpeakers();
