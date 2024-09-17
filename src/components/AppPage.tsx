import { motion } from "framer-motion"
import { App } from './apps.js'
import { AppHeader } from './AppHeader.js'
import { AppDescription } from './AppDescription.js'
import { AppDetails } from './AppDetails.js'
import { CommentSection } from './CommentSection.js'

export const AppPage = ({ app }: { app: App }) => {
  const comments = [
    {
      author: { name: 'Alice', avatar: '/placeholder.svg' },
      content: 'This app is amazing! I use it every day.',
      date: '2 days ago',
      upvotes: 15,
      downvotes: 2,
      replies: [
        {
          author: { name: 'Bob', avatar: '/placeholder.svg' },
          content: 'I agree! The latest update is fantastic.',
          date: '1 day ago',
          upvotes: 7,
          downvotes: 0,
        },
        {
          author: { name: 'Charlie', avatar: '/placeholder.svg' },
          content: 'I had some issues with it at first, but their support team was very helpful.',
          date: '12 hours ago',
          upvotes: 3,
          downvotes: 1,
        }
      ]
    },
    {
      author: { name: 'David', avatar: '/placeholder.svg' },
      content: 'Could use some improvements in the UI, but overall a solid app.',
      date: '3 days ago',
      upvotes: 8,
      downvotes: 3,
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.1 }}
      className="p-6 max-w-4xl mx-auto"
      key="app-page"
    >
      <AppHeader
        app={app}
      />
      <AppDescription description={app.description} />
      <AppDetails
        app={app}
      />
      <CommentSection comments={comments} />
    </motion.div>
  )
}
