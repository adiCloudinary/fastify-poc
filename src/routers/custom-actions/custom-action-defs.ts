import { Static, Type } from "@sinclair/typebox";

const MessageParams = Type.Object({
  cloudName: Type.Object({
    type: Type.String()
  }),
  assets: Type.Object({
    type: Type.String(),
    attributes: Type.Array(
      Type.KeyOf(
        Type.Object({
          public_id: Type.String(),
          resource_id: Type.String(),
          resource_type: Type.String()
        })
      )
    )
  })
});

export const CustomAction = Type.Object({
  appName: Type.String({ minLength: 1 }),
  appDescription: Type.Optional(Type.String()),
  appId: Type.String(),
  appUrl: Type.String(),
  actionIcon: Type.String(),
  appUrlParams: Type.Record(Type.String(), Type.KeyOf(
    Type.Object({
      cloud_name: Type.String(),
      public_id: Type.String()
    }))),
  appMessageParams: MessageParams,
  appActive: Type.Boolean(),
  assetAmountLimit: Type.Number()
});

export type CustomActionDtoType = Static<typeof CustomAction>;

// export class CustomActionDto extends BaseDto<CustomActionDto> {

//   @ApiProperty({ description: 'Name of custom action' })
//   @Expose()
//   @MinLength(0)
//   @MaxLength(50)
//   @IsNotEmpty()
//   appName!: string;

//   @ApiProperty({ description: 'Custom Action Description' })
//   @Expose()
//   @MinLength(0)
//   @MaxLength(60000)
//   @IsOptional()
//   appDescription?: string;

//   @ApiProperty({ description: 'Internal id of custom action' })
//   @Expose()
//   @MinLength(0)
//   @MaxLength(255)
//   @IsOptional()
//   appId?: string;

//   @ApiProperty({ description: 'Application end-point. The custom action will call this URL when triggered' })
//   @Expose()
//   @MinLength(0)
//   @MaxLength(255)
//   @IsNotEmpty()
//   appUrl!: string;

//   @ApiProperty({ description: 'custom action icon' })
//   @Expose()
//   @IsNotEmpty()
//   actionIcon!: string;

//   @ApiProperty({ description: 'Dynamic query params requested by the app' })
//   @Expose()
//   appUrlParams?: Record<string, UrlParam>;

//   @ApiProperty({ description: 'Dynamic data requested by the app' })
//   @Expose()
//   appMessageParams?: MessageParams;

//   @ApiProperty({ description: 'Custom Apps that wish for performing operations on selected items' })
//   @Expose({ toClassOnly: true, toPlainOnly: true })
//   appPermissions?: AppPermissions;

//   @ApiProperty({ description: 'Defines which ML roles will be able to see a specific custom action' })
//   @Expose()
//   @IsEnum(UserRole, { each: true })
//   @IsNotEmpty()
//   appRole!: UserRole[];

//   @ApiProperty({ description: 'Defines if the custom app should be enabled or disabled' })
//   @Expose()
//   @IsNotEmpty()
//   appActive!: boolean;

//   @Expose()
//   @IsOptional()
//   appActiveGlobal!: boolean;

//   @ApiProperty({ description: 'Defines a custom title text to be used for the modal window' })
//   @Expose()
//   @MinLength(0)
//   @MaxLength(255)
//   appTitle?: string;

//   @ApiProperty({ description: 'Defines the label that will be displayed in the ML UI' })
//   @Expose()
//   @MinLength(0)
//   @MaxLength(30)
//   actionLabel?: string;

//   @ApiProperty({ description: 'Defines the pages where the custom action are displayed in the UI' })
//   @Expose()
//   @IsEnum(ActionShowInPage, { each: true })
//   actionShowinpage?: ActionShowInPage[];

//   @ApiProperty({ description: 'Defines which type of resources are supported by the app' })
//   @Expose()
//   @IsEnum(AssetType, { each: true })
//   assetType?: AssetType[];

//   @ApiProperty({ description: 'Defines which file format are supported by the app' })
//   @Expose()
//   @IsOptional()
//   assetFormat?: string[];

//   @ApiProperty({ description: 'Defines how should the application be loaded' })
//   @Expose()
//   @IsNotEmpty()
//   @IsEnum(OpenIn)
//   appOpenIn?: OpenIn;

//   @ApiProperty({ description: 'List of supported devices to show the app in' })
//   @Expose()
//   @IsNotEmpty()
//   @IsEnum(SupportedDevices, { each: true })
//   appSupportedDevices!: SupportedDevices[];

//   @ApiProperty({ description: 'Defines the asset selection mode by the custom action.' })
//   @Expose()
//   @IsNotEmpty()
//   @IsEnum(SelectionMode, { each: true })
//   selectionMode!: SelectionMode[];

//   @ApiProperty({ description: 'Defines the number of allowed assets to be passed by the custom action' })
//   @Expose()
//   @Transform(value => value || '', { toPlainOnly: true })
//   @ValidateIf(o => o.selectionMode.includes(SelectionMode.MULTIPLE))
//   @IsNotEmpty()
//   assetAmountLimit!: number;

//   @ApiProperty({ description: 'Defines the relevant entity for UI selection to be passed to the custom action' })
//   @Expose()
//   @IsNotEmpty()
//   @IsEnum(SelectionType, { each: true })
//   selectionType!: SelectionType[];

//   @ApiProperty({ description: 'Creator of custom action' })
//   @IsNotEmpty()
//   @Expose()
//   userCreatedBy!: ActionUser;

//   @ApiProperty({ description: 'Creator of custom action' })
//   @Expose()
//   userUpdatedBy!: ActionUser;

//   @ApiProperty({ description: 'Defines the availability of the custom-actions' })
//   @Expose()
//   // @IsNotEmpty()
//   @IsOptional() // until frontend starts sending these too
//   @IsEnum(Availability)
//   availability!: Availability;

//   @ApiProperty({ description: 'Defines UI related properties for the custom-actions' })
//   @Expose()
//   @IsOptional() // until frontend starts sending these too
//   @IsObject()
//   uiProperties!: UiProperties;

//   @ApiProperty({ description: 'Custom Action Considerations' })
//   @Expose()
//   @MinLength(0)
//   @MaxLength(60000)
//   @IsOptional() // until frontend starts sending these too
//   considerations?: string;

//   @ApiProperty({ description: 'Defines the categories assigned to the custom-actions' })
//   @IsOptional() // until frontend starts sending these too
//   @Expose()
//   @IsEnum(Category, { each: true })
//   categories!: Category[];
// }