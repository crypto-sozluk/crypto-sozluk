import { connect } from 'react-redux';
import { fetchPosts, fetchProfile } from '../../actions/posts';
import UserProfiles from './userProfileComponent';

export const mapStateToProps = state => ({
  posts: state.posts.items,
  isFetching: state.posts.isFetching
});

const mapDispatchToProps = { fetchPosts, fetchProfile };

const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfiles);

export default PostListContainer;
