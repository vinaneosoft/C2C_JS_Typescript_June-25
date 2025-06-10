// jquery.d.ts
declare module "my-jquery" {
  interface JQuery {
    text(content: string): JQuery;
    ready(callback: () => any): JQuery;
  }

  interface JQueryStatic {
    (selector: any): JQuery;
    ready(callback: () => any): JQuery;
  }

  const $: JQueryStatic;
  export default $;
}