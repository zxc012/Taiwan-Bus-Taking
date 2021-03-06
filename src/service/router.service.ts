import homepage from "@views/home/home.view";
import nearByBusStop from "@root/views/nearBy-bus-stop/nearBy-bus-stop.view";

const publicPath = "/Taiwan-Bus-Taking";

const router = {
  "/home/": homepage,
  "/nearBy-bus-stop/": nearByBusStop,
};

export class RouterService {
  public static start() {
    window.addEventListener("popstate", () => {
      this.load(location.pathname);
    });

    this.load(location.pathname);
  }

  public static go(path: string) {
    history.pushState({}, null, publicPath + path);
    this.load(path);
  }

  public static load(path: string) {
    console.log("load", path);
    if (path === publicPath) path = "/home/";

    if (path.match(publicPath)) path = path.replace(publicPath, "");

    if (!Object.keys(router).includes(path)) {
      path = "/home/";
      history.pushState({}, null, publicPath + path);
    }

    const view = new router[path]();
    view.mount(document.body.getElementsByClassName("wrapper")[0]);
  }
}
