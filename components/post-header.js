import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import {imageBuilder} from '../lib/sanity'
export default function PostHeader({ title, coverImage, date, author }) {
  console.log(author);
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
      {author?.map((item) =>
          <Avatar name={item?.name} picture={item?.picture} />
        )}
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} imageObject={coverImage} url={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
        {author?.map((item) =>
          <Avatar name={item?.name} picture={item?.picture} />
        )}
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
