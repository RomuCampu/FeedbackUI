import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import Card from '../components/shared/Card'

function AboutPage() {
  return (

    <Card>
      <h1>About this project</h1>
      <p>This is a React App to demostrate my skills using the library</p>
      <p>Version: 1.0.0</p>

      <p>
        <Link to='/'>
          <FaHome size={30} />
        </Link>
      </p>
    </Card>
  )
}

export default AboutPage