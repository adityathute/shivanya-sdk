import MenuComponent from "./Menu"; import MenuItem from "./MenuItem"; const Menu=Object.assign(MenuComponent,{Item:MenuItem}); export {Menu,MenuItem}; export * from "./config"; export default Menu;
