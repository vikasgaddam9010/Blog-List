import BlogList from '../BlogList'
import './index.css'

const BlogItem = props => {
  const {blogsList} = props
  return (
    <ul className="ul-home-container">
      {blogsList.map(each => (
        <BlogList key={each.id} each={each} />
      ))}
    </ul>
  )
}
export default BlogItem
