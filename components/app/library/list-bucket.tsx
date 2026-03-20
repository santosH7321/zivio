import { Button } from '@/components/ui/button'
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

const ListBucket = () => {
  return (
    <Card className='bg-linear-to-r from-rose-500 to-amber-400 shadow-none border-0'>
    <CardHeader>
        <CardTitle className='text-lg text-white'>coding school</CardTitle>
        <CardDescription className='text-white'>March 20, 2026</CardDescription>
        <CardAction>
          <Link href={`/app/library/codingott-systems`}>
            <Button variant="outline">
                <ExternalLink />
                Explore
            </Button>
          </Link>
        </CardAction>
    </CardHeader>
    </Card>
  )
}

export default ListBucket
