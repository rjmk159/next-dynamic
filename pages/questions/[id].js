import parse from 'html-react-parser';
import { getDetails, getDetailsSlug } from "../../lib/questions";

function Post({question}) {
  if(!question) {
    return
  }
  return (
    <div className="content article-body">
      <p style={{opacity:0.2}}>{question.id}</p>
      <br/>
      <h2 style={{color:'black',fontWeight:600}}>{question.title}</h2>
      <hr/>
      <br/>
      <div>{question.description? parse(question.description):''}</div>
    </div>
  );
}

// This function gets called during pre-rendering
export async function getStaticPaths() {
  let data = await getDetails();
  // Get the paths we want to pre-render based on posts
  const paths = data.map((post) => ({
    params: { id: post.id + "" },
  }));
  console.log(paths);
  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const question = await getDetailsSlug(params.id + '');
  return {
    props: {
      question,
    },
  };
}

export default Post;
