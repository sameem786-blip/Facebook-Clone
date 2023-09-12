import Posts from '../../components/posts/Posts';
import Stories from '../../components/stories/Stories';
import './dashboard.scss';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <Stories />
      <Posts />
    </div>
  )
}

export default Dashboard