import Gallery from "./components/Gallery";

let gallery = [{
  heading: 'heading1',
  subheading:'subheading1',
  color : 'green',
  content : 'hjfsb fuhufh fihdghd gidgdoi giegjesg igegjdigj giejgdijg gjidgjdog gijdjgdi ogjdgjsp'
},
{
  heading: 'heading1',
  subheading:'subheading1',
  color : 'red',
  content : 'hjfsb fuhufh fihdghd gidgdoi giegjesg igegjdigj giejgdijg gjidgjdog gijdjgdi ogjdgjsp'
},
{
  heading: 'heading1',
  subheading:'subheading1',
  color : 'blue',
  content : 'hjfsb fuhufh fihdghd gidgdoi giegjesg igegjdigj giejgdijg gjidgjdog gijdjgdi ogjdgjsp'
},
{
  heading: 'heading1',
  subheading:'subheading1',
  color : 'grey',
  content : 'hjfsb fuhufh fihdghd gidgdoi giegjesg igegjdigj giejgdijg gjidgjdog gijdjgdi ogjdgjsp'
}]
function App() {
  return (
    <div className="App">
      <Gallery details= {gallery} />
    </div>
  );
}

export default App;
