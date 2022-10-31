import './App.css';
import DatingProfile from './DatingProfile';
import { DeleteLikes } from './DeleteLikes';
import Grocery from './Grocery';
import Instagram from './Instagram';
import { Likes } from './Likes';


function App() {
  return (
    <div>
       <div>
        <Instagram blog="Blog about Canada" posts="100 posts" followers="100 followers" following="100 followings"/>
        <Instagram blog="Blog about USA" posts="200 posts" followers="200 followers" following="200 followings"/>
        <Instagram blog="Blog about England" posts="300 posts" followers="300 followers" following="300 followings"/>
      </div>

      <div>
        <DatingProfile img="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" name="Maria" age="28" description="Software Developer"/>
        <DatingProfile img="https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" name="Bob" age="34" description="Web Developer"/>
        <DatingProfile img="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" name="Lisa" age="30" description="Accauntant"/>
      </div>

      <div>
        <Grocery img="https://images.unsplash.com/photo-1590005354167-6da97870c757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" name="Apples" price="1.99$" description="Gala apples"/>
        <Grocery img="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b3JhbmdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" name="Oranges" price="3.59$" description="California oranges"/>
        <Grocery img="https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" name="Grape" price="5.99$" description="Mexican Blue Grape"/>
      </div>
      <Likes />
      <DeleteLikes />
    </div>

  );
}

export default App;
