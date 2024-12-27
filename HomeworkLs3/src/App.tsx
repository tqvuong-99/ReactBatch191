import './App.css'
import Ex1 from './components/Ex1'
import Ex2 from './components/Ex2'
import Ex3 from './components/Ex3'
import Ex4 from './components/Ex4'
import Ex5 from './components/Ex5'
import Ex6 from './components/Ex6'
function App() {
  return (
    <>
    <Ex1/>
    <hr/>
    <Ex2/>
    <hr/>
    <Ex3/>
    <hr/>
    <Ex4 thumbnail='https://photoking.vn/upload/images/Dau-doc-the-nho-android-otg-lightning-photoking-vn%20(3).jpg'
    name='Cáp chuyển đổi USB-C sang SD'
    price={1290000}
    promoPrice={790000}/>
    <hr/>
    <Ex5/>
    <hr/>
    {/* <Ex6/>
    <hr/> */}
    </>
   )
}
export default App

