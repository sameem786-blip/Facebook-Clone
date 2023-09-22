import Posts from '../../components/posts/Posts';
import Share from '../../components/share/Share';
import Stories from '../../components/stories/Stories';
import './dashboard.scss';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <Stories />
      <Share />
      <Posts />
    </div>
  )
}

export default Dashboard