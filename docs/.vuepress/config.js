module.exports = {
  title: "Tiehua's Personal Page",
  description: "Academic Homepage",
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1" }]
  ],
  themeConfig: {
    search: false,
    smoothScroll: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Google Scholar", link: "https://scholar.google.com/citations?hl=en&user=kFrxPKUAAAAJ&view_op=list_works&sortby=pubdate" },
      { text: "ORCID", link: "https://orcid.org/0000-0002-7195-4472" },
      { text: "CV", link: "/cv.pdf" }
    ]
  },
  markdown: {
    lineNumbers: false
  }
};