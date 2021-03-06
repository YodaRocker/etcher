/*
 * Copyright 2016 balena.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';
import { Flex } from 'rendition/dist_esm5/components/Flex';
import Txt from 'rendition/dist_esm5/components/Txt';

import DriveSvg from '../../../assets/drive.svg';
import ImageSvg from '../../../assets/image.svg';
import { SVGIcon } from '../svg-icon/svg-icon';
import { middleEllipsis } from '../../utils/middle-ellipsis';

interface ReducedFlashingInfosProps {
	imageLogo: string;
	imageName: string;
	imageSize: string;
	driveTitle: string;
	driveLabel: string;
	style?: React.CSSProperties;
}

export class ReducedFlashingInfos extends React.Component<
	ReducedFlashingInfosProps
> {
	constructor(props: ReducedFlashingInfosProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return (
			<Flex
				flexDirection="column"
				style={this.props.style ? this.props.style : undefined}
			>
				<Flex mb={16}>
					<SVGIcon
						disabled
						width="21px"
						height="21px"
						contents={this.props.imageLogo}
						fallback={ImageSvg}
						style={{ marginRight: '9px' }}
					/>
					<Txt
						style={{ marginRight: '9px' }}
						tooltip={{ text: this.props.imageName, placement: 'right' }}
					>
						{middleEllipsis(this.props.imageName, 16)}
					</Txt>
					<Txt color="#7e8085">{this.props.imageSize}</Txt>
				</Flex>

				<Flex>
					<DriveSvg width="21px" height="21px" style={{ marginRight: '9px' }} />
					<Txt tooltip={{ text: this.props.driveLabel, placement: 'right' }}>
						{middleEllipsis(this.props.driveTitle, 16)}
					</Txt>
				</Flex>
			</Flex>
		);
	}
}
