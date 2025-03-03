import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as style from "./index.module.css"
import Layout from "../../components/layout/layout";
import Pagination from "../../components/pagination/pagination";

const Videos = ({ data }) => {
  const videos = data.allStrapiVideo.nodes
  const pageInfo = data.allStrapiVideo.pageInfo


  return (
    <Layout>
      <main className={style.gridContainer}>
        <div className={style.videoGrid}>
          {
            videos.map(
              node => {
                const image = getImage(node.cover.localFile)
                return (
                  <Link to={'/video/' + node.slug}>
                    <div className={style.videoCard}>
                      <GatsbyImage imgClassName={style.videoCover} image={image} alt={node.basic.title}></GatsbyImage>
                      <h4 className={style.videoTitle}>{node.basic.title}</h4>
                      <p className={style.videoDate}>{node.basic.date}</p>
                    </div>
                  </Link>
                )
              }
            )
          }
        </div>
        <Pagination pageInfo={pageInfo} sort='videos' />
      </main>
    </Layout>
  )
}

export const allStrapiVideo = graphql`
  query videoListQuery($skip: Int!, $limit: Int!) {
    allStrapiVideo(sort: {fields: basic___date, order: DESC}, skip: $skip, limit: $limit) {
      nodes {
        basic {
          title
          date
        }
        cover {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        slug
      }
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        pageCount
      }
    }
  }`

export default Videos

export function Head() {
  return (
    <>
      <title>视频 | 可可托海没有海</title>
      <meta name="description" content="设计师、开发者李大毛的视频" />
    </>
  )
}