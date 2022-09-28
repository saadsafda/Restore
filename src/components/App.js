import { Route, Switch } from "react-router-dom";
import StreamCreate from "./Streams/StreamCreate";
import StreamDelete from "./Streams/StreamDelete";
import StreamEdit from "./Streams/StreamEdit";
import StreamList from "./Streams/StreamList";
import StreamShow from "./Streams/StreamShow";
import Header from "./utils/Header";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Switch>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/:id" exact component={StreamShow} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/delete/:id" exact component={StreamDelete} />
        <Route
          render={() => (
            <h1 className="text-3xl font-bold text-center ">Not Found</h1>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
