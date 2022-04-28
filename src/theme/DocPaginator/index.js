import React from "react";
import DocPaginator from "@theme-original/DocPaginator";
import useFrontMatter from "@theme/useFrontMatter";
import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Giscus from "@giscus/react";

export default function DocPaginatorWrapper(props) {
  const { colorMode } = useColorMode();
  const { comments } = useFrontMatter();
  const { i18n } = useDocusaurusContext();
  return (
    <>
      <DocPaginator {...props} />
      {comments && (
        <div className="docusaurus-mt-lg">
          <Giscus
            id="comments"
            repo="RCRP-Pro/RayCity.Pro"
            repoId="R_kgDOHPxDZg"
            category="Z.Giscus"
            categoryId="DIC_kwDOHPxDZs4CO0Ez"
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={ colorMode }
            lang={ i18n.currentLocale }
            loading="lazy"
          />
        </div>
      )}
    </>
  );
}