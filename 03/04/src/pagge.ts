import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Foot";
export class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
