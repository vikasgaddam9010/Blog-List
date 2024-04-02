import './index.css'

const BlogList = props => {
  const {each} = props
  return (
    <li className="li-list-container">
      <div className="d-flex">
        <h1>{each.title}</h1>
        <p>{each.publishedDate}</p>
      </div>
      <p>{each.description}</p>
    </li>
  )
}
export default BlogList
