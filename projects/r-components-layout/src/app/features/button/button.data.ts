export const buttonGroups: any = [
  {
    title: "Label buttons",
    buttons: [
      { label: "Primary", severity: "primary" },
      { label: "Secondary", severity: "secondary" },
      { label: "Sucess", severity: "sucess" },
      { label: "Warn", severity: "warn" }
    ],
    code: `<r-button label="Primary" />
 <r-button severity="secondary" label="Secondary" />
 <r-button severity="sucess" label="Sucess" />
 <r-button severity="warn" label="Warn" />`
  },
  {
    title: "Icon buttons",
    buttons: [
      { icon: "home", severity: "primary" },
      { icon: "search", severity: "secondary" },
      { icon: "check", severity: "sucess" },
      { icon: "close", severity: "warn" }
    ],
    code: `<r-button icon="home" />
 <r-button severity="secondary" icon="search" />
 <r-button severity="sucess" icon="check" />
 <r-button severity="warn" icon="close" />`
  },
  {
    title: "Label + Icon buttons",
    buttons: [
      { label: "Primary", icon: "home", severity: "primary" },
      { label: "Secondary", icon: "search", severity: "secondary" },
      { label: "Sucess", icon: "check", severity: "sucess" },
      { label: "Warn", icon: "close", severity: "warn" }
    ],
    code: `<r-button label="Primary" icon="home" />
 <r-button severity="secondary" label="Secondary" icon="search" />
 <r-button severity="sucess" label="Sucess" icon="check" />
 <r-button severity="warn" label="Warn" icon="close" />`
  },
];