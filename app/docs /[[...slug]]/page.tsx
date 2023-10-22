import { getPage, getPageUrl, tree } from '@/app/source'
import { allDocs } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { MDXContent } from 'next-docs-ui/mdx'
import { DocsPage } from 'next-docs-ui/page'
import { findNeighbour, getTableOfContents } from 'next-docs-zeta/server'
import { notFound } from 'next/navigation'
import { Content } from './content'
 
export default async function Page({
  params
}: {
  params: { slug?: string[] }
}) {
  const page = getPage(params.slug)
 
  if (page == null) {
    notFound()
  }
