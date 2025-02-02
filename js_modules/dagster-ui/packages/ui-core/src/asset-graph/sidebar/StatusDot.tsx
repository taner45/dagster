import React from 'react';

import {useAssetLiveData} from '../../asset-data/AssetLiveDataProvider';
import {StatusCase, buildAssetNodeStatusContent} from '../AssetNodeStatusContent';
import {GraphNode} from '../Utils';

import {StatusCaseDot} from './util';

export function StatusDot({node}: {node: Pick<GraphNode, 'assetKey' | 'definition'>}) {
  const {liveData} = useAssetLiveData(node.assetKey);
  if (!liveData) {
    return <StatusCaseDot statusCase={StatusCase.LOADING} />;
  }
  const status = buildAssetNodeStatusContent({
    assetKey: node.assetKey,
    definition: node.definition,
    liveData,
    expanded: true,
  });
  return <StatusCaseDot statusCase={status.case} />;
}
