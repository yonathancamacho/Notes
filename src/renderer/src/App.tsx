import { Content, RootLayout, Sidebar, Title, DraggableTopBar } from '@/components'

const App = () => {
  return (
    <>
    <DraggableTopBar />
      <RootLayout className="bg-purple-400/50">
        <div className="flex flex-col">
          <Title className="p-6 bg-zinc-800/90">Notes</Title>
          <Sidebar className="p-6 bg-zinc-800/90">Sidebar</Sidebar>
        </div>
        <Content className="p-6 border-l bg-zinc-900/90 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
