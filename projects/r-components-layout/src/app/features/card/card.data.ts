export const cardGroups: any[] = [
    {
      title: 'Simple card',
      code: `<r-card>\n  <div class="insivible-content"></div>\n </r-card>`
    },
    {
      title: 'Clickable card',
      code: `<r-card [clickable]="true">\n  <div class="insivible-content"></div>\n </r-card>`,
      clickable: true
    },
    {
      title: 'Card with hover effect',
      code: `<r-card [hoverEffect]="true">\n  <div class="insivible-content"></div>\n </r-card>`,
      hoverEffect: true
    },
    {
      title: 'Card clickable with hover effect',
      code: `<r-card [clickable]="true" [hoverEffect]="true">\n  <div class="insivible-content"></div>\n </r-card>`,
      clickable: true,
      hoverEffect: true
    }
  ];