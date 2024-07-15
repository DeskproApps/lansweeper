// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AccountNumber: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Byte: { input: any; output: any; }
  CountryCode: { input: any; output: any; }
  Cuid: { input: any; output: any; }
  Currency: { input: any; output: any; }
  DID: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  DeweyDecimal: { input: any; output: any; }
  Duration: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  GUID: { input: any; output: any; }
  HSL: { input: any; output: any; }
  HSLA: { input: any; output: any; }
  HexColorCode: { input: any; output: any; }
  Hexadecimal: { input: any; output: any; }
  IBAN: { input: any; output: any; }
  IP: { input: any; output: any; }
  IPCPatent: { input: any; output: any; }
  IPv4: { input: any; output: any; }
  IPv6: { input: any; output: any; }
  ISBN: { input: any; output: any; }
  ISO8601Duration: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  JWT: { input: any; output: any; }
  LCCSubclass: { input: any; output: any; }
  Latitude: { input: any; output: any; }
  LocalDate: { input: any; output: any; }
  LocalEndTime: { input: any; output: any; }
  LocalTime: { input: any; output: any; }
  Locale: { input: any; output: any; }
  LogicalRules: { input: any; output: any; }
  Long: { input: any; output: any; }
  Longitude: { input: any; output: any; }
  MAC: { input: any; output: any; }
  NegativeFloat: { input: any; output: any; }
  NegativeInt: { input: any; output: any; }
  NonEmptyString: { input: any; output: any; }
  NonNegativeFloat: { input: any; output: any; }
  NonNegativeInt: { input: any; output: any; }
  NonPositiveFloat: { input: any; output: any; }
  NonPositiveInt: { input: any; output: any; }
  ObjectID: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
  Port: { input: any; output: any; }
  PositiveFloat: { input: any; output: any; }
  PositiveInt: { input: any; output: any; }
  PostalCode: { input: any; output: any; }
  RGB: { input: any; output: any; }
  RGBA: { input: any; output: any; }
  RoutingNumber: { input: any; output: any; }
  SafeInt: { input: any; output: any; }
  SemVer: { input: any; output: any; }
  Time: { input: any; output: any; }
  TimeZone: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
  URL: { input: any; output: any; }
  USCurrency: { input: any; output: any; }
  UUID: { input: any; output: any; }
  UnsignedFloat: { input: any; output: any; }
  UnsignedInt: { input: any; output: any; }
  Upload: { input: any; output: any; }
  UtcOffset: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type ActiveDirectoryGroup = {
  __typename?: 'ActiveDirectoryGroup';
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ActiveDirectoryInfo = {
  __typename?: 'ActiveDirectoryInfo';
  comment?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  managerId?: Maybe<Scalars['Float']['output']>;
  ou?: Maybe<Scalars['String']['output']>;
};

export type AddWebhookSecuredInput = {
  basicAuthentication?: InputMaybe<BasicAuthenticationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled: Scalars['Boolean']['input'];
  eventsSubscribed: Array<InputMaybe<Scalars['String']['input']>>;
  masterdata?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: Scalars['String']['input'];
  payloadUrl: Scalars['String']['input'];
  resourcesFields: Array<InputMaybe<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type AggregatedCursor = {
  __typename?: 'AggregatedCursor';
  fieldName?: Maybe<Scalars['String']['output']>;
  fieldValue?: Maybe<Scalars['String']['output']>;
};

export type AirWatchApplication = {
  __typename?: 'AirWatchApplication';
  applicationIdentifier?: Maybe<Scalars['String']['output']>;
  buildVersion?: Maybe<Scalars['String']['output']>;
  isManaged?: Maybe<Scalars['Boolean']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type AirWatchDevice = {
  __typename?: 'AirWatchDevice';
  assetNumber?: Maybe<Scalars['String']['output']>;
  availablePhysicalMemory?: Maybe<Scalars['String']['output']>;
  batteryLevel?: Maybe<Scalars['String']['output']>;
  complianceStatus?: Maybe<Scalars['String']['output']>;
  compromisedStatus?: Maybe<Scalars['Boolean']['output']>;
  deviceFriendlyName?: Maybe<Scalars['String']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  enrollmentStatus?: Maybe<Scalars['String']['output']>;
  imei?: Maybe<Scalars['String']['output']>;
  isActivationLockEnabled?: Maybe<Scalars['Boolean']['output']>;
  isCloudBackupEnabled?: Maybe<Scalars['Boolean']['output']>;
  isDeviceDNDEnabled?: Maybe<Scalars['Boolean']['output']>;
  isDeviceLocatorEnabled?: Maybe<Scalars['Boolean']['output']>;
  isNetworkTethered?: Maybe<Scalars['Boolean']['output']>;
  isRoaming?: Maybe<Scalars['Boolean']['output']>;
  isSupervised?: Maybe<Scalars['Boolean']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  lastComplianceCheckOn?: Maybe<Scalars['DateTime']['output']>;
  lastCompromisedCheckOn?: Maybe<Scalars['DateTime']['output']>;
  lastEnrolledOn?: Maybe<Scalars['DateTime']['output']>;
  locationGroupName?: Maybe<Scalars['String']['output']>;
  mobileCountryCode?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  osVersion?: Maybe<Scalars['String']['output']>;
  ownership?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  processorArchitecture?: Maybe<Scalars['String']['output']>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  simMobileCountryCode?: Maybe<Scalars['String']['output']>;
  systemIntegrityProtectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  totalPhysicalMemory?: Maybe<Scalars['Float']['output']>;
  udId?: Maybe<Scalars['String']['output']>;
  userEmailAddress?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
  virtualMemory?: Maybe<Scalars['String']['output']>;
};

export type AirWatchOrganizationGroup = {
  __typename?: 'AirWatchOrganizationGroup';
  admins?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdOn?: Maybe<Scalars['String']['output']>;
  devices?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  lgLevel?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locationGroupType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organizationGroupId?: Maybe<Scalars['String']['output']>;
  users?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type Antivirus = {
  __typename?: 'Antivirus';
  enabled?: Maybe<Scalars['Boolean']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  upToDate?: Maybe<Scalars['Boolean']['output']>;
};

export type AppAccountMutation = {
  __typename?: 'AppAccountMutation';
  addWebhook?: Maybe<Webhook>;
  id: Scalars['ID']['output'];
  kind?: Maybe<AppIntegrationKind>;
  name: Scalars['String']['output'];
};


export type AppAccountMutationAddWebhookArgs = {
  webhookParams?: InputMaybe<AddWebhookSecuredInput>;
};

export enum AppIntegrationKind {
  Oauth = 'OAUTH',
  Personal = 'PERSONAL'
}

export type AssetBasicInfo = {
  __typename?: 'AssetBasicInfo';
  assetUnique?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  firstSeen?: Maybe<Scalars['DateTime']['output']>;
  fqdn?: Maybe<Scalars['String']['output']>;
  ipAddress?: Maybe<Scalars['String']['output']>;
  lastActiveScan?: Maybe<Scalars['DateTime']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  lastIpScan?: Maybe<Scalars['DateTime']['output']>;
  lastLsAgent?: Maybe<Scalars['DateTime']['output']>;
  lastLsFallBack?: Maybe<Scalars['DateTime']['output']>;
  lastLsPush?: Maybe<Scalars['DateTime']['output']>;
  lastPerformanceScan?: Maybe<Scalars['DateTime']['output']>;
  lastSccmScan?: Maybe<Scalars['DateTime']['output']>;
  lastScheduled?: Maybe<Scalars['DateTime']['output']>;
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  lastTried?: Maybe<Scalars['DateTime']['output']>;
  lastTriggered?: Maybe<Scalars['DateTime']['output']>;
  lastWorkGroupScan?: Maybe<Scalars['DateTime']['output']>;
  lsAgentVersion?: Maybe<Scalars['String']['output']>;
  lsPushVersion?: Maybe<Scalars['String']['output']>;
  mac?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  scanServer?: Maybe<Scalars['String']['output']>;
  scannerType?: Maybe<Scalars['String']['output']>;
  sccmServer?: Maybe<Scalars['String']['output']>;
  subType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  typeGroup?: Maybe<Scalars['String']['output']>;
  upTime?: Maybe<Scalars['Float']['output']>;
  userDomain?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type AssetBasicInfoInput = {
  description?: InputMaybe<ValueStringInput>;
  domain?: InputMaybe<ValueStringInput>;
  fqdn?: InputMaybe<ValueStringInput>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<ValueStringInput>;
};

export type AssetCustom = {
  __typename?: 'AssetCustom';
  barCode?: Maybe<Scalars['String']['output']>;
  branchOffice?: Maybe<Scalars['String']['output']>;
  building?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  deviceVersion?: Maybe<Scalars['String']['output']>;
  dnsName?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<Maybe<Field>>>;
  firmwareVersion?: Maybe<Scalars['String']['output']>;
  ftpHeader?: Maybe<Scalars['String']['output']>;
  hardwareVersion?: Maybe<Scalars['String']['output']>;
  httpServer?: Maybe<Scalars['String']['output']>;
  httpTitle?: Maybe<Scalars['String']['output']>;
  httpsServer?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  lastFullBackup?: Maybe<Scalars['DateTime']['output']>;
  lastFullImage?: Maybe<Scalars['DateTime']['output']>;
  lastPatched?: Maybe<Scalars['DateTime']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  purchaseDate?: Maybe<Scalars['DateTime']['output']>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  softwareVersion?: Maybe<Scalars['String']['output']>;
  sshServer?: Maybe<Scalars['String']['output']>;
  stateName?: Maybe<Scalars['String']['output']>;
  warrantyDate?: Maybe<Scalars['DateTime']['output']>;
};

export type AssetCustomInput = {
  barCode?: InputMaybe<Scalars['String']['input']>;
  branchOffice?: InputMaybe<Scalars['String']['input']>;
  building?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<ValueStringInput>;
  department?: InputMaybe<Scalars['String']['input']>;
  dnsName?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<InputMaybe<FieldsInput>>>;
  firmwareVersion?: InputMaybe<ValueStringInput>;
  lastFullBackup?: InputMaybe<Scalars['DateTime']['input']>;
  lastFullImage?: InputMaybe<Scalars['DateTime']['input']>;
  lastPatched?: InputMaybe<Scalars['DateTime']['input']>;
  location?: InputMaybe<ValueStringInput>;
  manufacturer?: InputMaybe<ValueStringInput>;
  model?: InputMaybe<ValueStringInput>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  purchaseDate?: InputMaybe<ValueDateInput>;
  serialNumber?: InputMaybe<ValueStringInput>;
  sku?: InputMaybe<ValueStringInput>;
  warrantyDate?: InputMaybe<ValueDateInput>;
};

export type AssetDetailsResponse = {
  __typename?: 'AssetDetailsResponse';
  COM?: Maybe<Com>;
  DCOM?: Maybe<Dcom>;
  activeDirectoryGroups?: Maybe<Array<Maybe<ActiveDirectoryGroup>>>;
  activeDirectoryInfo?: Maybe<ActiveDirectoryInfo>;
  airWatchApplications?: Maybe<Array<Maybe<AirWatchApplication>>>;
  airWatchDevice?: Maybe<AirWatchDevice>;
  airWatchOrganizationGroup?: Maybe<AirWatchOrganizationGroup>;
  antiviruses?: Maybe<Array<Maybe<Antivirus>>>;
  assetBasicInfo?: Maybe<AssetBasicInfo>;
  assetCustom?: Maybe<AssetCustom>;
  assetGroups?: Maybe<Array<Maybe<AssetGroup>>>;
  autoruns?: Maybe<Array<Maybe<Autorun>>>;
  baseboards?: Maybe<Array<Maybe<Baseboard>>>;
  batteries?: Maybe<Array<Maybe<Battery>>>;
  bioses?: Maybe<Array<Maybe<Bios>>>;
  bitLockerRecoveryKeys?: Maybe<Array<Maybe<BitLockerRecoveryKey>>>;
  bootConfigurations?: Maybe<Array<Maybe<BootConfiguration>>>;
  buses?: Maybe<Array<Maybe<Bus>>>;
  cdromDrives?: Maybe<Array<Maybe<CdromDrive>>>;
  certificates?: Maybe<Array<Maybe<Certificate>>>;
  citrixGuestInfo?: Maybe<CitrixGuestInfo>;
  citrixPoolInfo?: Maybe<CitrixPoolInfo>;
  citrixXenServerInfo?: Maybe<CitrixXenServerInfo>;
  cloudAssetCustom?: Maybe<CloudAssetCustom>;
  codecs?: Maybe<Array<Maybe<Codec>>>;
  components?: Maybe<Array<Maybe<Component>>>;
  computerSystems?: Maybe<Array<Maybe<ComputerSystem>>>;
  datastoreClusters?: Maybe<Array<Maybe<DatastoreCluster>>>;
  datastores?: Maybe<Array<Maybe<Datastore>>>;
  desktops?: Maybe<Array<Maybe<Desktop>>>;
  deviceActionResults?: Maybe<Array<Maybe<DeviceActionResult>>>;
  deviceApplications?: Maybe<Array<Maybe<DeviceApplication>>>;
  diskPartitions?: Maybe<Array<Maybe<DiskPartition>>>;
  displayConfigurations?: Maybe<Array<Maybe<DisplayConfiguration>>>;
  displayControllerConfigurations?: Maybe<Array<Maybe<DisplayControllerConfiguration>>>;
  environments?: Maybe<Array<Maybe<Environment>>>;
  errors?: Maybe<Array<Maybe<Error>>>;
  esxiClusters?: Maybe<Array<Maybe<EsxiCluster>>>;
  features?: Maybe<Array<Maybe<Feature>>>;
  fileProperties?: Maybe<Array<Maybe<FileProperty>>>;
  graphicsCards?: Maybe<Array<Maybe<GraphicsCard>>>;
  hardDisks?: Maybe<Array<Maybe<HardDisk>>>;
  hyperVGuests?: Maybe<Array<Maybe<HyperVGuest>>>;
  ideControllers?: Maybe<Array<Maybe<IdeController>>>;
  infraredDevices?: Maybe<Array<Maybe<InfraredDevice>>>;
  /** @deprecated No longer supported */
  installKey?: Maybe<Scalars['String']['output']>;
  installationId?: Maybe<Scalars['String']['output']>;
  ipLocation?: Maybe<IpLocation>;
  key?: Maybe<Scalars['String']['output']>;
  keyboards?: Maybe<Array<Maybe<Keyboard>>>;
  logicalDisks?: Maybe<Array<Maybe<LogicalDisk>>>;
  mappedDrives?: Maybe<Array<Maybe<MappedDrive>>>;
  memoryArrays?: Maybe<Array<Maybe<MemoryArray>>>;
  memoryModules?: Maybe<Array<Maybe<MemoryModule>>>;
  mobileDeviceManagement?: Maybe<MobileDeviceManagement>;
  modems?: Maybe<Array<Maybe<Modem>>>;
  monitorData?: Maybe<MonitorData>;
  monitors?: Maybe<Array<Maybe<Monitor>>>;
  networkAdapters?: Maybe<Array<Maybe<NetworkAdapter>>>;
  networkClients?: Maybe<Array<Maybe<NetworkClient>>>;
  networks?: Maybe<Array<Maybe<Network>>>;
  onBoardDevices?: Maybe<Array<Maybe<OnBoardDevice>>>;
  operatingSystem?: Maybe<OperatingSystem>;
  operatingSystemRecoveryConfigurations?: Maybe<Array<Maybe<OperatingSystemRecoveryConfiguration>>>;
  otData?: Maybe<OtData>;
  pageFiles?: Maybe<Array<Maybe<PageFile>>>;
  pciCards?: Maybe<Array<Maybe<PciCard>>>;
  pcmciaControllers?: Maybe<Array<Maybe<PcmciaController>>>;
  performanceInformation?: Maybe<PerformanceInformation>;
  pnpSignedDrivers?: Maybe<Array<Maybe<PnpSignedDriver>>>;
  pointingDevices?: Maybe<Array<Maybe<PointingDevice>>>;
  portConnectors?: Maybe<Array<Maybe<PortConnector>>>;
  printerDrivers?: Maybe<Array<Maybe<PrinterDriver>>>;
  printerInfo?: Maybe<PrinterInfo>;
  printers?: Maybe<Array<Maybe<Printer>>>;
  processes?: Maybe<Array<Maybe<Process>>>;
  processors?: Maybe<Array<Maybe<Processor>>>;
  quickFixEngineerings?: Maybe<Array<Maybe<QuickFixEngineering>>>;
  recognitionInfo?: Maybe<RecognitionInfo>;
  reconciliations?: Maybe<Array<Maybe<Reconciliation>>>;
  registries?: Maybe<Array<Maybe<Registry>>>;
  relations?: Maybe<Array<Maybe<Relation>>>;
  resourceGroup?: Maybe<ResourceGroup>;
  scsiControllers?: Maybe<Array<Maybe<ScsiController>>>;
  securityGroups?: Maybe<Array<Maybe<SecurityGroup>>>;
  serialNumbers?: Maybe<Array<Maybe<SerialNumber>>>;
  services?: Maybe<Array<Maybe<Service>>>;
  shares?: Maybe<Array<Maybe<Share>>>;
  siteId?: Maybe<Scalars['String']['output']>;
  snmpInfos?: Maybe<Array<Maybe<SnmpInfo>>>;
  softwares?: Maybe<Array<Maybe<Software>>>;
  soundDevices?: Maybe<Array<Maybe<SoundDevice>>>;
  sourceExternalId?: Maybe<Scalars['String']['output']>;
  sqlServers?: Maybe<Array<Maybe<SqlServer>>>;
  systemDrivers?: Maybe<Array<Maybe<SystemDriver>>>;
  systemEnclosures?: Maybe<Array<Maybe<SystemEnclosure>>>;
  systemProducts?: Maybe<Array<Maybe<SystemProduct>>>;
  tapeDrives?: Maybe<Array<Maybe<TapeDrive>>>;
  /** @deprecated No longer supported */
  tenantId?: Maybe<Scalars['String']['output']>;
  tonerInformation?: Maybe<Array<Maybe<TonerInformation>>>;
  tpms?: Maybe<Array<Maybe<Tpm>>>;
  ups?: Maybe<Array<Maybe<Ups>>>;
  url?: Maybe<Scalars['String']['output']>;
  usbControllers?: Maybe<Array<Maybe<UsbController>>>;
  usbDevices?: Maybe<Array<Maybe<UsbDevice>>>;
  userInGroups?: Maybe<Array<Maybe<UserInGroup>>>;
  users?: Maybe<Array<Maybe<User>>>;
  vCenter?: Maybe<VCenter>;
  virtualMachine?: Maybe<VirtualMachine>;
  virtualNetworks?: Maybe<Array<Maybe<VirtualNetwork>>>;
  vmwareProductInfo?: Maybe<VmwareProductInfo>;
  volumeGroups?: Maybe<Array<Maybe<VolumeGroup>>>;
  volumes?: Maybe<Array<Maybe<Volume>>>;
  vulnerabilities?: Maybe<Array<Maybe<Vulnerability>>>;
  warranties?: Maybe<Array<Maybe<Warranty>>>;
};

export type AssetGroup = {
  __typename?: 'AssetGroup';
  assetGroupKey?: Maybe<Scalars['String']['output']>;
  dynamic?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AssetGroupsType = {
  __typename?: 'AssetGroupsType';
  assetGroupKey?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AssetRelationType = {
  __typename?: 'AssetRelationType';
  default?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use installationId */
  installKey?: Maybe<Scalars['String']['output']>;
  installationId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  reverseName?: Maybe<Scalars['String']['output']>;
};

export type AssetWithSoftwareResponse = {
  __typename?: 'AssetWithSoftwareResponse';
  items?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  pagination?: Maybe<AssetsPagination>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum AssetsFilterConjunction {
  And = 'AND',
  Or = 'OR'
}

export type AssetsFilterGroupedInput = {
  conditions?: InputMaybe<Array<AssetsFiltersCondition>>;
  conjunction?: InputMaybe<AssetsFilterConjunction>;
  groups?: InputMaybe<Array<AssetsFilterInput>>;
};

export type AssetsFilterInput = {
  conditions: Array<AssetsFiltersCondition>;
  conjunction?: InputMaybe<AssetsFilterConjunction>;
};

export enum AssetsFilterType {
  Equal = 'EQUAL',
  Exists = 'EXISTS',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  Like = 'LIKE',
  NotEqual = 'NOT_EQUAL',
  Regexp = 'REGEXP',
  SmallerThan = 'SMALLER_THAN',
  SmallerThanOrEqual = 'SMALLER_THAN_OR_EQUAL'
}

export type AssetsFiltersCondition = {
  operator: AssetsFilterType;
  path: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export enum AssetsPage {
  First = 'FIRST',
  Last = 'LAST',
  Next = 'NEXT',
  Prev = 'PREV'
}

export type AssetsPagination = {
  __typename?: 'AssetsPagination';
  current?: Maybe<Scalars['ID']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  next?: Maybe<Scalars['ID']['output']>;
  page?: Maybe<AssetsPage>;
};

export type AssetsPaginationInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<AssetsPage>;
};

export type AssetsPaginationInputValidated = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<AssetsPage>;
};

export type Authentication = BasicAuth;

export enum AuthenticationType {
  BasicAuth = 'BASIC_AUTH'
}

export type AuthorizedReport = {
  __typename?: 'AuthorizedReport';
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subcategory?: Maybe<Scalars['String']['output']>;
};

export type AuthorizedSiteAccounts = {
  __typename?: 'AuthorizedSiteAccounts';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  joinedAt?: Maybe<Scalars['DateTime']['output']>;
  lastTimeAccess?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type AuthorizedSites = {
  __typename?: 'AuthorizedSites';
  sites?: Maybe<Array<Maybe<Site>>>;
};

export type Autorun = {
  __typename?: 'Autorun';
  command?: Maybe<Scalars['String']['output']>;
  commandName?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  location?: Maybe<Scalars['String']['output']>;
};

export type AwsAmi = {
  __typename?: 'AwsAmi';
  architecture?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enaSupport?: Maybe<Scalars['Boolean']['output']>;
  hypervisor?: Maybe<Scalars['String']['output']>;
  imageId?: Maybe<Scalars['String']['output']>;
  imageLocation?: Maybe<Scalars['String']['output']>;
  imageOwnerAlias?: Maybe<Scalars['String']['output']>;
  imageType?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  public?: Maybe<Scalars['Boolean']['output']>;
  rootDeviceName?: Maybe<Scalars['String']['output']>;
  rootDeviceType?: Maybe<Scalars['String']['output']>;
  sriovNetSupport?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  stateReason?: Maybe<Scalars['String']['output']>;
  virtualizationType?: Maybe<Scalars['String']['output']>;
};

export type AwsElasticGpu = {
  __typename?: 'AwsElasticGpu';
  health?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type AwsHost = {
  __typename?: 'AwsHost';
  autoPlacement?: Maybe<Scalars['Boolean']['output']>;
  availabilityZone?: Maybe<Scalars['String']['output']>;
  availableCapacity?: Maybe<Scalars['Float']['output']>;
  availableVCpus?: Maybe<Scalars['Float']['output']>;
  cores?: Maybe<Scalars['Float']['output']>;
  hostId?: Maybe<Scalars['String']['output']>;
  instanceType?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  releaseTime?: Maybe<Scalars['DateTime']['output']>;
  sockets?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  totalCapacity?: Maybe<Scalars['Float']['output']>;
  totalVCpus?: Maybe<Scalars['Float']['output']>;
};

export type AwsProductCode = {
  __typename?: 'AwsProductCode';
  id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type AwsSecurityGroupPermission = {
  __typename?: 'AwsSecurityGroupPermission';
  fromPort?: Maybe<Scalars['Float']['output']>;
  ipProtocol?: Maybe<Scalars['String']['output']>;
  ipRanges?: Maybe<Array<Maybe<AwsSecurityGroupPermissionIpRange>>>;
  isInbound?: Maybe<Scalars['Boolean']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  toPort?: Maybe<Scalars['Float']['output']>;
};

export type AwsSecurityGroupPermissionIpRange = {
  __typename?: 'AwsSecurityGroupPermissionIpRange';
  cidrIp?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
};

export type AwsSubnetIpv6CidrBlock = {
  __typename?: 'AwsSubnetIpv6CidrBlock';
  ipv6CidrBlock?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type AzureIpConfiguration = {
  __typename?: 'AzureIpConfiguration';
  fqdn?: Maybe<Scalars['String']['output']>;
  hasAssignedLoadBalancer?: Maybe<Scalars['Boolean']['output']>;
  idleTimeoutInMinutes?: Maybe<Scalars['Float']['output']>;
  isPrimary?: Maybe<Scalars['Boolean']['output']>;
  leafDomainLabel?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  privateIpAddress?: Maybe<Scalars['String']['output']>;
  privateIpAddressVersion?: Maybe<Scalars['String']['output']>;
  privateIpAlLocationMethod?: Maybe<Scalars['String']['output']>;
  publicIpAddress?: Maybe<Scalars['String']['output']>;
  publicIpAddressVersion?: Maybe<Scalars['String']['output']>;
  publicIpAlLocationMethod?: Maybe<Scalars['String']['output']>;
  reverseFqdn?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type AzureNetworkSecurityGroup = {
  __typename?: 'AzureNetworkSecurityGroup';
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  securityRules?: Maybe<Array<Maybe<AzureSecurityRule>>>;
  state?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
};

export type AzureSecurityRule = {
  __typename?: 'AzureSecurityRule';
  access?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  destinationAddressPrefix?: Maybe<Scalars['String']['output']>;
  destinationPortRange?: Maybe<Scalars['String']['output']>;
  direction?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
  protocol?: Maybe<Scalars['String']['output']>;
  ruleType?: Maybe<Scalars['String']['output']>;
  sourceAddressPrefix?: Maybe<Scalars['String']['output']>;
  sourcePortRange?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type AzureSubnetIpConfiguration = {
  __typename?: 'AzureSubnetIpConfiguration';
  fqdn?: Maybe<Scalars['String']['output']>;
  hasAssignedLoadBalancer?: Maybe<Scalars['Boolean']['output']>;
  idleTimeoutInMinutes?: Maybe<Scalars['Float']['output']>;
  isPrimary?: Maybe<Scalars['Boolean']['output']>;
  leafDomainLabel?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  privateIpAddress?: Maybe<Scalars['String']['output']>;
  privateIpAddressVersion?: Maybe<Scalars['String']['output']>;
  privateIpAlLocationMethod?: Maybe<Scalars['String']['output']>;
  publicIpAddress?: Maybe<Scalars['String']['output']>;
  publicIpAddressVersion?: Maybe<Scalars['String']['output']>;
  publicIpAlLocationMethod?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type AzureVirtualMachineExtension = {
  __typename?: 'AzureVirtualMachineExtension';
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  typeHandlerVersion?: Maybe<Scalars['String']['output']>;
};

export type Baseboard = {
  __typename?: 'Baseboard';
  hostingBoard?: Maybe<Scalars['Boolean']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  locationInChassis?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type BasicAuth = {
  __typename?: 'BasicAuth';
  authenticationType: AuthenticationType;
  password?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type BasicAuthenticationInput = {
  password?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type Battery = {
  __typename?: 'Battery';
  availability?: Maybe<Scalars['String']['output']>;
  capacityMultiplier?: Maybe<Scalars['Float']['output']>;
  chemistry?: Maybe<Scalars['String']['output']>;
  designCapacity?: Maybe<Scalars['Float']['output']>;
  designVoltage?: Maybe<Scalars['Float']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  manufactureDate?: Maybe<Scalars['DateTime']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  maxBatteryError?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  portable?: Maybe<Scalars['Boolean']['output']>;
  powerManagementCapabilities?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  powerManagementSupported?: Maybe<Scalars['Boolean']['output']>;
  smartBatteryVersion?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Bios = {
  __typename?: 'Bios';
  address?: Maybe<Scalars['String']['output']>;
  biosCharacteristics?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  caption?: Maybe<Scalars['String']['output']>;
  currentLanguage?: Maybe<Scalars['String']['output']>;
  installableLanguage?: Maybe<Scalars['Float']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  primaryBios?: Maybe<Scalars['Boolean']['output']>;
  releaseDate?: Maybe<Scalars['DateTime']['output']>;
  romSize?: Maybe<Scalars['String']['output']>;
  runTimeSize?: Maybe<Scalars['String']['output']>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  smbiosBiosVersion?: Maybe<Scalars['String']['output']>;
  smbiosMajorVersion?: Maybe<Scalars['Float']['output']>;
  smbiosMinorVersion?: Maybe<Scalars['Float']['output']>;
  smbiosPresent?: Maybe<Scalars['Boolean']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type BitLockerRecoveryKey = {
  __typename?: 'BitLockerRecoveryKey';
  key?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
};

export type BootConfiguration = {
  __typename?: 'BootConfiguration';
  bootDirectory?: Maybe<Scalars['String']['output']>;
  bootMode?: Maybe<Scalars['String']['output']>;
  bootRomVersion?: Maybe<Scalars['String']['output']>;
  bootVolume?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  configurationPath?: Maybe<Scalars['String']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  scratchDirectory?: Maybe<Scalars['String']['output']>;
  tempDirectory?: Maybe<Scalars['String']['output']>;
};

export type BrandMetadata = {
  __typename?: 'BrandMetadata';
  warrantyUrl?: Maybe<Scalars['String']['output']>;
};

export type Bus = {
  __typename?: 'Bus';
  deviceId?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  number?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type BusConfig = {
  __typename?: 'BusConfig';
  children?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  isMainModule?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['Float']['output']>;
  parent?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  slotNumber?: Maybe<Scalars['Float']['output']>;
  slotWidth?: Maybe<Scalars['Float']['output']>;
  startIndex?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Com = {
  __typename?: 'COM';
  caption?: Maybe<Scalars['String']['output']>;
};

export type CdromDrive = {
  __typename?: 'CdromDrive';
  burnSupport?: Maybe<Scalars['String']['output']>;
  burnUnderrunProtection?: Maybe<Scalars['Boolean']['output']>;
  cache?: Maybe<Scalars['String']['output']>;
  capability?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  caption?: Maybe<Scalars['String']['output']>;
  cdWrite?: Maybe<Scalars['String']['output']>;
  drive?: Maybe<Scalars['String']['output']>;
  dvdWrite?: Maybe<Scalars['String']['output']>;
  firmware?: Maybe<Scalars['String']['output']>;
  interConnect?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['Boolean']['output']>;
  mount?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  readDvd?: Maybe<Scalars['Boolean']['output']>;
  writeStrategies?: Maybe<Scalars['String']['output']>;
};

export type Certificate = {
  __typename?: 'Certificate';
  archived?: Maybe<Scalars['Boolean']['output']>;
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  friendlyName?: Maybe<Scalars['String']['output']>;
  intendedPurposes?: Maybe<Scalars['String']['output']>;
  issueBy?: Maybe<Scalars['String']['output']>;
  issueTo?: Maybe<Scalars['String']['output']>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  store?: Maybe<Scalars['String']['output']>;
  template?: Maybe<Scalars['String']['output']>;
  thumbprint?: Maybe<Scalars['String']['output']>;
};

export type ChromeOsActiveTimeRange = {
  __typename?: 'ChromeOsActiveTimeRange';
  activeTime?: Maybe<Scalars['Float']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
};

export type CipherCredential = {
  discoveryComponentId: Scalars['ID']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  nonce?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
};

export type CitrixAppliance = {
  __typename?: 'CitrixAppliance';
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CitrixConfiguration = {
  __typename?: 'CitrixConfiguration';
  isCustomField?: Maybe<Scalars['Boolean']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CitrixCrashDump = {
  __typename?: 'CitrixCrashDump';
  size?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
};

export type CitrixExtraInfo = {
  __typename?: 'CitrixExtraInfo';
  key?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CitrixGuestInfo = {
  __typename?: 'CitrixGuestInfo';
  extraInfo?: Maybe<Array<Maybe<CitrixExtraInfo>>>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  live?: Maybe<Scalars['Boolean']['output']>;
  memorySize?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numberOfCores?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  virtualBlockDevices?: Maybe<Array<Maybe<CitrixVirtualBlockDevice>>>;
  virtualInterfaces?: Maybe<Array<Maybe<CitrixVirtualInterface>>>;
  xenServerAssetKey?: Maybe<Scalars['String']['output']>;
};

export type CitrixNetwork = {
  __typename?: 'CitrixNetwork';
  bridge?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  mtu?: Maybe<Scalars['Float']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
};

export type CitrixPhysicalBlockDevice = {
  __typename?: 'CitrixPhysicalBlockDevice';
  currentlyAttached?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type CitrixPhysicalCpu = {
  __typename?: 'CitrixPhysicalCpu';
  family?: Maybe<Scalars['String']['output']>;
  flags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  modelName?: Maybe<Scalars['String']['output']>;
  numberOfCpus?: Maybe<Scalars['Float']['output']>;
  speed?: Maybe<Scalars['Float']['output']>;
  stepping?: Maybe<Scalars['String']['output']>;
};

export type CitrixPhysicalInterface = {
  __typename?: 'CitrixPhysicalInterface';
  currentlyAttached?: Maybe<Scalars['Boolean']['output']>;
  defaultGateway?: Maybe<Scalars['String']['output']>;
  deviceName?: Maybe<Scalars['String']['output']>;
  disallowUnplug?: Maybe<Scalars['Boolean']['output']>;
  dnsServers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ipAddress?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  macAddress?: Maybe<Scalars['String']['output']>;
  mtu?: Maybe<Scalars['Float']['output']>;
  speed?: Maybe<Scalars['Float']['output']>;
  subnetMask?: Maybe<Scalars['String']['output']>;
  vendor?: Maybe<Scalars['String']['output']>;
};

export type CitrixPoolInfo = {
  __typename?: 'CitrixPoolInfo';
  appliances?: Maybe<Array<Maybe<CitrixAppliance>>>;
  citrixXenServerAssetKeys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  highAvailability?: Maybe<Scalars['Boolean']['output']>;
  highAvailabilityAllowOvercommit?: Maybe<Scalars['Boolean']['output']>;
  highAvailabilityOvercommitted?: Maybe<Scalars['Boolean']['output']>;
  livePatching?: Maybe<Scalars['Boolean']['output']>;
  networks?: Maybe<Array<Maybe<CitrixNetwork>>>;
  otherConfigurations?: Maybe<Array<Maybe<CitrixConfiguration>>>;
  patches?: Maybe<Array<Maybe<CitrixPoolPatch>>>;
  policyNoVendorDevice?: Maybe<Scalars['Boolean']['output']>;
  redoLog?: Maybe<Scalars['Boolean']['output']>;
  restrictions?: Maybe<Array<Maybe<CitrixRestriction>>>;
  storages?: Maybe<Array<Maybe<CitrixPoolStorage>>>;
  tags?: Maybe<Scalars['String']['output']>;
  templates?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  workloadBalancing?: Maybe<Scalars['Boolean']['output']>;
  workloadBalancingVerifyCert?: Maybe<Scalars['Boolean']['output']>;
};

export type CitrixPoolPatch = {
  __typename?: 'CitrixPoolPatch';
  afterApplyGuidance?: Maybe<Scalars['String']['output']>;
  applied?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type CitrixPoolStorage = {
  __typename?: 'CitrixPoolStorage';
  clustered?: Maybe<Scalars['Boolean']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  isToolsStorage?: Maybe<Scalars['Boolean']['output']>;
  localCache?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  used?: Maybe<Scalars['Float']['output']>;
  virtualAllocation?: Maybe<Scalars['Float']['output']>;
};

export type CitrixRestriction = {
  __typename?: 'CitrixRestriction';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Boolean']['output']>;
};

export type CitrixVirtualBlockDevice = {
  __typename?: 'CitrixVirtualBlockDevice';
  bootable?: Maybe<Scalars['Boolean']['output']>;
  currentlyAttached?: Maybe<Scalars['Boolean']['output']>;
  device?: Maybe<Scalars['String']['output']>;
  empty?: Maybe<Scalars['Boolean']['output']>;
  mode?: Maybe<Scalars['String']['output']>;
  qosAlgorithmParameters?: Maybe<Scalars['String']['output']>;
  qosAlgorithmType?: Maybe<Scalars['String']['output']>;
  qosSupportedAlgorithms?: Maybe<Scalars['String']['output']>;
  runtimeProperties?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Float']['output']>;
  statusDetails?: Maybe<Scalars['String']['output']>;
  storageLock?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unpluggable?: Maybe<Scalars['Boolean']['output']>;
  userDevice?: Maybe<Scalars['String']['output']>;
  virtualDiskImages?: Maybe<Array<Maybe<CitrixVirtualDiskImage>>>;
};

export type CitrixVirtualDiskImage = {
  __typename?: 'CitrixVirtualDiskImage';
  allowCaching?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  isASnapshot?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  managed?: Maybe<Scalars['Boolean']['output']>;
  metaDataLatest?: Maybe<Scalars['Boolean']['output']>;
  missing?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  onBoot?: Maybe<Scalars['String']['output']>;
  readOnly?: Maybe<Scalars['Boolean']['output']>;
  shareable?: Maybe<Scalars['Boolean']['output']>;
  storageLock?: Maybe<Scalars['Boolean']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  used?: Maybe<Scalars['Float']['output']>;
  virtualSize?: Maybe<Scalars['Float']['output']>;
};

export type CitrixVirtualInterface = {
  __typename?: 'CitrixVirtualInterface';
  currentlyAttached?: Maybe<Scalars['Boolean']['output']>;
  defaultGateway?: Maybe<Scalars['String']['output']>;
  device?: Maybe<Scalars['String']['output']>;
  macAddress?: Maybe<Scalars['String']['output']>;
  macAutoGenerated?: Maybe<Scalars['Boolean']['output']>;
  mtu?: Maybe<Scalars['Float']['output']>;
  qosAlgorithmType?: Maybe<Scalars['String']['output']>;
  qosAlgorithms?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Float']['output']>;
  statusDetails?: Maybe<Scalars['String']['output']>;
};

export type CitrixXenServerInfo = {
  __typename?: 'CitrixXenServerInfo';
  citrixPoolAssetKey?: Maybe<Scalars['String']['output']>;
  crashDumps?: Maybe<Array<Maybe<CitrixCrashDump>>>;
  description?: Maybe<Scalars['String']['output']>;
  edition?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  extraInfo?: Maybe<Array<Maybe<CitrixExtraInfo>>>;
  hostName?: Maybe<Scalars['String']['output']>;
  ipAddress?: Maybe<Scalars['String']['output']>;
  isMaster?: Maybe<Scalars['Boolean']['output']>;
  memoryFree?: Maybe<Scalars['Float']['output']>;
  memoryOverhead?: Maybe<Scalars['Float']['output']>;
  memorySize?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  patches?: Maybe<Array<Maybe<CitrixXenServerPatch>>>;
  pcis?: Maybe<Array<Maybe<PciCard>>>;
  physicalCpus?: Maybe<Array<Maybe<CitrixPhysicalCpu>>>;
  physicalInterfaces?: Maybe<Array<Maybe<CitrixPhysicalInterface>>>;
  schedulerPolicy?: Maybe<Scalars['String']['output']>;
  sslLegacy?: Maybe<Scalars['Boolean']['output']>;
  storages?: Maybe<Array<Maybe<CitrixXenServerStorage>>>;
};

export type CitrixXenServerPatch = {
  __typename?: 'CitrixXenServerPatch';
  appliedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type CitrixXenServerStorage = {
  __typename?: 'CitrixXenServerStorage';
  clustered?: Maybe<Scalars['Boolean']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  isToolsStorage?: Maybe<Scalars['Boolean']['output']>;
  localCache?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  physicalBlockDevices?: Maybe<Array<Maybe<CitrixPhysicalBlockDevice>>>;
  size?: Maybe<Scalars['Float']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  used?: Maybe<Scalars['Float']['output']>;
  virtualAllocation?: Maybe<Scalars['Float']['output']>;
  virtualDiskImages?: Maybe<Array<Maybe<CitrixVirtualDiskImage>>>;
};

export type CloudAssetCustom = {
  __typename?: 'CloudAssetCustom';
  acquisitionType?: Maybe<Scalars['String']['output']>;
  costCenter?: Maybe<Scalars['String']['output']>;
  industry?: Maybe<Scalars['String']['output']>;
  invoiceNumber?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  purchaseOrderDate?: Maybe<Scalars['DateTime']['output']>;
  vendorName?: Maybe<Scalars['String']['output']>;
};

export type CloudAssetCustomInput = {
  acquisitionType?: InputMaybe<Scalars['String']['input']>;
  costCenter?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  invoiceNumber?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  purchaseOrderDate?: InputMaybe<Scalars['DateTime']['input']>;
  vendorName?: InputMaybe<Scalars['String']['input']>;
};

export type Codec = {
  __typename?: 'Codec';
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type Component = {
  __typename?: 'Component';
  caption?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
};

export type ComputerSystem = {
  __typename?: 'ComputerSystem';
  adminPasswordStatus?: Maybe<Scalars['String']['output']>;
  automaticResetBootOption?: Maybe<Scalars['Boolean']['output']>;
  automaticResetCapability?: Maybe<Scalars['Boolean']['output']>;
  bootOptionOnLimit?: Maybe<Scalars['String']['output']>;
  bootOptionOnWatchDog?: Maybe<Scalars['String']['output']>;
  bootRomSupported?: Maybe<Scalars['Boolean']['output']>;
  chassisBootupState?: Maybe<Scalars['String']['output']>;
  currentTimeZone?: Maybe<Scalars['Float']['output']>;
  daylightInEffect?: Maybe<Scalars['Boolean']['output']>;
  domainRole?: Maybe<Scalars['String']['output']>;
  enableDaylightSavingsTime?: Maybe<Scalars['Boolean']['output']>;
  frontPanelResetStatus?: Maybe<Scalars['String']['output']>;
  infraredSupported?: Maybe<Scalars['Boolean']['output']>;
  keyboardPasswordStatus?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  networkServerModeEnabled?: Maybe<Scalars['Boolean']['output']>;
  partOfDomain?: Maybe<Scalars['Boolean']['output']>;
  pauseAfterReset?: Maybe<Scalars['Float']['output']>;
  powerOnPasswordStatus?: Maybe<Scalars['String']['output']>;
  powerState?: Maybe<Scalars['String']['output']>;
  powerSupplyState?: Maybe<Scalars['String']['output']>;
  productName?: Maybe<Scalars['String']['output']>;
  resetCapability?: Maybe<Scalars['String']['output']>;
  resetCount?: Maybe<Scalars['Float']['output']>;
  resetLimit?: Maybe<Scalars['Float']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  serial?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  systemType?: Maybe<Scalars['String']['output']>;
  thermalState?: Maybe<Scalars['String']['output']>;
  wakeupType?: Maybe<Scalars['String']['output']>;
};

export type CreateWebhookInput = {
  URL: Scalars['String']['input'];
  events: Array<InputMaybe<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
};

export enum CurrencyType {
  Aud = 'AUD',
  Brl = 'BRL',
  Cad = 'CAD',
  Chf = 'CHF',
  Cny = 'CNY',
  Eur = 'EUR',
  Gpb = 'GPB',
  Hkd = 'HKD',
  Inr = 'INR',
  Jpy = 'JPY',
  Krw = 'KRW',
  Mxn = 'MXN',
  Nok = 'NOK',
  Rub = 'RUB',
  Sek = 'SEK',
  Sgd = 'SGD',
  Try = 'TRY',
  Usd = 'USD',
  Zar = 'ZAR',
  Znd = 'ZND'
}

export type CursorOrder = {
  __typename?: 'CursorOrder';
  direction?: Maybe<OrderDirection>;
  field?: Maybe<Scalars['String']['output']>;
};

export type CustomField = {
  __typename?: 'CustomField';
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  props?: Maybe<CustomFieldProps>;
  type?: Maybe<FieldType>;
};

export type CustomFieldInput = {
  name: Scalars['String']['input'];
  props?: InputMaybe<CustomFieldPropsInput>;
  type: FieldType;
};

export type CustomFieldProps = {
  __typename?: 'CustomFieldProps';
  currencyType?: Maybe<CurrencyType>;
  linkTag?: Maybe<Scalars['String']['output']>;
  maxNumericValue?: Maybe<Scalars['Int']['output']>;
  minNumericValue?: Maybe<Scalars['Int']['output']>;
  options?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CustomFieldPropsInput = {
  currencyType?: InputMaybe<CurrencyType>;
  linkTag?: InputMaybe<Scalars['String']['input']>;
  maxNumericValue?: InputMaybe<Scalars['Int']['input']>;
  minNumericValue?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Dcom = {
  __typename?: 'DCOM';
  caption?: Maybe<Scalars['String']['output']>;
};

export type DataCenter = {
  __typename?: 'DataCenter';
  dataCenterKey?: Maybe<Scalars['String']['output']>;
  internalKey?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Datastore = {
  __typename?: 'Datastore';
  accessible?: Maybe<Scalars['Boolean']['output']>;
  datastoreClusterKey?: Maybe<Scalars['String']['output']>;
  datastoreKey?: Maybe<Scalars['String']['output']>;
  internalKey?: Maybe<Scalars['String']['output']>;
  maintenanceMode?: Maybe<Scalars['String']['output']>;
  maxFileSize?: Maybe<Scalars['String']['output']>;
  maxMemoryFileSize?: Maybe<Scalars['String']['output']>;
  maxPhysicalRdmFileSize?: Maybe<Scalars['String']['output']>;
  maxVirtualDiskCapacity?: Maybe<Scalars['String']['output']>;
  maxVirtualRdmFileSize?: Maybe<Scalars['String']['output']>;
  multipleHostAccess?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uncommitted?: Maybe<Scalars['String']['output']>;
};

export type DatastoreCluster = {
  __typename?: 'DatastoreCluster';
  capacity?: Maybe<Scalars['String']['output']>;
  datastoreClusterConfigurations?: Maybe<Array<Maybe<VmwareDatastoreClusterConfiguration>>>;
  datastoreClusterKey?: Maybe<Scalars['String']['output']>;
  datastoreClusterOverrides?: Maybe<Array<Maybe<VmwareDatastoreClusterOverride>>>;
  defaultIntraVmAffinity?: Maybe<Scalars['Boolean']['output']>;
  defaultVmBehaviour?: Maybe<Scalars['String']['output']>;
  drsEnabled?: Maybe<Scalars['Boolean']['output']>;
  freeSpace?: Maybe<Scalars['String']['output']>;
  internalKey?: Maybe<Scalars['String']['output']>;
  ioLatencyThreshold?: Maybe<Scalars['Float']['output']>;
  ioLoadBalanceEnabled?: Maybe<Scalars['Boolean']['output']>;
  ioLoadImbalanceThreshold?: Maybe<Scalars['Float']['output']>;
  loadBalanceInterval?: Maybe<Scalars['Float']['output']>;
  minSpaceUtilizationDifference?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  spaceUtilizationThreshold?: Maybe<Scalars['Float']['output']>;
};

export type Desktop = {
  __typename?: 'Desktop';
  borderWidth?: Maybe<Scalars['Float']['output']>;
  dragFullWindows?: Maybe<Scalars['Boolean']['output']>;
  iconSpacing?: Maybe<Scalars['Float']['output']>;
  iconTitleFaceName?: Maybe<Scalars['String']['output']>;
  iconTitleSize?: Maybe<Scalars['Float']['output']>;
  iconTitleWrap?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pattern?: Maybe<Scalars['String']['output']>;
  screenSaverActive?: Maybe<Scalars['Boolean']['output']>;
  wallpaper?: Maybe<Scalars['String']['output']>;
  wallpaperStretched?: Maybe<Scalars['Boolean']['output']>;
  wallpaperTiled?: Maybe<Scalars['Boolean']['output']>;
};

export type DeviceActionResult = {
  __typename?: 'DeviceActionResult';
  actionName?: Maybe<Scalars['String']['output']>;
  actionState?: Maybe<Scalars['String']['output']>;
  lastUpdatedDateTime?: Maybe<Scalars['DateTime']['output']>;
};

export type DeviceApplication = {
  __typename?: 'DeviceApplication';
  deviceCount?: Maybe<Scalars['Float']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  intuneId?: Maybe<Scalars['String']['output']>;
  sizeInByte?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type DiscoveryComponent = {
  __typename?: 'DiscoveryComponent';
  id: Scalars['ID']['output'];
  publicKey?: Maybe<Scalars['String']['output']>;
  scanningGroup?: Maybe<ScanningGroup>;
  scanningTasks?: Maybe<Array<Maybe<DiscoveryScanningTask>>>;
  siteId: Scalars['ID']['output'];
  sourceId: Scalars['ID']['output'];
};

export type DiscoveryCredential = {
  __typename?: 'DiscoveryCredential';
  default: Scalars['Boolean']['output'];
  discoveryComponentIds: Array<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parameters?: Maybe<DiscoveryCredentialParameters>;
  types: Array<DiscoveryCredentialType>;
};

export type DiscoveryCredentialInput = {
  cipherCredentials?: InputMaybe<Array<InputMaybe<CipherCredential>>>;
  default: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  parameters?: InputMaybe<DiscoveryCredentialParametersInput>;
  types?: InputMaybe<Array<DiscoveryCredentialType>>;
};

export type DiscoveryCredentialPaginated = {
  __typename?: 'DiscoveryCredentialPaginated';
  items?: Maybe<Array<Maybe<DiscoveryCredential>>>;
  pagination?: Maybe<Pagination>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type DiscoveryCredentialParameters = {
  __typename?: 'DiscoveryCredentialParameters';
  login?: Maybe<Scalars['String']['output']>;
  snmpV3AuthType?: Maybe<SnmpV3AuthType>;
  snmpV3Context?: Maybe<Scalars['String']['output']>;
  snmpV3Protocol?: Maybe<SnmpV3Protocol>;
};

export type DiscoveryCredentialParametersInput = {
  login?: InputMaybe<Scalars['String']['input']>;
  snmpV3AuthType?: InputMaybe<SnmpV3AuthType>;
  snmpV3Context?: InputMaybe<Scalars['String']['input']>;
  snmpV3Protocol?: InputMaybe<SnmpV3Protocol>;
};

export enum DiscoveryCredentialType {
  SnmpV1 = 'SnmpV1',
  SnmpV2 = 'SnmpV2',
  SnmpV3 = 'SnmpV3',
  Ssh = 'Ssh',
  SshCertificate = 'SshCertificate',
  Windows = 'Windows'
}

export type DiscoveryScanningTask = {
  __typename?: 'DiscoveryScanningTask';
  id: Scalars['ID']['output'];
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  triggers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type DiskPartition = {
  __typename?: 'DiskPartition';
  available?: Maybe<Scalars['Float']['output']>;
  blockSize?: Maybe<Scalars['Float']['output']>;
  bootPartition?: Maybe<Scalars['Boolean']['output']>;
  bootable?: Maybe<Scalars['Boolean']['output']>;
  diskIndex?: Maybe<Scalars['Float']['output']>;
  fileSystem?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  mountedOn?: Maybe<Scalars['String']['output']>;
  numberOfBlocks?: Maybe<Scalars['Float']['output']>;
  primaryPartition?: Maybe<Scalars['Boolean']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  startingOffset?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  used?: Maybe<Scalars['Float']['output']>;
};

export type DisplayConfiguration = {
  __typename?: 'DisplayConfiguration';
  bitsPerPel?: Maybe<Scalars['Float']['output']>;
  displayFlags?: Maybe<Scalars['Boolean']['output']>;
  displayFrequency?: Maybe<Scalars['Float']['output']>;
  driverVersion?: Maybe<Scalars['String']['output']>;
  logPixels?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pelsHeight?: Maybe<Scalars['Float']['output']>;
  pelsWidth?: Maybe<Scalars['Float']['output']>;
  specificationVersion?: Maybe<Scalars['String']['output']>;
};

export type DisplayControllerConfiguration = {
  __typename?: 'DisplayControllerConfiguration';
  bitsPerPixel?: Maybe<Scalars['Float']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  colorPlanes?: Maybe<Scalars['Float']['output']>;
  deviceEntriesInAColorTable?: Maybe<Scalars['Float']['output']>;
  deviceSpecificPens?: Maybe<Scalars['Float']['output']>;
  horizontalResolution?: Maybe<Scalars['Float']['output']>;
  refreshRate?: Maybe<Scalars['Float']['output']>;
  verticalResolution?: Maybe<Scalars['Float']['output']>;
  videoMode?: Maybe<Scalars['String']['output']>;
};

export enum ECursorPage {
  First = 'FIRST',
  Last = 'LAST',
  Next = 'NEXT',
  Prev = 'PREV',
  First = 'first',
  Last = 'last',
  Next = 'next',
  Prev = 'prev'
}

export type EditAssetInput = {
  assetBasicInfo?: InputMaybe<AssetBasicInfoInput>;
  assetCustom?: InputMaybe<AssetCustomInput>;
  cloudAssetCustom?: InputMaybe<CloudAssetCustomInput>;
};

export type EditAssetResponse = {
  __typename?: 'EditAssetResponse';
  assetBasicInfo?: Maybe<AssetBasicInfo>;
  assetCustom?: Maybe<AssetCustom>;
  cloudAssetCustom?: Maybe<CloudAssetCustom>;
};

export type Environment = {
  __typename?: 'Environment';
  name?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
  variableValue?: Maybe<Scalars['String']['output']>;
};

export type Error = {
  __typename?: 'Error';
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type EsxiCluster = {
  __typename?: 'EsxiCluster';
  effectiveCpu?: Maybe<Scalars['Float']['output']>;
  effectiveMemory?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numCpuCores?: Maybe<Scalars['Float']['output']>;
  numCpuThreads?: Maybe<Scalars['Float']['output']>;
  numEffectiveHosts?: Maybe<Scalars['Float']['output']>;
  numHosts?: Maybe<Scalars['Float']['output']>;
  totalCpu?: Maybe<Scalars['Float']['output']>;
  totalMemory?: Maybe<Scalars['String']['output']>;
};

export enum ExportFilterConjunction {
  And = 'AND',
  Or = 'OR'
}

export type ExportFilterGroupedInput = {
  conditions?: InputMaybe<Array<ExportFiltersCondition>>;
  conjunction?: InputMaybe<ExportFilterConjunction>;
  groups?: InputMaybe<Array<ExportFilterInput>>;
};

export type ExportFilterInput = {
  conditions: Array<ExportFiltersCondition>;
  conjunction?: InputMaybe<ExportFilterConjunction>;
};

export enum ExportFilterType {
  Equal = 'EQUAL',
  Exists = 'EXISTS',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  Like = 'LIKE',
  NotEqual = 'NOT_EQUAL',
  Regexp = 'REGEXP',
  SmallerThan = 'SMALLER_THAN',
  SmallerThanOrEqual = 'SMALLER_THAN_OR_EQUAL'
}

export type ExportFilteredResponse = {
  __typename?: 'ExportFilteredResponse';
  COM?: Maybe<Com>;
  DCOM?: Maybe<Dcom>;
  activeDirectoryGroups?: Maybe<Array<Maybe<ActiveDirectoryGroup>>>;
  activeDirectoryInfo?: Maybe<ActiveDirectoryInfo>;
  airWatchApplications?: Maybe<Array<Maybe<AirWatchApplication>>>;
  airWatchDevice?: Maybe<AirWatchDevice>;
  airWatchOrganizationGroup?: Maybe<AirWatchOrganizationGroup>;
  antiviruses?: Maybe<Array<Maybe<Antivirus>>>;
  assetBasicInfo?: Maybe<AssetBasicInfo>;
  assetCustom?: Maybe<AssetCustom>;
  assetGroups?: Maybe<Array<Maybe<AssetGroup>>>;
  autoruns?: Maybe<Array<Maybe<Autorun>>>;
  baseboards?: Maybe<Array<Maybe<Baseboard>>>;
  batteries?: Maybe<Array<Maybe<Battery>>>;
  bioses?: Maybe<Array<Maybe<Bios>>>;
  bitLockerRecoveryKeys?: Maybe<Array<Maybe<BitLockerRecoveryKey>>>;
  bootConfigurations?: Maybe<Array<Maybe<BootConfiguration>>>;
  buses?: Maybe<Array<Maybe<Bus>>>;
  cdromDrives?: Maybe<Array<Maybe<CdromDrive>>>;
  certificates?: Maybe<Array<Maybe<Certificate>>>;
  citrixGuestInfo?: Maybe<CitrixGuestInfo>;
  citrixPoolInfo?: Maybe<CitrixPoolInfo>;
  citrixXenServerInfo?: Maybe<CitrixXenServerInfo>;
  cloudAssetCustom?: Maybe<CloudAssetCustom>;
  codecs?: Maybe<Array<Maybe<Codec>>>;
  components?: Maybe<Array<Maybe<Component>>>;
  computerSystems?: Maybe<Array<Maybe<ComputerSystem>>>;
  datastoreClusters?: Maybe<Array<Maybe<DatastoreCluster>>>;
  datastores?: Maybe<Array<Maybe<Datastore>>>;
  desktops?: Maybe<Array<Maybe<Desktop>>>;
  deviceActionResults?: Maybe<Array<Maybe<DeviceActionResult>>>;
  deviceApplications?: Maybe<Array<Maybe<DeviceApplication>>>;
  diskPartitions?: Maybe<Array<Maybe<DiskPartition>>>;
  displayConfigurations?: Maybe<Array<Maybe<DisplayConfiguration>>>;
  displayControllerConfigurations?: Maybe<Array<Maybe<DisplayControllerConfiguration>>>;
  environments?: Maybe<Array<Maybe<Environment>>>;
  errors?: Maybe<Array<Maybe<Error>>>;
  esxiClusters?: Maybe<Array<Maybe<EsxiCluster>>>;
  exportId?: Maybe<Scalars['ID']['output']>;
  features?: Maybe<Array<Maybe<Feature>>>;
  fileProperties?: Maybe<Array<Maybe<FileProperty>>>;
  graphicsCards?: Maybe<Array<Maybe<GraphicsCard>>>;
  hardDisks?: Maybe<Array<Maybe<HardDisk>>>;
  hyperVGuests?: Maybe<Array<Maybe<HyperVGuest>>>;
  ideControllers?: Maybe<Array<Maybe<IdeController>>>;
  infraredDevices?: Maybe<Array<Maybe<InfraredDevice>>>;
  /** @deprecated No longer supported */
  installKey?: Maybe<Scalars['String']['output']>;
  installationId?: Maybe<Scalars['String']['output']>;
  ipLocation?: Maybe<IpLocation>;
  key?: Maybe<Scalars['String']['output']>;
  keyboards?: Maybe<Array<Maybe<Keyboard>>>;
  logicalDisks?: Maybe<Array<Maybe<LogicalDisk>>>;
  mappedDrives?: Maybe<Array<Maybe<MappedDrive>>>;
  memoryArrays?: Maybe<Array<Maybe<MemoryArray>>>;
  memoryModules?: Maybe<Array<Maybe<MemoryModule>>>;
  mobileDeviceManagement?: Maybe<MobileDeviceManagement>;
  modems?: Maybe<Array<Maybe<Modem>>>;
  monitorData?: Maybe<MonitorData>;
  monitors?: Maybe<Array<Maybe<Monitor>>>;
  networkAdapters?: Maybe<Array<Maybe<NetworkAdapter>>>;
  networkClients?: Maybe<Array<Maybe<NetworkClient>>>;
  networks?: Maybe<Array<Maybe<Network>>>;
  onBoardDevices?: Maybe<Array<Maybe<OnBoardDevice>>>;
  operatingSystem?: Maybe<OperatingSystem>;
  operatingSystemRecoveryConfigurations?: Maybe<Array<Maybe<OperatingSystemRecoveryConfiguration>>>;
  otData?: Maybe<OtData>;
  pageFiles?: Maybe<Array<Maybe<PageFile>>>;
  pciCards?: Maybe<Array<Maybe<PciCard>>>;
  pcmciaControllers?: Maybe<Array<Maybe<PcmciaController>>>;
  performanceInformation?: Maybe<PerformanceInformation>;
  pnpSignedDrivers?: Maybe<Array<Maybe<PnpSignedDriver>>>;
  pointingDevices?: Maybe<Array<Maybe<PointingDevice>>>;
  portConnectors?: Maybe<Array<Maybe<PortConnector>>>;
  printerDrivers?: Maybe<Array<Maybe<PrinterDriver>>>;
  printerInfo?: Maybe<PrinterInfo>;
  printers?: Maybe<Array<Maybe<Printer>>>;
  processes?: Maybe<Array<Maybe<Process>>>;
  processors?: Maybe<Array<Maybe<Processor>>>;
  quickFixEngineerings?: Maybe<Array<Maybe<QuickFixEngineering>>>;
  recognitionInfo?: Maybe<RecognitionInfo>;
  reconciliations?: Maybe<Array<Maybe<Reconciliation>>>;
  registries?: Maybe<Array<Maybe<Registry>>>;
  relations?: Maybe<Array<Maybe<Relation>>>;
  resourceGroup?: Maybe<ResourceGroup>;
  scsiControllers?: Maybe<Array<Maybe<ScsiController>>>;
  securityGroups?: Maybe<Array<Maybe<SecurityGroup>>>;
  serialNumbers?: Maybe<Array<Maybe<SerialNumber>>>;
  services?: Maybe<Array<Maybe<Service>>>;
  shares?: Maybe<Array<Maybe<Share>>>;
  siteId?: Maybe<Scalars['String']['output']>;
  snmpInfos?: Maybe<Array<Maybe<SnmpInfo>>>;
  softwares?: Maybe<Array<Maybe<Software>>>;
  soundDevices?: Maybe<Array<Maybe<SoundDevice>>>;
  sourceExternalId?: Maybe<Scalars['String']['output']>;
  sqlServers?: Maybe<Array<Maybe<SqlServer>>>;
  systemDrivers?: Maybe<Array<Maybe<SystemDriver>>>;
  systemEnclosures?: Maybe<Array<Maybe<SystemEnclosure>>>;
  systemProducts?: Maybe<Array<Maybe<SystemProduct>>>;
  tapeDrives?: Maybe<Array<Maybe<TapeDrive>>>;
  /** @deprecated No longer supported */
  tenantId?: Maybe<Scalars['String']['output']>;
  tonerInformation?: Maybe<Array<Maybe<TonerInformation>>>;
  tpms?: Maybe<Array<Maybe<Tpm>>>;
  ups?: Maybe<Array<Maybe<Ups>>>;
  url?: Maybe<Scalars['String']['output']>;
  usbControllers?: Maybe<Array<Maybe<UsbController>>>;
  usbDevices?: Maybe<Array<Maybe<UsbDevice>>>;
  userInGroups?: Maybe<Array<Maybe<UserInGroup>>>;
  users?: Maybe<Array<Maybe<User>>>;
  vCenter?: Maybe<VCenter>;
  virtualMachine?: Maybe<VirtualMachine>;
  virtualNetworks?: Maybe<Array<Maybe<VirtualNetwork>>>;
  vmwareProductInfo?: Maybe<VmwareProductInfo>;
  volumeGroups?: Maybe<Array<Maybe<VolumeGroup>>>;
  volumes?: Maybe<Array<Maybe<Volume>>>;
  vulnerabilities?: Maybe<Array<Maybe<Vulnerability>>>;
  warranties?: Maybe<Array<Maybe<Warranty>>>;
};

export type ExportFiltersCondition = {
  operator: ExportFilterType;
  path: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ExportStatusResponse = {
  __typename?: 'ExportStatusResponse';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  exportId?: Maybe<Scalars['ID']['output']>;
  progress?: Maybe<Scalars['String']['output']>;
  requestedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ExtendedInfo = {
  __typename?: 'ExtendedInfo';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Feature = {
  __typename?: 'Feature';
  addedDate?: Maybe<Scalars['DateTime']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Field = {
  __typename?: 'Field';
  fieldKey?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export enum FieldType {
  Currency = 'CURRENCY',
  Date = 'DATE',
  Hyperlink = 'HYPERLINK',
  Input = 'INPUT',
  Numeric = 'NUMERIC',
  Select = 'SELECT',
  Textarea = 'TEXTAREA',
  Time = 'TIME'
}

export type FieldsInput = {
  fieldKey: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type FileProperty = {
  __typename?: 'FileProperty';
  companyName?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['DateTime']['output']>;
  found?: Maybe<Scalars['Boolean']['output']>;
  lastAccessed?: Maybe<Scalars['DateTime']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  pathfull?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type FirmwareHistory = {
  __typename?: 'FirmwareHistory';
  firmware?: Maybe<Scalars['String']['output']>;
  from?: Maybe<Scalars['DateTime']['output']>;
  to?: Maybe<Scalars['DateTime']['output']>;
};

export type GraphicsCard = {
  __typename?: 'GraphicsCard';
  adapterCompatibility?: Maybe<Scalars['String']['output']>;
  adapterRam?: Maybe<Scalars['Float']['output']>;
  availability?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  currentBitsPerPixel?: Maybe<Scalars['Float']['output']>;
  currentHorizontalResolution?: Maybe<Scalars['Float']['output']>;
  currentNumberOfColors?: Maybe<Scalars['Float']['output']>;
  currentRefreshRate?: Maybe<Scalars['Float']['output']>;
  currentScanMode?: Maybe<Scalars['String']['output']>;
  currentVerticalResolution?: Maybe<Scalars['Float']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  deviceSpecificPens?: Maybe<Scalars['Float']['output']>;
  driverVersion?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  maxRefreshRate?: Maybe<Scalars['Float']['output']>;
  minRefreshRate?: Maybe<Scalars['Float']['output']>;
  monochrome?: Maybe<Scalars['Boolean']['output']>;
  numberOfColorPlanes?: Maybe<Scalars['Float']['output']>;
  subSystemManufacturer?: Maybe<Scalars['String']['output']>;
  subSystemName?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  videoArchitecture?: Maybe<Scalars['String']['output']>;
  videoMemoryType?: Maybe<Scalars['String']['output']>;
  videoModeDescription?: Maybe<Scalars['String']['output']>;
};

export type GroupedAggSoftwareCursoredResponse = {
  __typename?: 'GroupedAggSoftwareCursoredResponse';
  current?: Maybe<Array<Maybe<AggregatedCursor>>>;
  items?: Maybe<Array<Maybe<GroupedSoftware>>>;
  limit?: Maybe<Scalars['Int']['output']>;
  next?: Maybe<Array<Maybe<AggregatedCursor>>>;
  order?: Maybe<Array<Maybe<CursorOrder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type GroupedRelease = {
  __typename?: 'GroupedRelease';
  /** @deprecated No longer supported */
  release?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type GroupedSoftware = {
  __typename?: 'GroupedSoftware';
  architectures?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  assets?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  editions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated No longer supported */
  iconPublisher?: Maybe<Scalars['String']['output']>;
  /** @deprecated No longer supported */
  iconSoftware?: Maybe<Scalars['String']['output']>;
  installDate?: Maybe<Scalars['Date']['output']>;
  installType?: Maybe<Scalars['String']['output']>;
  /** @deprecated No longer supported */
  labeledPublisher?: Maybe<Scalars['String']['output']>;
  /** @deprecated No longer supported */
  labeledSoftware?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated No longer supported */
  lastSeen?: Maybe<Scalars['Date']['output']>;
  marketVersions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  operatingSystems?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  publisher?: Maybe<Scalars['String']['output']>;
  relatedSoftwareNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated No longer supported */
  release?: Maybe<Array<Maybe<GroupedRelease>>>;
  shortVersions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated No longer supported */
  siteId?: Maybe<Scalars['String']['output']>;
  software?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unspsc?: Maybe<Scalars['String']['output']>;
  versions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type HardDisk = {
  __typename?: 'HardDisk';
  bytesPerSector?: Maybe<Scalars['Float']['output']>;
  firmwareRevision?: Maybe<Scalars['String']['output']>;
  hctl?: Maybe<Scalars['String']['output']>;
  hotplug?: Maybe<Scalars['Boolean']['output']>;
  interfaceType?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  majmin?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  partitions?: Maybe<Scalars['Float']['output']>;
  sectorsPerTrack?: Maybe<Scalars['Float']['output']>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalCylinders?: Maybe<Scalars['Float']['output']>;
  totalHeads?: Maybe<Scalars['Float']['output']>;
  totalSectors?: Maybe<Scalars['Float']['output']>;
  totalTracks?: Maybe<Scalars['Float']['output']>;
  tracksPerCylinder?: Maybe<Scalars['Float']['output']>;
};

export type HyperVGuest = {
  __typename?: 'HyperVGuest';
  enabledState?: Maybe<Scalars['String']['output']>;
  guestAssetKey?: Maybe<Scalars['String']['output']>;
  healthState?: Maybe<Scalars['String']['output']>;
  hostAssetKey?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  memorySize?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  networks?: Maybe<Array<Maybe<HyperVNetwork>>>;
};

export type HyperVNetwork = {
  __typename?: 'HyperVNetwork';
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  macAddress?: Maybe<Scalars['String']['output']>;
};

export type IVersionResponse = {
  __typename?: 'IVersionResponse';
  expiresOn?: Maybe<Scalars['Date']['output']>;
  masterdata?: Maybe<Array<Maybe<WebhookMasterdata>>>;
  name?: Maybe<Scalars['String']['output']>;
  resources: Array<Maybe<WebhookResource>>;
  version: Scalars['Int']['output'];
};

export type IdeController = {
  __typename?: 'IdeController';
  caption?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  protocolSupported?: Maybe<Scalars['String']['output']>;
};

export type InfraredDevice = {
  __typename?: 'InfraredDevice';
  availability?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  errorCode?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  protocolSupported?: Maybe<Scalars['Boolean']['output']>;
  userConfig?: Maybe<Scalars['Boolean']['output']>;
};

export enum InstallType {
  Cloud = 'CLOUD',
  It = 'IT',
  ItAgent = 'IT_AGENT',
  NetworkDiscovery = 'NETWORK_DISCOVERY',
  Ot = 'OT'
}

export type InstallationState = {
  __typename?: 'InstallationState';
  deletedOnDate?: Maybe<Scalars['DateTime']['output']>;
  firstSyncCompletedOn?: Maybe<Scalars['DateTime']['output']>;
  unlinkedOnDate?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export enum InstallationType {
  It = 'IT',
  Ot = 'OT'
}

export type IntegrationsInstallation = {
  __typename?: 'IntegrationsInstallation';
  description?: Maybe<Scalars['String']['output']>;
  fqdn?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  installationDate?: Maybe<Scalars['DateTime']['output']>;
  lastAvailable?: Maybe<Scalars['DateTime']['output']>;
  linkStatus?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  siteId?: Maybe<Scalars['ID']['output']>;
  syncServer?: Maybe<Scalars['String']['output']>;
  syncServerStatus?: Maybe<Scalars['String']['output']>;
  totalAssets?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<InstallType>;
  unlinkedBy?: Maybe<Scalars['String']['output']>;
  unlinkedOn?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type IpLocation = {
  __typename?: 'IpLocation';
  endIp?: Maybe<Scalars['Float']['output']>;
  ipLocation?: Maybe<Scalars['String']['output']>;
  packageShare?: Maybe<Scalars['String']['output']>;
  realEnd?: Maybe<Scalars['String']['output']>;
  realStart?: Maybe<Scalars['String']['output']>;
  shareKeyHash?: Maybe<Scalars['String']['output']>;
  sharePassword?: Maybe<Scalars['String']['output']>;
  shareUserName?: Maybe<Scalars['String']['output']>;
  startIp?: Maybe<Scalars['Float']['output']>;
};

export type ItemsResponse = {
  __typename?: 'ItemsResponse';
  items?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  pagination?: Maybe<AssetsPagination>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type KbPatches = {
  __typename?: 'KbPatches';
  kb: Scalars['String']['output'];
};

export type Keyboard = {
  __typename?: 'Keyboard';
  caption?: Maybe<Scalars['String']['output']>;
  configManagerErrorCode?: Maybe<Scalars['String']['output']>;
  configManagerUserConfig?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  layout?: Maybe<Scalars['String']['output']>;
  numberOfFunctionKeys?: Maybe<Scalars['Float']['output']>;
};

export type LogicalDisk = {
  __typename?: 'LogicalDisk';
  cachingType?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  compressed?: Maybe<Scalars['Boolean']['output']>;
  creationMethod?: Maybe<Scalars['String']['output']>;
  creationSourceType?: Maybe<Scalars['String']['output']>;
  datastoreKey?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  diskType?: Maybe<Scalars['String']['output']>;
  driveType?: Maybe<Scalars['String']['output']>;
  fileSystem?: Maybe<Scalars['String']['output']>;
  freeSpace?: Maybe<Scalars['Float']['output']>;
  isDiskEncryptionEnabled?: Maybe<Scalars['Boolean']['output']>;
  isWriteAcceleratorEnabled?: Maybe<Scalars['Boolean']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  mountedOn?: Maybe<Scalars['String']['output']>;
  osType?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  storageAccountType?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  timeCreated?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  volumeName?: Maybe<Scalars['String']['output']>;
  volumeSerialNumber?: Maybe<Scalars['String']['output']>;
  zone?: Maybe<Scalars['String']['output']>;
};

export type LogicalVolume = {
  __typename?: 'LogicalVolume';
  blockDevice?: Maybe<Scalars['String']['output']>;
  deviceMapperPath?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  relatedGroup?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type MaintenanceWindowInput = {
  fromHour?: InputMaybe<Scalars['Int']['input']>;
  toHour?: InputMaybe<Scalars['Int']['input']>;
};

export type MappedDrive = {
  __typename?: 'MappedDrive';
  autoMounted?: Maybe<Scalars['Boolean']['output']>;
  driveLetter?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  mountedFrom?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  remotePath?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type Me = {
  __typename?: 'Me';
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  profiles?: Maybe<Array<Maybe<SiteUserProfile>>>;
  surname?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type MemoryArray = {
  __typename?: 'MemoryArray';
  correctionError?: Maybe<Scalars['String']['output']>;
  currentInterleave?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  maxMemoryModuleSize?: Maybe<Scalars['Float']['output']>;
  numberOfSlots?: Maybe<Scalars['Float']['output']>;
  supportedInterleave?: Maybe<Scalars['String']['output']>;
  supportedSpeeds?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  supportedTypes?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  totalSize?: Maybe<Scalars['Float']['output']>;
  use?: Maybe<Scalars['String']['output']>;
};

export type MemoryModule = {
  __typename?: 'MemoryModule';
  configuredClockSpeed?: Maybe<Scalars['Float']['output']>;
  dataWidth?: Maybe<Scalars['Float']['output']>;
  formFactor?: Maybe<Scalars['String']['output']>;
  interleaveDatadepth?: Maybe<Scalars['Float']['output']>;
  interleavePosition?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  locator?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  partNumber?: Maybe<Scalars['String']['output']>;
  positionInRow?: Maybe<Scalars['Float']['output']>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  set?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  speed?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalWidth?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  typeDetail?: Maybe<Scalars['String']['output']>;
  voltage?: Maybe<Scalars['Float']['output']>;
};

export type MobileDeviceManagement = {
  __typename?: 'MobileDeviceManagement';
  azureADDeviceId?: Maybe<Scalars['String']['output']>;
  container?: Maybe<MobileDeviceManagementContainer>;
  deviceCategoryDisplayName?: Maybe<Scalars['String']['output']>;
  deviceEnrollmentType?: Maybe<Scalars['String']['output']>;
  deviceName?: Maybe<Scalars['String']['output']>;
  deviceRegistrationState?: Maybe<Scalars['String']['output']>;
  easActivationDateTime?: Maybe<Scalars['String']['output']>;
  easDeviceId?: Maybe<Scalars['String']['output']>;
  emailAddress?: Maybe<Scalars['String']['output']>;
  freeStorageSpaceInBytes?: Maybe<Scalars['Float']['output']>;
  imei?: Maybe<Scalars['String']['output']>;
  intuneId?: Maybe<Scalars['String']['output']>;
  isAzureADRegistered?: Maybe<Scalars['Boolean']['output']>;
  isEasActivated?: Maybe<Scalars['Boolean']['output']>;
  isEncrypted?: Maybe<Scalars['Boolean']['output']>;
  isSupervised?: Maybe<Scalars['Boolean']['output']>;
  lastSyncDateTime?: Maybe<Scalars['DateTime']['output']>;
  managedDeviceOwnerType?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  operatingSystem?: Maybe<Scalars['String']['output']>;
  osVersion?: Maybe<Scalars['String']['output']>;
  safeMode?: Maybe<Scalars['String']['output']>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  subscriberCarrier?: Maybe<Scalars['String']['output']>;
  totalStorageSpaceInBytes?: Maybe<Scalars['Float']['output']>;
  userDisplayName?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  userPrincipalName?: Maybe<Scalars['String']['output']>;
  virtualSecureMode?: Maybe<Scalars['String']['output']>;
  wiFiMacAddress?: Maybe<Scalars['String']['output']>;
  windowsPE?: Maybe<Scalars['String']['output']>;
};

export type MobileDeviceManagementContainer = {
  __typename?: 'MobileDeviceManagementContainer';
  appId?: Maybe<Scalars['String']['output']>;
  intuneAccount?: Maybe<Scalars['String']['output']>;
};

export type ModelMetadata = {
  __typename?: 'ModelMetadata';
  endOfLifeDate?: Maybe<Scalars['DateTime']['output']>;
  endOfSupportDate?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  releaseDate?: Maybe<Scalars['DateTime']['output']>;
};

export type Modem = {
  __typename?: 'Modem';
  attachedTo?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  countryselected?: Maybe<Scalars['String']['output']>;
  externalModem?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  maxBaudRateToPhone?: Maybe<Scalars['Float']['output']>;
  maxBaudRateToSerialPort?: Maybe<Scalars['Float']['output']>;
  providerName?: Maybe<Scalars['String']['output']>;
};

export type Monitor = {
  __typename?: 'Monitor';
  builtIn?: Maybe<Scalars['Boolean']['output']>;
  coreImage?: Maybe<Scalars['String']['output']>;
  depth?: Maybe<Scalars['String']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  deviceType?: Maybe<Scalars['String']['output']>;
  displayType?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  main?: Maybe<Scalars['Boolean']['output']>;
  manufactureDate?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  mirror?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  online?: Maybe<Scalars['Boolean']['output']>;
  pixelsPerXLogicalInch?: Maybe<Scalars['Float']['output']>;
  pixelsPerYLogicalInch?: Maybe<Scalars['Float']['output']>;
  pnpDeviceId?: Maybe<Scalars['String']['output']>;
  quartzExtreme?: Maybe<Scalars['String']['output']>;
  resolution?: Maybe<Scalars['String']['output']>;
  serialNumber?: Maybe<Scalars['String']['output']>;
};

export type MonitorData = {
  __typename?: 'MonitorData';
  acFreq?: Maybe<Scalars['String']['output']>;
  acVoltage?: Maybe<Scalars['String']['output']>;
  aspectRatio?: Maybe<Scalars['String']['output']>;
  averageWattUsage?: Maybe<Scalars['Float']['output']>;
  creationDate?: Maybe<Scalars['DateTime']['output']>;
  current?: Maybe<Scalars['String']['output']>;
  diagonal?: Maybe<Scalars['Float']['output']>;
  displayPortVersion?: Maybe<Scalars['String']['output']>;
  displayTech?: Maybe<Scalars['String']['output']>;
  energyClass?: Maybe<Scalars['String']['output']>;
  hasCamera?: Maybe<Scalars['Boolean']['output']>;
  hasSpeakers?: Maybe<Scalars['Boolean']['output']>;
  hasUsbHub?: Maybe<Scalars['Boolean']['output']>;
  hdType?: Maybe<Scalars['String']['output']>;
  hdmiVersion?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  maxResolution?: Maybe<Scalars['String']['output']>;
  maxWattUsage?: Maybe<Scalars['Float']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  numberOfDisplayPorts?: Maybe<Scalars['Float']['output']>;
  numberOfDvi?: Maybe<Scalars['Float']['output']>;
  numberOfHdmi?: Maybe<Scalars['Float']['output']>;
  numberOfUsbUpstream?: Maybe<Scalars['Float']['output']>;
  numberOfVga?: Maybe<Scalars['Float']['output']>;
  panel?: Maybe<Scalars['String']['output']>;
  refreshRate?: Maybe<Scalars['String']['output']>;
  responseTime?: Maybe<Scalars['Float']['output']>;
  sdrPer1000U?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  standbyWattUsage?: Maybe<Scalars['Float']['output']>;
  usbTypeADownstream?: Maybe<Scalars['Float']['output']>;
  usbUpstream?: Maybe<Scalars['String']['output']>;
  wattPowerSave?: Maybe<Scalars['Float']['output']>;
  wattUsageWhenOff?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _blank?: Maybe<Scalars['Boolean']['output']>;
  appAccount?: Maybe<AppAccountMutation>;
  assetsAPIVersion?: Maybe<Scalars['String']['output']>;
  installStatusVersion?: Maybe<Scalars['String']['output']>;
  integrationWebhooksAPIVersion?: Maybe<Scalars['String']['output']>;
  integrationsAssetsAPIVersion?: Maybe<Scalars['String']['output']>;
  integrationsExporterAPIVersion?: Maybe<Scalars['String']['output']>;
  integrationsReportsAPIVersion?: Maybe<Scalars['String']['output']>;
  orgSite?: Maybe<OrgSiteMutation>;
  organization?: Maybe<OrganizationMutation>;
  site?: Maybe<SiteMutation>;
};


export type MutationAppAccountArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationOrgSiteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSiteArgs = {
  id: Scalars['ID']['input'];
};

export type Network = {
  __typename?: 'Network';
  appliedDnsServers?: Maybe<Scalars['String']['output']>;
  attachTime?: Maybe<Scalars['DateTime']['output']>;
  broadCast?: Maybe<Scalars['String']['output']>;
  configuration?: Maybe<AzureIpConfiguration>;
  connection?: Maybe<NetworkConnection>;
  databasePath?: Maybe<Scalars['String']['output']>;
  defaultGateway?: Maybe<Scalars['String']['output']>;
  deleteOnTermination?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dhcpEnabled?: Maybe<Scalars['Boolean']['output']>;
  dhcpServer?: Maybe<Scalars['String']['output']>;
  dnsDomain?: Maybe<Scalars['String']['output']>;
  dnsDomainSuffixSearchOrder?: Maybe<Scalars['String']['output']>;
  dnsEnabledForWinsResolution?: Maybe<Scalars['Boolean']['output']>;
  dnsHostName?: Maybe<Scalars['String']['output']>;
  dnsServerSearchOrder?: Maybe<Scalars['String']['output']>;
  dnsServers?: Maybe<Scalars['String']['output']>;
  domainDnsRegistrationEnabled?: Maybe<Scalars['Boolean']['output']>;
  fullDnsRegistrationEnabled?: Maybe<Scalars['Boolean']['output']>;
  gatewayCostMetric?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['String']['output']>;
  iPv6Prefix?: Maybe<Scalars['String']['output']>;
  internalDnsNameLabel?: Maybe<Scalars['String']['output']>;
  internalDomainNameSuffix?: Maybe<Scalars['String']['output']>;
  internalFqdn?: Maybe<Scalars['String']['output']>;
  internalKey?: Maybe<Scalars['String']['output']>;
  ipAddressV4?: Maybe<Scalars['String']['output']>;
  ipAddressV6?: Maybe<Scalars['String']['output']>;
  ipConnectionMetric?: Maybe<Scalars['Float']['output']>;
  ipEnabled?: Maybe<Scalars['Boolean']['output']>;
  ipFilterSecurityEnabled?: Maybe<Scalars['Boolean']['output']>;
  ipPortSecurityEnabled?: Maybe<Scalars['Boolean']['output']>;
  ipSecPermitIpProtocols?: Maybe<Scalars['String']['output']>;
  ipSecPermitTcpPorts?: Maybe<Scalars['String']['output']>;
  isAcceleratedNetworkingEnabled?: Maybe<Scalars['Boolean']['output']>;
  isIpForwardingEnabled?: Maybe<Scalars['Boolean']['output']>;
  isPrimaryNetworkInterface?: Maybe<Scalars['Boolean']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  linkEncap?: Maybe<Scalars['String']['output']>;
  macAddress?: Maybe<Scalars['String']['output']>;
  master?: Maybe<Scalars['String']['output']>;
  mtu?: Maybe<Scalars['Float']['output']>;
  networkInterfaceId?: Maybe<Scalars['String']['output']>;
  qDisc?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  requesterManaged?: Maybe<Scalars['Boolean']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
  serviceOrder?: Maybe<Scalars['Float']['output']>;
  sourceDestCheck?: Maybe<Scalars['Boolean']['output']>;
  speed?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  subnetMask?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  tcpIpNetbiosOptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Scalars['String']['output']>;
  winsEnableLmHostsLookUp?: Maybe<Scalars['Boolean']['output']>;
  winsPrimaryserver?: Maybe<Scalars['String']['output']>;
  winsSecondaryServer?: Maybe<Scalars['String']['output']>;
};

export type NetworkActionDefinition = {
  __typename?: 'NetworkActionDefinition';
  targets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type NetworkActionDefinitionInput = {
  targets: Array<InputMaybe<Scalars['String']['input']>>;
};

export type NetworkAdapter = {
  __typename?: 'NetworkAdapter';
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  macAddress?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  netConnectionId?: Maybe<Scalars['String']['output']>;
  netEnabled?: Maybe<Scalars['Boolean']['output']>;
  speed?: Maybe<Scalars['String']['output']>;
};

export type NetworkClient = {
  __typename?: 'NetworkClient';
  caption?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type NetworkConnection = {
  __typename?: 'NetworkConnection';
  key?: Maybe<Scalars['String']['output']>;
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
};

export type NetworkVisibilityConfig = {
  __typename?: 'NetworkVisibilityConfig';
  enabled?: Maybe<Scalars['Boolean']['output']>;
};

export type NetworkVisibilityInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OnBoardDevice = {
  __typename?: 'OnBoardDevice';
  description?: Maybe<Scalars['String']['output']>;
  deviceType?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
};

export type OperatingSystem = {
  __typename?: 'OperatingSystem';
  activeTimeRanges?: Maybe<Array<Maybe<ChromeOsActiveTimeRange>>>;
  annotatedAssetId?: Maybe<Scalars['String']['output']>;
  annotatedLocation?: Maybe<Scalars['String']['output']>;
  annotatedUser?: Maybe<Scalars['String']['output']>;
  bootStatus?: Maybe<Scalars['String']['output']>;
  buildNumber?: Maybe<Scalars['String']['output']>;
  buildRevNumber?: Maybe<Scalars['String']['output']>;
  buildType?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  codeset?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  currentTimezone?: Maybe<Scalars['Float']['output']>;
  dataExecutionPrevention32BitApplications?: Maybe<Scalars['Boolean']['output']>;
  dataExecutionPreventionAvailable?: Maybe<Scalars['Boolean']['output']>;
  dataExecutionPreventionDrivers?: Maybe<Scalars['Boolean']['output']>;
  dataExecutionPreventionSupportPolicy?: Maybe<Scalars['String']['output']>;
  debug?: Maybe<Scalars['Boolean']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  encryptionLevel?: Maybe<Scalars['Float']['output']>;
  foregroundApplicationBoost?: Maybe<Scalars['String']['output']>;
  hostName?: Maybe<Scalars['String']['output']>;
  installDate?: Maybe<Scalars['DateTime']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  lastEnrollmentTime?: Maybe<Scalars['DateTime']['output']>;
  maxProcessMemorySize?: Maybe<Scalars['Float']['output']>;
  meid?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  numberOfLicensedUsers?: Maybe<Scalars['Float']['output']>;
  orgUnitPath?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Scalars['String']['output']>;
  osDiskSizeInMb?: Maybe<Scalars['String']['output']>;
  osProductSuite?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  osType?: Maybe<Scalars['String']['output']>;
  otherTypeDescription?: Maybe<Scalars['String']['output']>;
  productType?: Maybe<Scalars['String']['output']>;
  registeredUser?: Maybe<Scalars['String']['output']>;
  secureVirtualMemory?: Maybe<Scalars['String']['output']>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  servicePack?: Maybe<Scalars['String']['output']>;
  servicePackMajorVersion?: Maybe<Scalars['String']['output']>;
  servicePackMinorVersion?: Maybe<Scalars['String']['output']>;
  sizeStoredInPagingFiles?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  suiteMask?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  supportEndDate?: Maybe<Scalars['DateTime']['output']>;
  systemDevice?: Maybe<Scalars['String']['output']>;
  systemDrive?: Maybe<Scalars['String']['output']>;
  totalVirtualMemorySize?: Maybe<Scalars['Float']['output']>;
  totalVisibleMemorySize?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  willAutoRenew?: Maybe<Scalars['Boolean']['output']>;
  windowsDirectory?: Maybe<Scalars['String']['output']>;
  x86x64Kernel?: Maybe<Scalars['String']['output']>;
};

export type OperatingSystemDetails = {
  __typename?: 'OperatingSystemDetails';
  architectures?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Min of the field earliestInstallDate from each versionsDetails */
  earliestInstallDate?: Maybe<Scalars['Date']['output']>;
  editions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  languages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  operatingSystem: Scalars['String']['output'];
  /** Gather of the field relatedSoftwareNames from each versionsDetails */
  relatedSoftwareNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Gather of the field releaseInfo from each versionsDetails
   * @deprecated No longer supported
   */
  releaseInfo?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Sum of the field totalInstallations from each versionsDetails */
  totalInstallations?: Maybe<Scalars['Int']['output']>;
  /** Count of versionsDetails */
  totalVersions?: Maybe<Scalars['Int']['output']>;
  versionsDetails?: Maybe<Array<Maybe<VersionDetails>>>;
};

export type OperatingSystemRecoveryConfiguration = {
  __typename?: 'OperatingSystemRecoveryConfiguration';
  autoReboot?: Maybe<Scalars['Boolean']['output']>;
  debugFilepath?: Maybe<Scalars['String']['output']>;
  debugInfoType?: Maybe<Scalars['String']['output']>;
  kernelDumpOnly?: Maybe<Scalars['Float']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  miniDumpDirectory?: Maybe<Scalars['String']['output']>;
  overwriteExistingDebugFile?: Maybe<Scalars['Boolean']['output']>;
  sendAdminAlert?: Maybe<Scalars['Boolean']['output']>;
  writeDebugInfo?: Maybe<Scalars['Boolean']['output']>;
  writeToSystemlog?: Maybe<Scalars['Boolean']['output']>;
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrgSite = {
  __typename?: 'OrgSite';
  assetDetails?: Maybe<AssetDetailsResponse>;
  assetResources?: Maybe<ItemsResponse>;
  customFields?: Maybe<Array<Maybe<CustomField>>>;
  discoveryCredentials?: Maybe<DiscoveryCredentialPaginated>;
  exportStatus?: Maybe<ExportStatusResponse>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  reportExecutionResults?: Maybe<ReportsResultsResponse>;
  reportFullExport?: Maybe<ReportsFullExportResponse>;
  reportFullExportStatus?: Maybe<ReportsFullExportStatusResponse>;
  reports?: Maybe<ReportsResponse>;
  scanningGroups?: Maybe<Array<Maybe<ScanningGroup>>>;
  scanningTasks?: Maybe<Array<Maybe<ScanningTask>>>;
  softwareListWithCursor?: Maybe<GroupedAggSoftwareCursoredResponse>;
  sources?: Maybe<PaginatedSourcesResponse>;
};


export type OrgSiteAssetDetailsArgs = {
  key: Scalars['ID']['input'];
};


export type OrgSiteAssetResourcesArgs = {
  assetPagination?: InputMaybe<AssetsPaginationInputValidated>;
  fields: Array<Scalars['String']['input']>;
  filters?: InputMaybe<AssetsFilterGroupedInput>;
  pagination?: InputMaybe<AssetsPaginationInput>;
};


export type OrgSiteDiscoveryCredentialsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type OrgSiteExportStatusArgs = {
  exportId: Scalars['ID']['input'];
};


export type OrgSiteReportExecutionResultsArgs = {
  reportId: Scalars['ID']['input'];
};


export type OrgSiteReportFullExportArgs = {
  reportId: Scalars['ID']['input'];
};


export type OrgSiteReportFullExportStatusArgs = {
  exportId: Scalars['ID']['input'];
  reportId: Scalars['ID']['input'];
};


export type OrgSiteReportsArgs = {
  filters?: InputMaybe<AssetsFilterGroupedInput>;
  installationType?: InputMaybe<InstallationType>;
  pagination?: InputMaybe<AssetsPaginationInputValidated>;
};


export type OrgSiteSoftwareListWithCursorArgs = {
  filter?: InputMaybe<Array<InputMaybe<SearchInput>>>;
  softwarePagination?: InputMaybe<SoftwareAggregatedPaginatedCursorInput>;
};


export type OrgSiteSourcesArgs = {
  filters?: InputMaybe<SourcesFilterGroupedInput>;
  pagination?: InputMaybe<SourcesPaginationInput>;
};

export type OrgSiteCreated = {
  __typename?: 'OrgSiteCreated';
  clientId?: Maybe<Scalars['String']['output']>;
  clientSecret?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type OrgSiteMutation = {
  __typename?: 'OrgSiteMutation';
  createCustomField?: Maybe<CustomField>;
  createDiscoveryCredential?: Maybe<DiscoveryCredential>;
  createScanningGroup?: Maybe<ScanningGroup>;
  createScanningTask?: Maybe<ScanningTask>;
  createWebhook?: Maybe<SiteWebhook>;
  deleteAssets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  deleteCustomField?: Maybe<Scalars['ID']['output']>;
  deleteDiscoveryCredential: Scalars['ID']['output'];
  deleteNetworkDiscoveryAssets?: Maybe<Scalars['Int']['output']>;
  editAsset?: Maybe<EditAssetResponse>;
  exportFilteredAssets?: Maybe<ExportFilteredResponse>;
  id: Scalars['ID']['output'];
  linkingCode?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  reportSetSchedule?: Maybe<Scalars['String']['output']>;
  source?: Maybe<SourceMutation>;
  unlink: Array<Maybe<Scalars['String']['output']>>;
  updateScanningGroup?: Maybe<ScanningGroup>;
  updateScanningTask?: Maybe<ScanningTask>;
};


export type OrgSiteMutationCreateCustomFieldArgs = {
  field: CustomFieldInput;
};


export type OrgSiteMutationCreateDiscoveryCredentialArgs = {
  credential?: InputMaybe<DiscoveryCredentialInput>;
};


export type OrgSiteMutationCreateScanningGroupArgs = {
  scanningGroup?: InputMaybe<ScanningGroupInput>;
};


export type OrgSiteMutationCreateScanningTaskArgs = {
  scanningTask?: InputMaybe<ScanningTaskInput>;
};


export type OrgSiteMutationCreateWebhookArgs = {
  webhookParams?: InputMaybe<CreateWebhookInput>;
};


export type OrgSiteMutationDeleteAssetsArgs = {
  keys: Array<Scalars['String']['input']>;
};


export type OrgSiteMutationDeleteCustomFieldArgs = {
  key: Scalars['ID']['input'];
};


export type OrgSiteMutationDeleteDiscoveryCredentialArgs = {
  id: Scalars['ID']['input'];
};


export type OrgSiteMutationEditAssetArgs = {
  fields?: InputMaybe<EditAssetInput>;
  key: Scalars['ID']['input'];
};


export type OrgSiteMutationExportFilteredAssetsArgs = {
  filters?: InputMaybe<ExportFilterGroupedInput>;
};


export type OrgSiteMutationReportSetScheduleArgs = {
  reportId: Scalars['ID']['input'];
  schedule?: InputMaybe<Scalars['String']['input']>;
};


export type OrgSiteMutationSourceArgs = {
  id: Scalars['ID']['input'];
};


export type OrgSiteMutationUnlinkArgs = {
  sourceIds: Array<Scalars['String']['input']>;
};


export type OrgSiteMutationUpdateScanningGroupArgs = {
  id: Scalars['ID']['input'];
  scanningGroup?: InputMaybe<ScanningGroupInput>;
};


export type OrgSiteMutationUpdateScanningTaskArgs = {
  id: Scalars['ID']['input'];
  scanningTask?: InputMaybe<ScanningTaskInput>;
};

export type OrganizationMutation = {
  __typename?: 'OrganizationMutation';
  createOrgSite?: Maybe<OrgSiteCreated>;
  deleteOrgSite?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  rotateOrgSiteCredentials?: Maybe<RotateOrgSiteCredentials>;
  rotateOrganizationCredentials?: Maybe<RotateOrganizationCredentials>;
};


export type OrganizationMutationDeleteOrgSiteArgs = {
  id: Scalars['ID']['input'];
};


export type OrganizationMutationRotateOrgSiteCredentialsArgs = {
  id: Scalars['ID']['input'];
};

export type OsMetadata = {
  __typename?: 'OsMetadata';
  build?: Maybe<Scalars['String']['output']>;
  endOfLifeDate?: Maybe<Scalars['DateTime']['output']>;
  endOfSupportDate?: Maybe<Scalars['DateTime']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  releaseDate?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type OtData = {
  __typename?: 'OtData';
  busConfig?: Maybe<Array<Maybe<BusConfig>>>;
  extendedInfo?: Maybe<Array<Maybe<ExtendedInfo>>>;
  firmwareHistory?: Maybe<Array<Maybe<FirmwareHistory>>>;
  firmwareVersion?: Maybe<Scalars['String']['output']>;
  isMainModule?: Maybe<Scalars['Boolean']['output']>;
  isNetworkNode?: Maybe<Scalars['Boolean']['output']>;
  moduleType?: Maybe<Scalars['String']['output']>;
  partNumber?: Maybe<Scalars['String']['output']>;
  routePath?: Maybe<Scalars['String']['output']>;
};

export enum Page {
  First = 'FIRST',
  Last = 'LAST',
  Next = 'NEXT',
  Prev = 'PREV'
}

export type PageFile = {
  __typename?: 'PageFile';
  caption?: Maybe<Scalars['String']['output']>;
  initialSize?: Maybe<Scalars['Float']['output']>;
  maximumSize?: Maybe<Scalars['Float']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
};

export type PaginatedSourcesResponse = {
  __typename?: 'PaginatedSourcesResponse';
  items?: Maybe<Array<Maybe<Source>>>;
  pagination?: Maybe<SourcesPaginationInfo>;
  total: Scalars['Int']['output'];
};

export type Pagination = {
  __typename?: 'Pagination';
  current?: Maybe<Scalars['ID']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  next?: Maybe<Scalars['ID']['output']>;
  page?: Maybe<Page>;
};

export type PaginationInput = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Page>;
};

export type PciCard = {
  __typename?: 'PciCard';
  deviceId?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subSystemManufacturer?: Maybe<Scalars['String']['output']>;
  subSystemName?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PcmciaController = {
  __typename?: 'PcmciaController';
  caption?: Maybe<Scalars['String']['output']>;
  errorCode?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  protocolSupported?: Maybe<Scalars['String']['output']>;
  userConfig?: Maybe<Scalars['Boolean']['output']>;
};

export type PerformanceInformation = {
  __typename?: 'PerformanceInformation';
  gamingGraphicsScore?: Maybe<Scalars['Float']['output']>;
  graphicsScore?: Maybe<Scalars['Float']['output']>;
  memoryScore?: Maybe<Scalars['Float']['output']>;
  primaryHardDiskScore?: Maybe<Scalars['Float']['output']>;
  processorScore?: Maybe<Scalars['Float']['output']>;
};

export type PhysicalVolume = {
  __typename?: 'PhysicalVolume';
  free?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  relatedGroup?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  used?: Maybe<Scalars['Float']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type PnpSignedDriver = {
  __typename?: 'PnpSignedDriver';
  description?: Maybe<Scalars['String']['output']>;
  deviceClass?: Maybe<Scalars['String']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  deviceName?: Maybe<Scalars['String']['output']>;
  driverProviderName?: Maybe<Scalars['String']['output']>;
  driverVersion?: Maybe<Scalars['String']['output']>;
  friendlyName?: Maybe<Scalars['String']['output']>;
  hardwareId?: Maybe<Scalars['String']['output']>;
  pdo?: Maybe<Scalars['String']['output']>;
};

export type PointingDevice = {
  __typename?: 'PointingDevice';
  caption?: Maybe<Scalars['String']['output']>;
  deviceInterface?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  numberOfButtons?: Maybe<Scalars['Float']['output']>;
  pointingType?: Maybe<Scalars['String']['output']>;
};

export type PortConnector = {
  __typename?: 'PortConnector';
  availability?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  configManagerErrorCode?: Maybe<Scalars['String']['output']>;
  configManagerUserConfig?: Maybe<Scalars['Boolean']['output']>;
  connectorType?: Maybe<Scalars['String']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  externalReferenceDesignator?: Maybe<Scalars['String']['output']>;
  internalReferenceDesignator?: Maybe<Scalars['String']['output']>;
  isBinary?: Maybe<Scalars['Boolean']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  maxBaudRate?: Maybe<Scalars['Float']['output']>;
  maxSpeed?: Maybe<Scalars['String']['output']>;
  maximumInputBufferSize?: Maybe<Scalars['Float']['output']>;
  maximumOutputBufferSize?: Maybe<Scalars['Float']['output']>;
  osAutoDiscovered?: Maybe<Scalars['Boolean']['output']>;
  portConnectorType?: Maybe<Scalars['String']['output']>;
  powerManagementSupported?: Maybe<Scalars['Boolean']['output']>;
  protocolSupported?: Maybe<Scalars['String']['output']>;
  providerType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Printer = {
  __typename?: 'Printer';
  capabilityDescriptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  caption?: Maybe<Scalars['String']['output']>;
  enableBidi?: Maybe<Scalars['Boolean']['output']>;
  horizontalResolution?: Maybe<Scalars['Float']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  local?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  network?: Maybe<Scalars['Boolean']['output']>;
  portName?: Maybe<Scalars['String']['output']>;
  shareName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  verticalResolution?: Maybe<Scalars['Float']['output']>;
};

export type PrinterDriver = {
  __typename?: 'PrinterDriver';
  driverPath?: Maybe<Scalars['String']['output']>;
  driverVersion?: Maybe<Scalars['String']['output']>;
  hardwareId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  printProcessor?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type PrinterInfo = {
  __typename?: 'PrinterInfo';
  status?: Maybe<Scalars['String']['output']>;
  totalColorPages?: Maybe<Scalars['Float']['output']>;
  totalMonoPages?: Maybe<Scalars['Float']['output']>;
  totalPages?: Maybe<Scalars['Float']['output']>;
};

export type Process = {
  __typename?: 'Process';
  caption?: Maybe<Scalars['String']['output']>;
  commandLine?: Maybe<Scalars['String']['output']>;
  executablePath?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
  threadCount?: Maybe<Scalars['Float']['output']>;
};

export type Processor = {
  __typename?: 'Processor';
  addressSizes?: Maybe<Scalars['String']['output']>;
  addressWidth?: Maybe<Scalars['Float']['output']>;
  architecture?: Maybe<Scalars['String']['output']>;
  availability?: Maybe<Scalars['String']['output']>;
  bogoMips?: Maybe<Scalars['Float']['output']>;
  byteOrder?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  currentClockSpeed?: Maybe<Scalars['Float']['output']>;
  currentSpeed?: Maybe<Scalars['Float']['output']>;
  dataWidth?: Maybe<Scalars['Float']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  externalClock?: Maybe<Scalars['String']['output']>;
  family?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  l1dCacheSize?: Maybe<Scalars['String']['output']>;
  l1iCacheSize?: Maybe<Scalars['String']['output']>;
  l2CacheSize?: Maybe<Scalars['String']['output']>;
  l2CacheSpeed?: Maybe<Scalars['Float']['output']>;
  l3CacheSize?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  maxClockSpeed?: Maybe<Scalars['Float']['output']>;
  minimumClockSpeed?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  modelType?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numberOfCores?: Maybe<Scalars['Float']['output']>;
  numberOfLogicalProcessors?: Maybe<Scalars['Float']['output']>;
  opModes?: Maybe<Scalars['String']['output']>;
  processorId?: Maybe<Scalars['String']['output']>;
  revision?: Maybe<Scalars['String']['output']>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  socket?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stepping?: Maybe<Scalars['String']['output']>;
  threadsPerCore?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeMethod?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  virtualization?: Maybe<Scalars['String']['output']>;
  voltage?: Maybe<Scalars['Float']['output']>;
  voltageCaps?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _blank?: Maybe<Scalars['Boolean']['output']>;
  assetsAPIVersion?: Maybe<Scalars['String']['output']>;
  authorizedSites?: Maybe<AuthorizedSites>;
  getVersions: Array<Maybe<IVersionResponse>>;
  getWebhookResources?: Maybe<Array<Maybe<WebhookResource>>>;
  installStatusVersion?: Maybe<Scalars['String']['output']>;
  integrationWebhooksAPIVersion?: Maybe<Scalars['String']['output']>;
  integrationsAssetsAPIVersion?: Maybe<Scalars['String']['output']>;
  integrationsExporterAPIVersion?: Maybe<Scalars['String']['output']>;
  integrationsReportsAPIVersion?: Maybe<Scalars['String']['output']>;
  me?: Maybe<Me>;
  orgSite?: Maybe<OrgSite>;
  scanningVersion?: Maybe<Scalars['String']['output']>;
  site?: Maybe<Site>;
};


export type QueryGetWebhookResourcesArgs = {
  version?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrgSiteArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySiteArgs = {
  id: Scalars['ID']['input'];
};

export type QuickFixEngineering = {
  __typename?: 'QuickFixEngineering';
  description?: Maybe<Scalars['String']['output']>;
  hotFixId?: Maybe<Scalars['String']['output']>;
  installedBy?: Maybe<Scalars['String']['output']>;
  installedOn?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
};

export type RecognitionInfo = {
  __typename?: 'RecognitionInfo';
  brand?: Maybe<Scalars['String']['output']>;
  brandMetadata?: Maybe<BrandMetadata>;
  model?: Maybe<Scalars['String']['output']>;
  modelMetadata?: Maybe<ModelMetadata>;
  osMetadata?: Maybe<OsMetadata>;
};

export type ReconcileField = {
  __typename?: 'ReconcileField';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Reconciliation = {
  __typename?: 'Reconciliation';
  confidence?: Maybe<Scalars['Float']['output']>;
  fields?: Maybe<Array<Maybe<ReconcileField>>>;
  lastUpdate?: Maybe<Scalars['DateTime']['output']>;
  rule?: Maybe<Scalars['String']['output']>;
  sourceId?: Maybe<Scalars['String']['output']>;
  sourceName?: Maybe<Scalars['String']['output']>;
  sourceType?: Maybe<Scalars['String']['output']>;
};

export type Registry = {
  __typename?: 'Registry';
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  registryPath?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  valueName?: Maybe<Scalars['String']['output']>;
};

export type Relation = {
  __typename?: 'Relation';
  childAssetKey?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentAssetKey?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
};

export type ReleaseInfoScannedSoftware = {
  __typename?: 'ReleaseInfoScannedSoftware';
  /**
   * Release value
   * @deprecated No longer supported
   */
  release?: Maybe<Scalars['String']['output']>;
  /** scanned software name related to that releaseInfo */
  scannedSoftwareName?: Maybe<Scalars['String']['output']>;
};

export type ReportExecutionStatus = {
  __typename?: 'ReportExecutionStatus';
  currentResultCount?: Maybe<Scalars['Int']['output']>;
  executionFinishedAt?: Maybe<Scalars['DateTime']['output']>;
  isPaused?: Maybe<Scalars['Boolean']['output']>;
  nextExecutionAt?: Maybe<Scalars['DateTime']['output']>;
  progress?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ReportItem = {
  __typename?: 'ReportItem';
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  executionStatus?: Maybe<ReportExecutionStatus>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  schedule?: Maybe<Scalars['String']['output']>;
  subcategory?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ReportsExecutionStatus = {
  __typename?: 'ReportsExecutionStatus';
  currentResultCount?: Maybe<Scalars['Int']['output']>;
  executionFinishedAt?: Maybe<Scalars['String']['output']>;
  isPaused?: Maybe<Scalars['Boolean']['output']>;
  nextExecutionAt?: Maybe<Scalars['String']['output']>;
  progress?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
};

export type ReportsFullExportResponse = {
  __typename?: 'ReportsFullExportResponse';
  attemptsLeft?: Maybe<Scalars['Int']['output']>;
  exportId?: Maybe<Scalars['ID']['output']>;
};

export type ReportsFullExportStatusResponse = {
  __typename?: 'ReportsFullExportStatusResponse';
  completedAt?: Maybe<Scalars['String']['output']>;
  requestedAt?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ReportsResponse = {
  __typename?: 'ReportsResponse';
  items?: Maybe<Array<Maybe<ReportItem>>>;
  pagination?: Maybe<AssetsPagination>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ReportsResultsResponse = {
  __typename?: 'ReportsResultsResponse';
  url?: Maybe<Scalars['String']['output']>;
};

export type ResourceGroup = {
  __typename?: 'ResourceGroup';
  assetKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  networkSecurityGroups?: Maybe<Array<Maybe<AzureNetworkSecurityGroup>>>;
  region?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  subscriptionId?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
};

export type RotateOrgSiteCredentials = {
  __typename?: 'RotateOrgSiteCredentials';
  clientId?: Maybe<Scalars['String']['output']>;
  clientSecret?: Maybe<Scalars['String']['output']>;
};

export type RotateOrganizationCredentials = {
  __typename?: 'RotateOrganizationCredentials';
  clientId?: Maybe<Scalars['String']['output']>;
  clientSecret?: Maybe<Scalars['String']['output']>;
};

export type ScanningAction = {
  __typename?: 'ScanningAction';
  components?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ScanningGroup = {
  __typename?: 'ScanningGroup';
  id: Scalars['ID']['output'];
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  maintenanceWindow?: Maybe<Scalars['String']['output']>;
  networkVisibility?: Maybe<NetworkVisibilityConfig>;
};

export type ScanningGroupInput = {
  maintenanceWindow?: InputMaybe<MaintenanceWindowInput>;
  networkVisibility?: InputMaybe<NetworkVisibilityInput>;
};

export type ScanningTask = {
  __typename?: 'ScanningTask';
  actions?: Maybe<Array<Maybe<ScanningAction>>>;
  discoveryCredentialIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  id: Scalars['ID']['output'];
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  networkActionDefinition?: Maybe<NetworkActionDefinition>;
  triggers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ScanningTaskActionInput = {
  components: Array<InputMaybe<Scalars['String']['input']>>;
};

export type ScanningTaskInput = {
  actions: Array<InputMaybe<ScanningTaskActionInput>>;
  discoveryCredentialIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  networkActionDefinition?: InputMaybe<NetworkActionDefinitionInput>;
  triggers: Array<InputMaybe<Scalars['String']['input']>>;
};

export type ScsiController = {
  __typename?: 'ScsiController';
  availability?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  protocolSupported?: Maybe<Scalars['String']['output']>;
};

export type SearchInput = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<SearchType>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export enum SearchType {
  Equal = 'EQUAL',
  Like = 'LIKE',
  /** @deprecated Use EQUAL instead. */
  Eq = 'eq',
  /** @deprecated No longer supported */
  Gt = 'gt',
  /** @deprecated No longer supported */
  Gte = 'gte',
  /** @deprecated No longer supported */
  Lt = 'lt',
  /** @deprecated No longer supported */
  Lte = 'lte',
  /** @deprecated Use LIKE instead. */
  MatchWords = 'matchWords',
  /** @deprecated Use LIKE instead. */
  PrefixWords = 'prefixWords',
  /** @deprecated Use LIKE instead. */
  SearchPhrase = 'searchPhrase',
  /** @deprecated Use LIKE instead. */
  SearchPrefix = 'searchPrefix',
  /** @deprecated Use LIKE instead. */
  SearchWords = 'searchWords',
  /** @deprecated Use LIKE instead. */
  TermWords = 'termWords'
}

export type SecurityGroup = {
  __typename?: 'SecurityGroup';
  description?: Maybe<Scalars['String']['output']>;
  groupId?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<Maybe<AwsSecurityGroupPermission>>>;
};

export type SerialNumber = {
  __typename?: 'SerialNumber';
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  productIdentity?: Maybe<Scalars['String']['output']>;
  productKey?: Maybe<Scalars['String']['output']>;
};

export type Service = {
  __typename?: 'Service';
  caption?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  pathName?: Maybe<Scalars['String']['output']>;
  startMode?: Maybe<Scalars['String']['output']>;
  startName?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type Share = {
  __typename?: 'Share';
  caption?: Maybe<Scalars['String']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  sharePermissions?: Maybe<Array<Maybe<SharePermission>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SharePermission = {
  __typename?: 'SharePermission';
  denyAccess?: Maybe<Scalars['Boolean']['output']>;
  fullAccess?: Maybe<Scalars['Boolean']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  readAccess?: Maybe<Scalars['Boolean']['output']>;
  trustee?: Maybe<Scalars['String']['output']>;
  writeAccess?: Maybe<Scalars['Boolean']['output']>;
};

export type Site = {
  __typename?: 'Site';
  accounts?: Maybe<Array<Maybe<AuthorizedSiteAccounts>>>;
  allInstallations?: Maybe<Array<Maybe<IntegrationsInstallation>>>;
  assetDetails?: Maybe<AssetDetailsResponse>;
  assetGroups?: Maybe<Array<Maybe<AssetGroupsType>>>;
  assetResources?: Maybe<ItemsResponse>;
  assetTypes: Array<Maybe<Scalars['String']['output']>>;
  assetsWithSoftware?: Maybe<AssetWithSoftwareResponse>;
  assetsWithoutSoftware?: Maybe<AssetWithSoftwareResponse>;
  authorizedReports?: Maybe<Array<Maybe<AuthorizedReport>>>;
  brandingName?: Maybe<Scalars['String']['output']>;
  /** @deprecated use brandingName */
  companyName?: Maybe<Scalars['String']['output']>;
  countSoftwareAggList?: Maybe<Scalars['Int']['output']>;
  customFields?: Maybe<Array<Maybe<CustomField>>>;
  exportStatus?: Maybe<ExportStatusResponse>;
  id: Scalars['ID']['output'];
  isDashboardIntegrationEnabled?: Maybe<Scalars['Boolean']['output']>;
  kbPatches?: Maybe<Array<Maybe<KbPatches>>>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  relations?: Maybe<Array<Maybe<AssetRelationType>>>;
  reportExecutionResults?: Maybe<ReportsResultsResponse>;
  reportExecutionStatus?: Maybe<ReportsExecutionStatus>;
  reportFullExport?: Maybe<ReportsFullExportResponse>;
  reportFullExportStatus?: Maybe<ReportsFullExportStatusResponse>;
  softwareDetailsBySoftwareName?: Maybe<SoftwareDetails>;
  softwareListWithCursor?: Maybe<GroupedAggSoftwareCursoredResponse>;
  softwares?: Maybe<SoftwaresResponse>;
  vulnerabilities?: Maybe<SiteVulnerabilitiesResponse>;
};


export type SiteAssetDetailsArgs = {
  key: Scalars['ID']['input'];
};


export type SiteAssetResourcesArgs = {
  assetPagination?: InputMaybe<AssetsPaginationInputValidated>;
  fields: Array<Scalars['String']['input']>;
  filters?: InputMaybe<AssetsFilterGroupedInput>;
  pagination?: InputMaybe<AssetsPaginationInput>;
};


export type SiteAssetsWithSoftwareArgs = {
  fields: Array<Scalars['String']['input']>;
  filters?: InputMaybe<AssetsFilterGroupedInput>;
  pagination?: InputMaybe<AssetsPaginationInputValidated>;
  publisher: Scalars['String']['input'];
  software: Scalars['String']['input'];
};


export type SiteAssetsWithoutSoftwareArgs = {
  fields: Array<Scalars['String']['input']>;
  filters?: InputMaybe<AssetsFilterGroupedInput>;
  pagination?: InputMaybe<AssetsPaginationInputValidated>;
  publisher: Scalars['String']['input'];
  software: Scalars['String']['input'];
};


export type SiteCountSoftwareAggListArgs = {
  filter?: InputMaybe<Array<InputMaybe<SearchInput>>>;
};


export type SiteExportStatusArgs = {
  exportId: Scalars['ID']['input'];
};


export type SiteIsDashboardIntegrationEnabledArgs = {
  integrationId: Scalars['String']['input'];
};


export type SiteKbPatchesArgs = {
  cve: Scalars['String']['input'];
};


export type SiteReportExecutionResultsArgs = {
  reportId: Scalars['ID']['input'];
};


export type SiteReportExecutionStatusArgs = {
  reportId: Scalars['ID']['input'];
};


export type SiteReportFullExportArgs = {
  reportId: Scalars['ID']['input'];
};


export type SiteReportFullExportStatusArgs = {
  exportId: Scalars['ID']['input'];
  reportId: Scalars['ID']['input'];
};


export type SiteSoftwareDetailsBySoftwareNameArgs = {
  publisher: Scalars['String']['input'];
  software: Scalars['String']['input'];
};


export type SiteSoftwareListWithCursorArgs = {
  filter?: InputMaybe<Array<InputMaybe<SearchInput>>>;
  softwarePagination?: InputMaybe<SoftwareAggregatedPaginatedCursorInput>;
};


export type SiteSoftwaresArgs = {
  fields: Array<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<OrderDirection>;
};


export type SiteVulnerabilitiesArgs = {
  filters?: InputMaybe<AssetsFilterGroupedInput>;
  pagination?: InputMaybe<AssetsPaginationInputValidated>;
};

export type SiteMutation = {
  __typename?: 'SiteMutation';
  createCustomField?: Maybe<CustomField>;
  deleteAssets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  deleteCustomField?: Maybe<Scalars['ID']['output']>;
  deleteNetworkDiscoveryAssets?: Maybe<Scalars['Int']['output']>;
  editAsset?: Maybe<EditAssetResponse>;
  exportFilteredAssets?: Maybe<ExportFilteredResponse>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  source?: Maybe<SiteSourceMutation>;
};


export type SiteMutationCreateCustomFieldArgs = {
  field: CustomFieldInput;
};


export type SiteMutationDeleteAssetsArgs = {
  keys: Array<Scalars['String']['input']>;
};


export type SiteMutationDeleteCustomFieldArgs = {
  key: Scalars['ID']['input'];
};


export type SiteMutationEditAssetArgs = {
  fields?: InputMaybe<EditAssetInput>;
  key: Scalars['ID']['input'];
};


export type SiteMutationExportFilteredAssetsArgs = {
  filters?: InputMaybe<ExportFilterGroupedInput>;
};


export type SiteMutationSourceArgs = {
  id: Scalars['ID']['input'];
};

export type SiteSourceMutation = {
  __typename?: 'SiteSourceMutation';
  id: Scalars['ID']['output'];
  scanNow: Scalars['ID']['output'];
  siteId?: Maybe<Scalars['ID']['output']>;
};

export type SiteUserProfile = {
  __typename?: 'SiteUserProfile';
  id: Scalars['ID']['output'];
  site?: Maybe<Site>;
};

export type SiteVulnerabilitiesResponse = {
  __typename?: 'SiteVulnerabilitiesResponse';
  items?: Maybe<Array<Maybe<SiteVulnerability>>>;
  pagination?: Maybe<AssetsPagination>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type SiteVulnerability = {
  __typename?: 'SiteVulnerability';
  assetKeys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  attackComplexity?: Maybe<Scalars['String']['output']>;
  attackVector?: Maybe<Scalars['String']['output']>;
  availabilityImpact?: Maybe<Scalars['String']['output']>;
  baseScore?: Maybe<Scalars['Float']['output']>;
  cause?: Maybe<VulnerabilityCause>;
  confidentiality?: Maybe<Scalars['String']['output']>;
  cve?: Maybe<Scalars['String']['output']>;
  exploitability?: Maybe<VulnerabilityExploitability>;
  integrity?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  patchable?: Maybe<Scalars['Boolean']['output']>;
  privilegeRequired?: Maybe<Scalars['String']['output']>;
  publishedOn?: Maybe<Scalars['Date']['output']>;
  references?: Maybe<Array<Maybe<VulnerabilityReference>>>;
  riskScore?: Maybe<Scalars['Float']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  severity?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  updatedOn?: Maybe<Scalars['Date']['output']>;
  userInteraction?: Maybe<Scalars['String']['output']>;
  weaknessEnumeration?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type SiteWebhook = {
  __typename?: 'SiteWebhook';
  URL?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedById?: Maybe<Scalars['String']['output']>;
};

export type SnmpInfo = {
  __typename?: 'SnmpInfo';
  defaultGateway?: Maybe<Scalars['String']['output']>;
  interfaceAdminStatus?: Maybe<Scalars['Float']['output']>;
  interfaceAlias?: Maybe<Scalars['String']['output']>;
  interfaceDescription?: Maybe<Scalars['String']['output']>;
  interfaceIndex?: Maybe<Scalars['Float']['output']>;
  interfaceIpAddress?: Maybe<Scalars['String']['output']>;
  interfaceMacAddress?: Maybe<Scalars['String']['output']>;
  interfaceMask?: Maybe<Scalars['String']['output']>;
  interfaceMtu?: Maybe<Scalars['Float']['output']>;
  interfaceName?: Maybe<Scalars['String']['output']>;
  interfaceOperStatus?: Maybe<Scalars['Float']['output']>;
  interfaceSpeed?: Maybe<Scalars['Float']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  portName?: Maybe<Scalars['String']['output']>;
  upLink?: Maybe<Scalars['Boolean']['output']>;
  vLan?: Maybe<Scalars['String']['output']>;
};

export enum SnmpV3AuthType {
  Md5 = 'MD5',
  None = 'None',
  Sha1 = 'SHA1',
  Sha256 = 'SHA256',
  Sha384 = 'SHA384',
  Sha512 = 'SHA512'
}

export enum SnmpV3Protocol {
  Aes128 = 'AES128',
  Aes192 = 'AES192',
  Aes256 = 'AES256',
  Des = 'DES',
  None = 'None',
  TripleDes = 'TripleDES'
}

export type Software = {
  __typename?: 'Software';
  architecture?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  cpe?: Maybe<Scalars['String']['output']>;
  currentUser?: Maybe<Scalars['Boolean']['output']>;
  edition?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  installDate?: Maybe<Scalars['DateTime']['output']>;
  installType?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  marketVersion?: Maybe<Scalars['String']['output']>;
  msi?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  operatingSystem?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  /** @deprecated No longer supported */
  release?: Maybe<Scalars['String']['output']>;
  shortVersion?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unspsc?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type SoftwareAggregatedCursorInput = {
  fieldName?: InputMaybe<Scalars['String']['input']>;
  fieldValue?: InputMaybe<Scalars['String']['input']>;
};

export type SoftwareAggregatedCursorOrderInput = {
  direction?: InputMaybe<OrderDirection>;
  field?: InputMaybe<Scalars['String']['input']>;
};

export type SoftwareAggregatedPaginatedCursorInput = {
  aggregationBucketSize?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Array<InputMaybe<SoftwareAggregatedCursorInput>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SoftwareAggregatedCursorOrderInput>;
  page?: InputMaybe<ECursorPage>;
};

export type SoftwareDetails = {
  __typename?: 'SoftwareDetails';
  architectures?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  category?: Maybe<Scalars['String']['output']>;
  /** Min of the field earliestInstallDate from each operatingSystemsDetails */
  earliestInstallDate?: Maybe<Scalars['Date']['output']>;
  editions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Standardized Publisher Name Icon
   * @deprecated No longer supported
   */
  iconPublisher?: Maybe<Scalars['String']['output']>;
  /**
   * Standardized Sofware Name Icon
   * @deprecated No longer supported
   */
  iconSoftware?: Maybe<Scalars['String']['output']>;
  installType?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Details of the operating systems where were found installations for this software */
  operatingSystemsDetails?: Maybe<Array<Maybe<OperatingSystemDetails>>>;
  /** Standardized/Scanned Publisher Name */
  publisher?: Maybe<Scalars['String']['output']>;
  /** Gather of the field relatedSoftwareNames from each */
  relatedSoftwareNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Gather of the field releaseInfo from each operatingSystemsDetails
   * @deprecated No longer supported
   */
  releaseInfo?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Standardized/Scanned Sofware Name */
  software: Scalars['String']['output'];
  /** Sum of the field totalInstallations from each operatingSystemsDetails */
  totalInstallations?: Maybe<Scalars['Int']['output']>;
  /** Sum of the field versionsDetails.length from each operatingSystemsDetails */
  totalVersions?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unspsc?: Maybe<Scalars['String']['output']>;
};

export enum SoftwareFilterConjunction {
  And = 'AND',
  Or = 'OR'
}

export type SoftwareFilterGroupedInput = {
  conditions?: InputMaybe<Array<SoftwareFiltersCondition>>;
  conjunction?: InputMaybe<SoftwareFilterConjunction>;
  groups?: InputMaybe<Array<SoftwareFilterInput>>;
};

export type SoftwareFilterInput = {
  conditions: Array<SoftwareFiltersCondition>;
  conjunction?: InputMaybe<SoftwareFilterConjunction>;
};

export enum SoftwareFilterType {
  Equal = 'EQUAL',
  Exists = 'EXISTS',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  Like = 'LIKE',
  NotEqual = 'NOT_EQUAL',
  SmallerThan = 'SMALLER_THAN',
  SmallerThanOrEqual = 'SMALLER_THAN_OR_EQUAL'
}

export type SoftwareFiltersCondition = {
  operator: SoftwareFilterType;
  path: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type SoftwaresResponse = {
  __typename?: 'SoftwaresResponse';
  items?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type SoundDevice = {
  __typename?: 'SoundDevice';
  caption?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
};

export type Source = {
  __typename?: 'Source';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  discoveryComponents?: Maybe<Array<Maybe<DiscoveryComponent>>>;
  externalId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  siteId?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<InstallationState>;
};

export type SourceMutation = {
  __typename?: 'SourceMutation';
  id: Scalars['ID']['output'];
  scanNow: Scalars['ID']['output'];
  siteId?: Maybe<Scalars['ID']['output']>;
  updateDiscoveryComponent?: Maybe<DiscoveryComponent>;
};


export type SourceMutationUpdateDiscoveryComponentArgs = {
  discoveryComponentId: Scalars['ID']['input'];
  scanningGroupId: Scalars['ID']['input'];
};

export enum SourcesFilterConjunction {
  And = 'AND',
  Or = 'OR'
}

export type SourcesFilterGroupedInput = {
  conditions?: InputMaybe<Array<SourcesFiltersCondition>>;
  conjunction?: InputMaybe<SourcesFilterConjunction>;
  groups?: InputMaybe<Array<SourcesFilterInput>>;
};

export type SourcesFilterInput = {
  conditions: Array<SourcesFiltersCondition>;
  conjunction?: InputMaybe<SourcesFilterConjunction>;
};

export enum SourcesFilterType {
  Equal = 'EQUAL',
  Exists = 'EXISTS',
  NotEqual = 'NOT_EQUAL'
}

export type SourcesFiltersCondition = {
  operator: SourcesFilterType;
  path: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export enum SourcesPage {
  First = 'FIRST',
  Last = 'LAST',
  Next = 'NEXT',
  Prev = 'PREV'
}

export type SourcesPaginationInfo = {
  __typename?: 'SourcesPaginationInfo';
  current?: Maybe<Scalars['ID']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  next?: Maybe<Scalars['ID']['output']>;
  page?: Maybe<SourcesPage>;
};

export type SourcesPaginationInput = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<SourcesPage>;
};

export type SqlDatabase = {
  __typename?: 'SqlDatabase';
  dataFilesSizeKb?: Maybe<Scalars['Float']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  logFilesSizeKb?: Maybe<Scalars['Float']['output']>;
  logFilesUsedSizeKb?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SqlServer = {
  __typename?: 'SqlServer';
  authentication?: Maybe<Scalars['String']['output']>;
  cluster?: Maybe<SqlServerCluster>;
  dataPath?: Maybe<Scalars['String']['output']>;
  databases?: Maybe<Array<Maybe<SqlDatabase>>>;
  displayVersion?: Maybe<Scalars['String']['output']>;
  fileVersion?: Maybe<Scalars['String']['output']>;
  installPath?: Maybe<Scalars['String']['output']>;
  instanceId?: Maybe<Scalars['String']['output']>;
  instanceName?: Maybe<Scalars['String']['output']>;
  isClustered?: Maybe<Scalars['Boolean']['output']>;
  isWow64?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
  services?: Maybe<Array<Maybe<SqlServerService>>>;
  skuName?: Maybe<Scalars['String']['output']>;
  spLevel?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type SqlServerCluster = {
  __typename?: 'SqlServerCluster';
  name?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type SqlServerService = {
  __typename?: 'SqlServerService';
  name?: Maybe<Scalars['String']['output']>;
  startupType?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type Subnet = {
  __typename?: 'Subnet';
  addressPrefix?: Maybe<Scalars['String']['output']>;
  availabilityZone?: Maybe<Scalars['String']['output']>;
  availableIpAddressCount?: Maybe<Scalars['Float']['output']>;
  cidrBlock?: Maybe<Scalars['String']['output']>;
  configuration?: Maybe<Array<Maybe<AzureSubnetIpConfiguration>>>;
  defaultForaz?: Maybe<Scalars['Boolean']['output']>;
  ipv6CidrBlocks?: Maybe<Array<Maybe<AwsSubnetIpv6CidrBlock>>>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  mapPublicIpOnLaunch?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  subnetId?: Maybe<Scalars['String']['output']>;
};

export type SystemDriver = {
  __typename?: 'SystemDriver';
  caption?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pathName?: Maybe<Scalars['String']['output']>;
  serviceType?: Maybe<Scalars['String']['output']>;
  startMode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type SystemEnclosure = {
  __typename?: 'SystemEnclosure';
  chassisName?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  lockPresent?: Maybe<Scalars['Boolean']['output']>;
  machineModel?: Maybe<Scalars['String']['output']>;
  machineName?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  platformUUID?: Maybe<Scalars['String']['output']>;
  securityStatus?: Maybe<Scalars['String']['output']>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  smbiosAssetTag?: Maybe<Scalars['String']['output']>;
  smcVersionSystem?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type SystemProduct = {
  __typename?: 'SystemProduct';
  uuid?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type Tag = {
  __typename?: 'Tag';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type TapeDrive = {
  __typename?: 'TapeDrive';
  availability?: Maybe<Scalars['String']['output']>;
  capability?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  caption?: Maybe<Scalars['String']['output']>;
  compression?: Maybe<Scalars['Float']['output']>;
  defaultBlockSize?: Maybe<Scalars['Float']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  maxBlockSize?: Maybe<Scalars['Float']['output']>;
  maxMediaSize?: Maybe<Scalars['Float']['output']>;
  maxPartitionCount?: Maybe<Scalars['Float']['output']>;
  mediaType?: Maybe<Scalars['String']['output']>;
  minBlockSize?: Maybe<Scalars['Float']['output']>;
  needsCleaning?: Maybe<Scalars['Boolean']['output']>;
  numberOfMediaSupported?: Maybe<Scalars['Float']['output']>;
  padding?: Maybe<Scalars['Float']['output']>;
};

export type TonerInformation = {
  __typename?: 'TonerInformation';
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  tonerColorName?: Maybe<Scalars['String']['output']>;
  tonerColorNr?: Maybe<Scalars['Float']['output']>;
  tonerMaximum?: Maybe<Scalars['Float']['output']>;
  tonerName?: Maybe<Scalars['String']['output']>;
  tonerNr?: Maybe<Scalars['Float']['output']>;
  tonerRemaining?: Maybe<Scalars['Float']['output']>;
};

export type Tpm = {
  __typename?: 'Tpm';
  family?: Maybe<Scalars['String']['output']>;
  firmwareVersion?: Maybe<Scalars['String']['output']>;
  isActivatedInitialValue?: Maybe<Scalars['Boolean']['output']>;
  isEnabledInitialValue?: Maybe<Scalars['Boolean']['output']>;
  isOwnedInitialValue?: Maybe<Scalars['Boolean']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  manufacturerCode?: Maybe<Scalars['String']['output']>;
  manufacturerVersion?: Maybe<Scalars['String']['output']>;
  manufacturerVersionInfo?: Maybe<Scalars['String']['output']>;
  modelNumber?: Maybe<Scalars['String']['output']>;
  physicalPresenceVersionInfo?: Maybe<Scalars['String']['output']>;
  specLevel?: Maybe<Scalars['String']['output']>;
  specVersion?: Maybe<Scalars['String']['output']>;
  vendorSpecific?: Maybe<Scalars['String']['output']>;
};

export type Ups = {
  __typename?: 'Ups';
  agentSoftwareVersion?: Maybe<Scalars['String']['output']>;
  alarmsPresent?: Maybe<Scalars['Float']['output']>;
  attachedDevices?: Maybe<Scalars['String']['output']>;
  batteryCurrent?: Maybe<Scalars['Float']['output']>;
  batteryStatus?: Maybe<Scalars['String']['output']>;
  batteryTemperature?: Maybe<Scalars['Float']['output']>;
  batteryVoltage?: Maybe<Scalars['Float']['output']>;
  estimatedChargeRemaining?: Maybe<Scalars['Float']['output']>;
  estimatedMinutesRemaining?: Maybe<Scalars['Float']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  secondsOnBattery?: Maybe<Scalars['Float']['output']>;
  upsSoftwareVersion?: Maybe<Scalars['String']['output']>;
};

export type UsbController = {
  __typename?: 'UsbController';
  caption?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  supportedProtocol?: Maybe<Scalars['String']['output']>;
};

export type UsbDevice = {
  __typename?: 'UsbDevice';
  caption?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pnpClass?: Maybe<Scalars['String']['output']>;
  pnpDeviceId?: Maybe<Scalars['String']['output']>;
  present?: Maybe<Scalars['Boolean']['output']>;
  service?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  accountType?: Maybe<Scalars['String']['output']>;
  buildInAdmin?: Maybe<Scalars['Boolean']['output']>;
  disabled?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  lockout?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  passwordChangeable?: Maybe<Scalars['Boolean']['output']>;
  passwordExpires?: Maybe<Scalars['Boolean']['output']>;
  passwordRequired?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type UserInGroup = {
  __typename?: 'UserInGroup';
  adminGroup?: Maybe<Scalars['Boolean']['output']>;
  domainName?: Maybe<Scalars['String']['output']>;
  groupName?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type VCenter = {
  __typename?: 'VCenter';
  dataCenter?: Maybe<DataCenter>;
  vCenterKey?: Maybe<Scalars['String']['output']>;
};

export type ValueDateInput = {
  value?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ValueStringInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

export type VersionDetails = {
  __typename?: 'VersionDetails';
  architectures?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  earliestInstallDate?: Maybe<Scalars['Date']['output']>;
  editions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  languages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  marketVersion?: Maybe<Scalars['String']['output']>;
  /** @deprecated No longer supported */
  releaseInfo?: Maybe<Array<Maybe<ReleaseInfoScannedSoftware>>>;
  shortVersion?: Maybe<Scalars['String']['output']>;
  totalInstallations?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type VirtualMachine = {
  __typename?: 'VirtualMachine';
  adminDisabled?: Maybe<Scalars['Boolean']['output']>;
  ami?: Maybe<AwsAmi>;
  architecture?: Maybe<Scalars['String']['output']>;
  assetKey?: Maybe<Scalars['String']['output']>;
  availabilityZone?: Maybe<Scalars['String']['output']>;
  biosDate?: Maybe<Scalars['DateTime']['output']>;
  biosVersion?: Maybe<Scalars['String']['output']>;
  bootDiagnosticsStorageUri?: Maybe<Scalars['String']['output']>;
  bootTime?: Maybe<Scalars['DateTime']['output']>;
  connectionState?: Maybe<Scalars['String']['output']>;
  coreCount?: Maybe<Scalars['Float']['output']>;
  cpuCredits?: Maybe<Scalars['String']['output']>;
  cpuMhz?: Maybe<Scalars['Float']['output']>;
  cpuModel?: Maybe<Scalars['String']['output']>;
  cpuPackagesDescriptions?: Maybe<Scalars['String']['output']>;
  dataCenterKey?: Maybe<Scalars['String']['output']>;
  defaultGateway?: Maybe<Scalars['String']['output']>;
  dhcp?: Maybe<Scalars['Boolean']['output']>;
  diskImageOffer?: Maybe<Scalars['String']['output']>;
  diskImagePublisher?: Maybe<Scalars['String']['output']>;
  diskImageSku?: Maybe<Scalars['String']['output']>;
  diskImageVersion?: Maybe<Scalars['String']['output']>;
  dnsAddresses?: Maybe<Scalars['String']['output']>;
  domainName?: Maybe<Scalars['String']['output']>;
  elasticGpu?: Maybe<AwsElasticGpu>;
  enaSupport?: Maybe<Scalars['Boolean']['output']>;
  environment?: Maybe<Scalars['String']['output']>;
  esxiKey?: Maybe<Scalars['String']['output']>;
  groupName?: Maybe<Scalars['String']['output']>;
  guestFullName?: Maybe<Scalars['String']['output']>;
  guestSnapshots?: Maybe<Array<Maybe<VmwareGuestSnapshot>>>;
  host?: Maybe<AwsHost>;
  hostMaxVirtualDiskCapacity?: Maybe<Scalars['String']['output']>;
  hostName?: Maybe<Scalars['String']['output']>;
  hyperVisor?: Maybe<Scalars['String']['output']>;
  imageId?: Maybe<Scalars['String']['output']>;
  instanceId?: Maybe<Scalars['String']['output']>;
  instanceProfileArn?: Maybe<Scalars['String']['output']>;
  instanceType?: Maybe<Scalars['String']['output']>;
  internalKey?: Maybe<Scalars['String']['output']>;
  ipAddress?: Maybe<Scalars['String']['output']>;
  ipv4Address?: Maybe<Scalars['String']['output']>;
  isBootDiagnosticsEnabled?: Maybe<Scalars['Boolean']['output']>;
  isManagedDiskEnabled?: Maybe<Scalars['Boolean']['output']>;
  isManagedServiceIdentityEnabled?: Maybe<Scalars['Boolean']['output']>;
  isRunning?: Maybe<Scalars['String']['output']>;
  kernel?: Maybe<Scalars['String']['output']>;
  keyPairName?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  launchTime?: Maybe<Scalars['DateTime']['output']>;
  licenseType?: Maybe<Scalars['String']['output']>;
  lifeCycle?: Maybe<Scalars['String']['output']>;
  managedServiceIdentityType?: Maybe<Scalars['String']['output']>;
  managementServerIp?: Maybe<Scalars['String']['output']>;
  maxDataDiskCount?: Maybe<Scalars['Float']['output']>;
  memorySize?: Maybe<Scalars['Float']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numCpuCores?: Maybe<Scalars['Float']['output']>;
  numCpuPkgs?: Maybe<Scalars['Float']['output']>;
  numCpuThreads?: Maybe<Scalars['Float']['output']>;
  numEthernetCards?: Maybe<Scalars['Float']['output']>;
  numHbas?: Maybe<Scalars['Float']['output']>;
  numNics?: Maybe<Scalars['Float']['output']>;
  numberOfCores?: Maybe<Scalars['Float']['output']>;
  numberOfDisks?: Maybe<Scalars['Float']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  port?: Maybe<Scalars['Float']['output']>;
  powerState?: Maybe<Scalars['String']['output']>;
  privateDNSName?: Maybe<Scalars['String']['output']>;
  privateIPAddress?: Maybe<Scalars['String']['output']>;
  productCode?: Maybe<Array<Maybe<AwsProductCode>>>;
  publicDnsName?: Maybe<Scalars['String']['output']>;
  publicIpAddress?: Maybe<Scalars['String']['output']>;
  ramdiskId?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  resourceDiskSizeInMb?: Maybe<Scalars['Float']['output']>;
  resourceGroupKey?: Maybe<Scalars['String']['output']>;
  rootDeviceName?: Maybe<Scalars['String']['output']>;
  rootDeviceType?: Maybe<Scalars['String']['output']>;
  securityGroupKeys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  serial?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  sourceDestCheck?: Maybe<Scalars['Boolean']['output']>;
  sriovNetSupport?: Maybe<Scalars['String']['output']>;
  sslThumbprint?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  stateReason?: Maybe<Scalars['String']['output']>;
  stateTransitionReason?: Maybe<Scalars['String']['output']>;
  subnetKey?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  threadsPercore?: Maybe<Scalars['Float']['output']>;
  toolsRunningStatus?: Maybe<Scalars['String']['output']>;
  toolsVersion?: Maybe<Scalars['String']['output']>;
  toolsVersionStatus?: Maybe<Scalars['String']['output']>;
  upTime?: Maybe<Scalars['String']['output']>;
  vendor?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  virtualMachineExtensions?: Maybe<Array<Maybe<AzureVirtualMachineExtension>>>;
  virtualNetworkKey?: Maybe<Scalars['String']['output']>;
  virtualizationType?: Maybe<Scalars['String']['output']>;
  vmwareServerId?: Maybe<Scalars['String']['output']>;
};

export type VirtualNetwork = {
  __typename?: 'VirtualNetwork';
  awsContainerId?: Maybe<Scalars['String']['output']>;
  instanceTenancy?: Maybe<Scalars['String']['output']>;
  internalKey?: Maybe<Scalars['String']['output']>;
  ipAddressV4?: Maybe<Scalars['String']['output']>;
  ipAddressV6?: Maybe<Scalars['String']['output']>;
  isDdosProtectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  isVmProtectionEnabled?: Maybe<Scalars['Boolean']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  macAddress?: Maybe<Scalars['String']['output']>;
  mtu?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
  speed?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  subnetMask?: Maybe<Scalars['String']['output']>;
  subnets?: Maybe<Array<Maybe<Subnet>>>;
  tag?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  virtualNetworkKey?: Maybe<Scalars['String']['output']>;
  vpcId?: Maybe<Scalars['String']['output']>;
};

export type VmwareDatastoreClusterConfiguration = {
  __typename?: 'VmwareDatastoreClusterConfiguration';
  enabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type VmwareDatastoreClusterOverride = {
  __typename?: 'VmwareDatastoreClusterOverride';
  behaviour?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  intraVmAffinity?: Maybe<Scalars['Boolean']['output']>;
  intraVmAntiAffinity?: Maybe<Scalars['String']['output']>;
};

export type VmwareGuestSnapshot = {
  __typename?: 'VmwareGuestSnapshot';
  createTime?: Maybe<Scalars['DateTime']['output']>;
  internalKey?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type VmwareProductInfo = {
  __typename?: 'VmwareProductInfo';
  apiType?: Maybe<Scalars['String']['output']>;
  apiVersion?: Maybe<Scalars['String']['output']>;
  build?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  instanceUuid?: Maybe<Scalars['String']['output']>;
  licenseProductName?: Maybe<Scalars['String']['output']>;
  licenseProductVersion?: Maybe<Scalars['String']['output']>;
  localeVersion?: Maybe<Scalars['String']['output']>;
  localebuild?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  operatingSystemType?: Maybe<Scalars['String']['output']>;
  productLineId?: Maybe<Scalars['String']['output']>;
  vendor?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type Volume = {
  __typename?: 'Volume';
  attachTime?: Maybe<Scalars['DateTime']['output']>;
  attachmentState?: Maybe<Scalars['String']['output']>;
  automount?: Maybe<Scalars['Boolean']['output']>;
  blockSize?: Maybe<Scalars['Float']['output']>;
  compressed?: Maybe<Scalars['Boolean']['output']>;
  creationDate?: Maybe<Scalars['DateTime']['output']>;
  deleteOnTermination?: Maybe<Scalars['Boolean']['output']>;
  device?: Maybe<Scalars['String']['output']>;
  driveLetter?: Maybe<Scalars['String']['output']>;
  driveType?: Maybe<Scalars['String']['output']>;
  encrypted?: Maybe<Scalars['Boolean']['output']>;
  errorMethodology?: Maybe<Scalars['Boolean']['output']>;
  fileSystem?: Maybe<Scalars['String']['output']>;
  freeSpace?: Maybe<Scalars['Float']['output']>;
  indexingEnabled?: Maybe<Scalars['Boolean']['output']>;
  iops?: Maybe<Scalars['Float']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  mountPoint?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pageFilePresent?: Maybe<Scalars['Boolean']['output']>;
  protectionStatus?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  snapshotId?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  supportsDiskQuotas?: Maybe<Scalars['Boolean']['output']>;
  supportsFileBasedCompression?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  volumeId?: Maybe<Scalars['String']['output']>;
  volumeType?: Maybe<Scalars['String']['output']>;
};

export type VolumeGroup = {
  __typename?: 'VolumeGroup';
  format?: Maybe<Scalars['String']['output']>;
  free?: Maybe<Scalars['Float']['output']>;
  logicalVolumes?: Maybe<Array<Maybe<LogicalVolume>>>;
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Scalars['String']['output']>;
  physicalVolumes?: Maybe<Array<Maybe<PhysicalVolume>>>;
  size?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
  volumeMembers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Vulnerability = {
  __typename?: 'Vulnerability';
  cve?: Maybe<Scalars['String']['output']>;
};

export type VulnerabilityCause = {
  __typename?: 'VulnerabilityCause';
  affectedProduct: Array<Scalars['String']['output']>;
  category: Array<Scalars['String']['output']>;
  vendor: Array<Scalars['String']['output']>;
};

export type VulnerabilityExploitability = {
  __typename?: 'VulnerabilityExploitability';
  CISA?: Maybe<VulnerabilityExploitabilityCisa>;
  MSRC?: Maybe<VulnerabilityExploitabilityMsrc>;
  NVD?: Maybe<VulnerabilityExploitabilityNvd>;
  exploitable?: Maybe<Scalars['String']['output']>;
  exploitedInTheWild?: Maybe<Scalars['String']['output']>;
};

export type VulnerabilityExploitabilityCisa = {
  __typename?: 'VulnerabilityExploitabilityCISA';
  dueDate?: Maybe<Scalars['Date']['output']>;
  exploited?: Maybe<Scalars['String']['output']>;
  knownRansomwareCampaignUse?: Maybe<Scalars['String']['output']>;
};

export type VulnerabilityExploitabilityMsrc = {
  __typename?: 'VulnerabilityExploitabilityMSRC';
  exploitability?: Maybe<Scalars['String']['output']>;
};

export type VulnerabilityExploitabilityNvd = {
  __typename?: 'VulnerabilityExploitabilityNVD';
  exploitability?: Maybe<Scalars['String']['output']>;
  impact?: Maybe<Scalars['String']['output']>;
};

export type VulnerabilityReference = {
  __typename?: 'VulnerabilityReference';
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Warranty = {
  __typename?: 'Warranty';
  details?: Maybe<Array<Maybe<WarrantyDetail>>>;
  error?: Maybe<Scalars['String']['output']>;
  forceUpdate?: Maybe<Scalars['Boolean']['output']>;
  lastWarrantySuccess?: Maybe<Scalars['String']['output']>;
  lastWarrantyTry?: Maybe<Scalars['String']['output']>;
  purchaseCountry?: Maybe<Scalars['String']['output']>;
  shipDate?: Maybe<Scalars['String']['output']>;
};

export type WarrantyDetail = {
  __typename?: 'WarrantyDetail';
  endDate?: Maybe<Scalars['DateTime']['output']>;
  lastChanged?: Maybe<Scalars['DateTime']['output']>;
  serviceType?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
};

export type Webhook = {
  __typename?: 'Webhook';
  _id: Scalars['ID']['output'];
  applicationId: Scalars['ID']['output'];
  applicationName: Scalars['String']['output'];
  authentication?: Maybe<Authentication>;
  autoDisabled?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  eventsSubscribed?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  lastDeliveryDate?: Maybe<Scalars['DateTime']['output']>;
  masterdata?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  payloadUrl: Scalars['String']['output'];
  resourcesFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type WebhookMasterdata = {
  __typename?: 'WebhookMasterdata';
  id: Scalars['String']['output'];
  isPro?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  tooltip?: Maybe<Scalars['String']['output']>;
};

export type WebhookResource = {
  __typename?: 'WebhookResource';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  Authentication: ( BasicAuth );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccountNumber: ResolverTypeWrapper<Scalars['AccountNumber']['output']>;
  ActiveDirectoryGroup: ResolverTypeWrapper<ActiveDirectoryGroup>;
  ActiveDirectoryInfo: ResolverTypeWrapper<ActiveDirectoryInfo>;
  AddWebhookSecuredInput: AddWebhookSecuredInput;
  AggregatedCursor: ResolverTypeWrapper<AggregatedCursor>;
  AirWatchApplication: ResolverTypeWrapper<AirWatchApplication>;
  AirWatchDevice: ResolverTypeWrapper<AirWatchDevice>;
  AirWatchOrganizationGroup: ResolverTypeWrapper<AirWatchOrganizationGroup>;
  Antivirus: ResolverTypeWrapper<Antivirus>;
  AppAccountMutation: ResolverTypeWrapper<Omit<AppAccountMutation, 'addWebhook'> & { addWebhook?: Maybe<ResolversTypes['Webhook']> }>;
  AppIntegrationKind: AppIntegrationKind;
  AssetBasicInfo: ResolverTypeWrapper<AssetBasicInfo>;
  AssetBasicInfoInput: AssetBasicInfoInput;
  AssetCustom: ResolverTypeWrapper<AssetCustom>;
  AssetCustomInput: AssetCustomInput;
  AssetDetailsResponse: ResolverTypeWrapper<AssetDetailsResponse>;
  AssetGroup: ResolverTypeWrapper<AssetGroup>;
  AssetGroupsType: ResolverTypeWrapper<AssetGroupsType>;
  AssetRelationType: ResolverTypeWrapper<AssetRelationType>;
  AssetWithSoftwareResponse: ResolverTypeWrapper<AssetWithSoftwareResponse>;
  AssetsFilterConjunction: AssetsFilterConjunction;
  AssetsFilterGroupedInput: AssetsFilterGroupedInput;
  AssetsFilterInput: AssetsFilterInput;
  AssetsFilterType: AssetsFilterType;
  AssetsFiltersCondition: AssetsFiltersCondition;
  AssetsPage: AssetsPage;
  AssetsPagination: ResolverTypeWrapper<AssetsPagination>;
  AssetsPaginationInput: AssetsPaginationInput;
  AssetsPaginationInputValidated: AssetsPaginationInputValidated;
  Authentication: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Authentication']>;
  AuthenticationType: AuthenticationType;
  AuthorizedReport: ResolverTypeWrapper<AuthorizedReport>;
  AuthorizedSiteAccounts: ResolverTypeWrapper<AuthorizedSiteAccounts>;
  AuthorizedSites: ResolverTypeWrapper<AuthorizedSites>;
  Autorun: ResolverTypeWrapper<Autorun>;
  AwsAmi: ResolverTypeWrapper<AwsAmi>;
  AwsElasticGpu: ResolverTypeWrapper<AwsElasticGpu>;
  AwsHost: ResolverTypeWrapper<AwsHost>;
  AwsProductCode: ResolverTypeWrapper<AwsProductCode>;
  AwsSecurityGroupPermission: ResolverTypeWrapper<AwsSecurityGroupPermission>;
  AwsSecurityGroupPermissionIpRange: ResolverTypeWrapper<AwsSecurityGroupPermissionIpRange>;
  AwsSubnetIpv6CidrBlock: ResolverTypeWrapper<AwsSubnetIpv6CidrBlock>;
  AzureIpConfiguration: ResolverTypeWrapper<AzureIpConfiguration>;
  AzureNetworkSecurityGroup: ResolverTypeWrapper<AzureNetworkSecurityGroup>;
  AzureSecurityRule: ResolverTypeWrapper<AzureSecurityRule>;
  AzureSubnetIpConfiguration: ResolverTypeWrapper<AzureSubnetIpConfiguration>;
  AzureVirtualMachineExtension: ResolverTypeWrapper<AzureVirtualMachineExtension>;
  Baseboard: ResolverTypeWrapper<Baseboard>;
  BasicAuth: ResolverTypeWrapper<BasicAuth>;
  BasicAuthenticationInput: BasicAuthenticationInput;
  Battery: ResolverTypeWrapper<Battery>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Bios: ResolverTypeWrapper<Bios>;
  BitLockerRecoveryKey: ResolverTypeWrapper<BitLockerRecoveryKey>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BootConfiguration: ResolverTypeWrapper<BootConfiguration>;
  BrandMetadata: ResolverTypeWrapper<BrandMetadata>;
  Bus: ResolverTypeWrapper<Bus>;
  BusConfig: ResolverTypeWrapper<BusConfig>;
  Byte: ResolverTypeWrapper<Scalars['Byte']['output']>;
  COM: ResolverTypeWrapper<Com>;
  CdromDrive: ResolverTypeWrapper<CdromDrive>;
  Certificate: ResolverTypeWrapper<Certificate>;
  ChromeOsActiveTimeRange: ResolverTypeWrapper<ChromeOsActiveTimeRange>;
  CipherCredential: CipherCredential;
  CitrixAppliance: ResolverTypeWrapper<CitrixAppliance>;
  CitrixConfiguration: ResolverTypeWrapper<CitrixConfiguration>;
  CitrixCrashDump: ResolverTypeWrapper<CitrixCrashDump>;
  CitrixExtraInfo: ResolverTypeWrapper<CitrixExtraInfo>;
  CitrixGuestInfo: ResolverTypeWrapper<CitrixGuestInfo>;
  CitrixNetwork: ResolverTypeWrapper<CitrixNetwork>;
  CitrixPhysicalBlockDevice: ResolverTypeWrapper<CitrixPhysicalBlockDevice>;
  CitrixPhysicalCpu: ResolverTypeWrapper<CitrixPhysicalCpu>;
  CitrixPhysicalInterface: ResolverTypeWrapper<CitrixPhysicalInterface>;
  CitrixPoolInfo: ResolverTypeWrapper<CitrixPoolInfo>;
  CitrixPoolPatch: ResolverTypeWrapper<CitrixPoolPatch>;
  CitrixPoolStorage: ResolverTypeWrapper<CitrixPoolStorage>;
  CitrixRestriction: ResolverTypeWrapper<CitrixRestriction>;
  CitrixVirtualBlockDevice: ResolverTypeWrapper<CitrixVirtualBlockDevice>;
  CitrixVirtualDiskImage: ResolverTypeWrapper<CitrixVirtualDiskImage>;
  CitrixVirtualInterface: ResolverTypeWrapper<CitrixVirtualInterface>;
  CitrixXenServerInfo: ResolverTypeWrapper<CitrixXenServerInfo>;
  CitrixXenServerPatch: ResolverTypeWrapper<CitrixXenServerPatch>;
  CitrixXenServerStorage: ResolverTypeWrapper<CitrixXenServerStorage>;
  CloudAssetCustom: ResolverTypeWrapper<CloudAssetCustom>;
  CloudAssetCustomInput: CloudAssetCustomInput;
  Codec: ResolverTypeWrapper<Codec>;
  Component: ResolverTypeWrapper<Component>;
  ComputerSystem: ResolverTypeWrapper<ComputerSystem>;
  CountryCode: ResolverTypeWrapper<Scalars['CountryCode']['output']>;
  CreateWebhookInput: CreateWebhookInput;
  Cuid: ResolverTypeWrapper<Scalars['Cuid']['output']>;
  Currency: ResolverTypeWrapper<Scalars['Currency']['output']>;
  CurrencyType: CurrencyType;
  CursorOrder: ResolverTypeWrapper<CursorOrder>;
  CustomField: ResolverTypeWrapper<CustomField>;
  CustomFieldInput: CustomFieldInput;
  CustomFieldProps: ResolverTypeWrapper<CustomFieldProps>;
  CustomFieldPropsInput: CustomFieldPropsInput;
  DCOM: ResolverTypeWrapper<Dcom>;
  DID: ResolverTypeWrapper<Scalars['DID']['output']>;
  DataCenter: ResolverTypeWrapper<DataCenter>;
  Datastore: ResolverTypeWrapper<Datastore>;
  DatastoreCluster: ResolverTypeWrapper<DatastoreCluster>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Desktop: ResolverTypeWrapper<Desktop>;
  DeviceActionResult: ResolverTypeWrapper<DeviceActionResult>;
  DeviceApplication: ResolverTypeWrapper<DeviceApplication>;
  DeweyDecimal: ResolverTypeWrapper<Scalars['DeweyDecimal']['output']>;
  DiscoveryComponent: ResolverTypeWrapper<DiscoveryComponent>;
  DiscoveryCredential: ResolverTypeWrapper<DiscoveryCredential>;
  DiscoveryCredentialInput: DiscoveryCredentialInput;
  DiscoveryCredentialPaginated: ResolverTypeWrapper<DiscoveryCredentialPaginated>;
  DiscoveryCredentialParameters: ResolverTypeWrapper<DiscoveryCredentialParameters>;
  DiscoveryCredentialParametersInput: DiscoveryCredentialParametersInput;
  DiscoveryCredentialType: DiscoveryCredentialType;
  DiscoveryScanningTask: ResolverTypeWrapper<DiscoveryScanningTask>;
  DiskPartition: ResolverTypeWrapper<DiskPartition>;
  DisplayConfiguration: ResolverTypeWrapper<DisplayConfiguration>;
  DisplayControllerConfiguration: ResolverTypeWrapper<DisplayControllerConfiguration>;
  Duration: ResolverTypeWrapper<Scalars['Duration']['output']>;
  ECursorPage: ECursorPage;
  EditAssetInput: EditAssetInput;
  EditAssetResponse: ResolverTypeWrapper<EditAssetResponse>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']['output']>;
  Environment: ResolverTypeWrapper<Environment>;
  Error: ResolverTypeWrapper<Error>;
  EsxiCluster: ResolverTypeWrapper<EsxiCluster>;
  ExportFilterConjunction: ExportFilterConjunction;
  ExportFilterGroupedInput: ExportFilterGroupedInput;
  ExportFilterInput: ExportFilterInput;
  ExportFilterType: ExportFilterType;
  ExportFilteredResponse: ResolverTypeWrapper<ExportFilteredResponse>;
  ExportFiltersCondition: ExportFiltersCondition;
  ExportStatusResponse: ResolverTypeWrapper<ExportStatusResponse>;
  ExtendedInfo: ResolverTypeWrapper<ExtendedInfo>;
  Feature: ResolverTypeWrapper<Feature>;
  Field: ResolverTypeWrapper<Field>;
  FieldType: FieldType;
  FieldsInput: FieldsInput;
  FileProperty: ResolverTypeWrapper<FileProperty>;
  FirmwareHistory: ResolverTypeWrapper<FirmwareHistory>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GUID: ResolverTypeWrapper<Scalars['GUID']['output']>;
  GraphicsCard: ResolverTypeWrapper<GraphicsCard>;
  GroupedAggSoftwareCursoredResponse: ResolverTypeWrapper<GroupedAggSoftwareCursoredResponse>;
  GroupedRelease: ResolverTypeWrapper<GroupedRelease>;
  GroupedSoftware: ResolverTypeWrapper<GroupedSoftware>;
  HSL: ResolverTypeWrapper<Scalars['HSL']['output']>;
  HSLA: ResolverTypeWrapper<Scalars['HSLA']['output']>;
  HardDisk: ResolverTypeWrapper<HardDisk>;
  HexColorCode: ResolverTypeWrapper<Scalars['HexColorCode']['output']>;
  Hexadecimal: ResolverTypeWrapper<Scalars['Hexadecimal']['output']>;
  HyperVGuest: ResolverTypeWrapper<HyperVGuest>;
  HyperVNetwork: ResolverTypeWrapper<HyperVNetwork>;
  IBAN: ResolverTypeWrapper<Scalars['IBAN']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IP: ResolverTypeWrapper<Scalars['IP']['output']>;
  IPCPatent: ResolverTypeWrapper<Scalars['IPCPatent']['output']>;
  IPv4: ResolverTypeWrapper<Scalars['IPv4']['output']>;
  IPv6: ResolverTypeWrapper<Scalars['IPv6']['output']>;
  ISBN: ResolverTypeWrapper<Scalars['ISBN']['output']>;
  ISO8601Duration: ResolverTypeWrapper<Scalars['ISO8601Duration']['output']>;
  IVersionResponse: ResolverTypeWrapper<IVersionResponse>;
  IdeController: ResolverTypeWrapper<IdeController>;
  InfraredDevice: ResolverTypeWrapper<InfraredDevice>;
  InstallType: InstallType;
  InstallationState: ResolverTypeWrapper<InstallationState>;
  InstallationType: InstallationType;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntegrationsInstallation: ResolverTypeWrapper<IntegrationsInstallation>;
  IpLocation: ResolverTypeWrapper<IpLocation>;
  ItemsResponse: ResolverTypeWrapper<ItemsResponse>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']['output']>;
  JWT: ResolverTypeWrapper<Scalars['JWT']['output']>;
  KbPatches: ResolverTypeWrapper<KbPatches>;
  Keyboard: ResolverTypeWrapper<Keyboard>;
  LCCSubclass: ResolverTypeWrapper<Scalars['LCCSubclass']['output']>;
  Latitude: ResolverTypeWrapper<Scalars['Latitude']['output']>;
  LocalDate: ResolverTypeWrapper<Scalars['LocalDate']['output']>;
  LocalEndTime: ResolverTypeWrapper<Scalars['LocalEndTime']['output']>;
  LocalTime: ResolverTypeWrapper<Scalars['LocalTime']['output']>;
  Locale: ResolverTypeWrapper<Scalars['Locale']['output']>;
  LogicalDisk: ResolverTypeWrapper<LogicalDisk>;
  LogicalRules: ResolverTypeWrapper<Scalars['LogicalRules']['output']>;
  LogicalVolume: ResolverTypeWrapper<LogicalVolume>;
  Long: ResolverTypeWrapper<Scalars['Long']['output']>;
  Longitude: ResolverTypeWrapper<Scalars['Longitude']['output']>;
  MAC: ResolverTypeWrapper<Scalars['MAC']['output']>;
  MaintenanceWindowInput: MaintenanceWindowInput;
  MappedDrive: ResolverTypeWrapper<MappedDrive>;
  Me: ResolverTypeWrapper<Me>;
  MemoryArray: ResolverTypeWrapper<MemoryArray>;
  MemoryModule: ResolverTypeWrapper<MemoryModule>;
  MobileDeviceManagement: ResolverTypeWrapper<MobileDeviceManagement>;
  MobileDeviceManagementContainer: ResolverTypeWrapper<MobileDeviceManagementContainer>;
  ModelMetadata: ResolverTypeWrapper<ModelMetadata>;
  Modem: ResolverTypeWrapper<Modem>;
  Monitor: ResolverTypeWrapper<Monitor>;
  MonitorData: ResolverTypeWrapper<MonitorData>;
  Mutation: ResolverTypeWrapper<{}>;
  NegativeFloat: ResolverTypeWrapper<Scalars['NegativeFloat']['output']>;
  NegativeInt: ResolverTypeWrapper<Scalars['NegativeInt']['output']>;
  Network: ResolverTypeWrapper<Network>;
  NetworkActionDefinition: ResolverTypeWrapper<NetworkActionDefinition>;
  NetworkActionDefinitionInput: NetworkActionDefinitionInput;
  NetworkAdapter: ResolverTypeWrapper<NetworkAdapter>;
  NetworkClient: ResolverTypeWrapper<NetworkClient>;
  NetworkConnection: ResolverTypeWrapper<NetworkConnection>;
  NetworkVisibilityConfig: ResolverTypeWrapper<NetworkVisibilityConfig>;
  NetworkVisibilityInput: NetworkVisibilityInput;
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']['output']>;
  NonNegativeFloat: ResolverTypeWrapper<Scalars['NonNegativeFloat']['output']>;
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']['output']>;
  NonPositiveFloat: ResolverTypeWrapper<Scalars['NonPositiveFloat']['output']>;
  NonPositiveInt: ResolverTypeWrapper<Scalars['NonPositiveInt']['output']>;
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']['output']>;
  OnBoardDevice: ResolverTypeWrapper<OnBoardDevice>;
  OperatingSystem: ResolverTypeWrapper<OperatingSystem>;
  OperatingSystemDetails: ResolverTypeWrapper<OperatingSystemDetails>;
  OperatingSystemRecoveryConfiguration: ResolverTypeWrapper<OperatingSystemRecoveryConfiguration>;
  OrderDirection: OrderDirection;
  OrgSite: ResolverTypeWrapper<OrgSite>;
  OrgSiteCreated: ResolverTypeWrapper<OrgSiteCreated>;
  OrgSiteMutation: ResolverTypeWrapper<OrgSiteMutation>;
  OrganizationMutation: ResolverTypeWrapper<OrganizationMutation>;
  OsMetadata: ResolverTypeWrapper<OsMetadata>;
  OtData: ResolverTypeWrapper<OtData>;
  Page: Page;
  PageFile: ResolverTypeWrapper<PageFile>;
  PaginatedSourcesResponse: ResolverTypeWrapper<PaginatedSourcesResponse>;
  Pagination: ResolverTypeWrapper<Pagination>;
  PaginationInput: PaginationInput;
  PciCard: ResolverTypeWrapper<PciCard>;
  PcmciaController: ResolverTypeWrapper<PcmciaController>;
  PerformanceInformation: ResolverTypeWrapper<PerformanceInformation>;
  PhoneNumber: ResolverTypeWrapper<Scalars['PhoneNumber']['output']>;
  PhysicalVolume: ResolverTypeWrapper<PhysicalVolume>;
  PnpSignedDriver: ResolverTypeWrapper<PnpSignedDriver>;
  PointingDevice: ResolverTypeWrapper<PointingDevice>;
  Port: ResolverTypeWrapper<Scalars['Port']['output']>;
  PortConnector: ResolverTypeWrapper<PortConnector>;
  PositiveFloat: ResolverTypeWrapper<Scalars['PositiveFloat']['output']>;
  PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']['output']>;
  PostalCode: ResolverTypeWrapper<Scalars['PostalCode']['output']>;
  Printer: ResolverTypeWrapper<Printer>;
  PrinterDriver: ResolverTypeWrapper<PrinterDriver>;
  PrinterInfo: ResolverTypeWrapper<PrinterInfo>;
  Process: ResolverTypeWrapper<Process>;
  Processor: ResolverTypeWrapper<Processor>;
  Query: ResolverTypeWrapper<{}>;
  QuickFixEngineering: ResolverTypeWrapper<QuickFixEngineering>;
  RGB: ResolverTypeWrapper<Scalars['RGB']['output']>;
  RGBA: ResolverTypeWrapper<Scalars['RGBA']['output']>;
  RecognitionInfo: ResolverTypeWrapper<RecognitionInfo>;
  ReconcileField: ResolverTypeWrapper<ReconcileField>;
  Reconciliation: ResolverTypeWrapper<Reconciliation>;
  Registry: ResolverTypeWrapper<Registry>;
  Relation: ResolverTypeWrapper<Relation>;
  ReleaseInfoScannedSoftware: ResolverTypeWrapper<ReleaseInfoScannedSoftware>;
  ReportExecutionStatus: ResolverTypeWrapper<ReportExecutionStatus>;
  ReportItem: ResolverTypeWrapper<ReportItem>;
  ReportsExecutionStatus: ResolverTypeWrapper<ReportsExecutionStatus>;
  ReportsFullExportResponse: ResolverTypeWrapper<ReportsFullExportResponse>;
  ReportsFullExportStatusResponse: ResolverTypeWrapper<ReportsFullExportStatusResponse>;
  ReportsResponse: ResolverTypeWrapper<ReportsResponse>;
  ReportsResultsResponse: ResolverTypeWrapper<ReportsResultsResponse>;
  ResourceGroup: ResolverTypeWrapper<ResourceGroup>;
  RotateOrgSiteCredentials: ResolverTypeWrapper<RotateOrgSiteCredentials>;
  RotateOrganizationCredentials: ResolverTypeWrapper<RotateOrganizationCredentials>;
  RoutingNumber: ResolverTypeWrapper<Scalars['RoutingNumber']['output']>;
  SafeInt: ResolverTypeWrapper<Scalars['SafeInt']['output']>;
  ScanningAction: ResolverTypeWrapper<ScanningAction>;
  ScanningGroup: ResolverTypeWrapper<ScanningGroup>;
  ScanningGroupInput: ScanningGroupInput;
  ScanningTask: ResolverTypeWrapper<ScanningTask>;
  ScanningTaskActionInput: ScanningTaskActionInput;
  ScanningTaskInput: ScanningTaskInput;
  ScsiController: ResolverTypeWrapper<ScsiController>;
  SearchInput: SearchInput;
  SearchType: SearchType;
  SecurityGroup: ResolverTypeWrapper<SecurityGroup>;
  SemVer: ResolverTypeWrapper<Scalars['SemVer']['output']>;
  SerialNumber: ResolverTypeWrapper<SerialNumber>;
  Service: ResolverTypeWrapper<Service>;
  Share: ResolverTypeWrapper<Share>;
  SharePermission: ResolverTypeWrapper<SharePermission>;
  Site: ResolverTypeWrapper<Site>;
  SiteMutation: ResolverTypeWrapper<SiteMutation>;
  SiteSourceMutation: ResolverTypeWrapper<SiteSourceMutation>;
  SiteUserProfile: ResolverTypeWrapper<SiteUserProfile>;
  SiteVulnerabilitiesResponse: ResolverTypeWrapper<SiteVulnerabilitiesResponse>;
  SiteVulnerability: ResolverTypeWrapper<SiteVulnerability>;
  SiteWebhook: ResolverTypeWrapper<SiteWebhook>;
  SnmpInfo: ResolverTypeWrapper<SnmpInfo>;
  SnmpV3AuthType: SnmpV3AuthType;
  SnmpV3Protocol: SnmpV3Protocol;
  Software: ResolverTypeWrapper<Software>;
  SoftwareAggregatedCursorInput: SoftwareAggregatedCursorInput;
  SoftwareAggregatedCursorOrderInput: SoftwareAggregatedCursorOrderInput;
  SoftwareAggregatedPaginatedCursorInput: SoftwareAggregatedPaginatedCursorInput;
  SoftwareDetails: ResolverTypeWrapper<SoftwareDetails>;
  SoftwareFilterConjunction: SoftwareFilterConjunction;
  SoftwareFilterGroupedInput: SoftwareFilterGroupedInput;
  SoftwareFilterInput: SoftwareFilterInput;
  SoftwareFilterType: SoftwareFilterType;
  SoftwareFiltersCondition: SoftwareFiltersCondition;
  SoftwaresResponse: ResolverTypeWrapper<SoftwaresResponse>;
  SoundDevice: ResolverTypeWrapper<SoundDevice>;
  Source: ResolverTypeWrapper<Source>;
  SourceMutation: ResolverTypeWrapper<SourceMutation>;
  SourcesFilterConjunction: SourcesFilterConjunction;
  SourcesFilterGroupedInput: SourcesFilterGroupedInput;
  SourcesFilterInput: SourcesFilterInput;
  SourcesFilterType: SourcesFilterType;
  SourcesFiltersCondition: SourcesFiltersCondition;
  SourcesPage: SourcesPage;
  SourcesPaginationInfo: ResolverTypeWrapper<SourcesPaginationInfo>;
  SourcesPaginationInput: SourcesPaginationInput;
  SqlDatabase: ResolverTypeWrapper<SqlDatabase>;
  SqlServer: ResolverTypeWrapper<SqlServer>;
  SqlServerCluster: ResolverTypeWrapper<SqlServerCluster>;
  SqlServerService: ResolverTypeWrapper<SqlServerService>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subnet: ResolverTypeWrapper<Subnet>;
  SystemDriver: ResolverTypeWrapper<SystemDriver>;
  SystemEnclosure: ResolverTypeWrapper<SystemEnclosure>;
  SystemProduct: ResolverTypeWrapper<SystemProduct>;
  Tag: ResolverTypeWrapper<Tag>;
  TapeDrive: ResolverTypeWrapper<TapeDrive>;
  Time: ResolverTypeWrapper<Scalars['Time']['output']>;
  TimeZone: ResolverTypeWrapper<Scalars['TimeZone']['output']>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  TonerInformation: ResolverTypeWrapper<TonerInformation>;
  Tpm: ResolverTypeWrapper<Tpm>;
  URL: ResolverTypeWrapper<Scalars['URL']['output']>;
  USCurrency: ResolverTypeWrapper<Scalars['USCurrency']['output']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
  UnsignedFloat: ResolverTypeWrapper<Scalars['UnsignedFloat']['output']>;
  UnsignedInt: ResolverTypeWrapper<Scalars['UnsignedInt']['output']>;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  Ups: ResolverTypeWrapper<Ups>;
  UsbController: ResolverTypeWrapper<UsbController>;
  UsbDevice: ResolverTypeWrapper<UsbDevice>;
  User: ResolverTypeWrapper<User>;
  UserInGroup: ResolverTypeWrapper<UserInGroup>;
  UtcOffset: ResolverTypeWrapper<Scalars['UtcOffset']['output']>;
  VCenter: ResolverTypeWrapper<VCenter>;
  ValueDateInput: ValueDateInput;
  ValueStringInput: ValueStringInput;
  VersionDetails: ResolverTypeWrapper<VersionDetails>;
  VirtualMachine: ResolverTypeWrapper<VirtualMachine>;
  VirtualNetwork: ResolverTypeWrapper<VirtualNetwork>;
  VmwareDatastoreClusterConfiguration: ResolverTypeWrapper<VmwareDatastoreClusterConfiguration>;
  VmwareDatastoreClusterOverride: ResolverTypeWrapper<VmwareDatastoreClusterOverride>;
  VmwareGuestSnapshot: ResolverTypeWrapper<VmwareGuestSnapshot>;
  VmwareProductInfo: ResolverTypeWrapper<VmwareProductInfo>;
  Void: ResolverTypeWrapper<Scalars['Void']['output']>;
  Volume: ResolverTypeWrapper<Volume>;
  VolumeGroup: ResolverTypeWrapper<VolumeGroup>;
  Vulnerability: ResolverTypeWrapper<Vulnerability>;
  VulnerabilityCause: ResolverTypeWrapper<VulnerabilityCause>;
  VulnerabilityExploitability: ResolverTypeWrapper<VulnerabilityExploitability>;
  VulnerabilityExploitabilityCISA: ResolverTypeWrapper<VulnerabilityExploitabilityCisa>;
  VulnerabilityExploitabilityMSRC: ResolverTypeWrapper<VulnerabilityExploitabilityMsrc>;
  VulnerabilityExploitabilityNVD: ResolverTypeWrapper<VulnerabilityExploitabilityNvd>;
  VulnerabilityReference: ResolverTypeWrapper<VulnerabilityReference>;
  Warranty: ResolverTypeWrapper<Warranty>;
  WarrantyDetail: ResolverTypeWrapper<WarrantyDetail>;
  Webhook: ResolverTypeWrapper<Omit<Webhook, 'authentication'> & { authentication?: Maybe<ResolversTypes['Authentication']> }>;
  WebhookMasterdata: ResolverTypeWrapper<WebhookMasterdata>;
  WebhookResource: ResolverTypeWrapper<WebhookResource>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccountNumber: Scalars['AccountNumber']['output'];
  ActiveDirectoryGroup: ActiveDirectoryGroup;
  ActiveDirectoryInfo: ActiveDirectoryInfo;
  AddWebhookSecuredInput: AddWebhookSecuredInput;
  AggregatedCursor: AggregatedCursor;
  AirWatchApplication: AirWatchApplication;
  AirWatchDevice: AirWatchDevice;
  AirWatchOrganizationGroup: AirWatchOrganizationGroup;
  Antivirus: Antivirus;
  AppAccountMutation: Omit<AppAccountMutation, 'addWebhook'> & { addWebhook?: Maybe<ResolversParentTypes['Webhook']> };
  AssetBasicInfo: AssetBasicInfo;
  AssetBasicInfoInput: AssetBasicInfoInput;
  AssetCustom: AssetCustom;
  AssetCustomInput: AssetCustomInput;
  AssetDetailsResponse: AssetDetailsResponse;
  AssetGroup: AssetGroup;
  AssetGroupsType: AssetGroupsType;
  AssetRelationType: AssetRelationType;
  AssetWithSoftwareResponse: AssetWithSoftwareResponse;
  AssetsFilterGroupedInput: AssetsFilterGroupedInput;
  AssetsFilterInput: AssetsFilterInput;
  AssetsFiltersCondition: AssetsFiltersCondition;
  AssetsPagination: AssetsPagination;
  AssetsPaginationInput: AssetsPaginationInput;
  AssetsPaginationInputValidated: AssetsPaginationInputValidated;
  Authentication: ResolversUnionTypes<ResolversParentTypes>['Authentication'];
  AuthorizedReport: AuthorizedReport;
  AuthorizedSiteAccounts: AuthorizedSiteAccounts;
  AuthorizedSites: AuthorizedSites;
  Autorun: Autorun;
  AwsAmi: AwsAmi;
  AwsElasticGpu: AwsElasticGpu;
  AwsHost: AwsHost;
  AwsProductCode: AwsProductCode;
  AwsSecurityGroupPermission: AwsSecurityGroupPermission;
  AwsSecurityGroupPermissionIpRange: AwsSecurityGroupPermissionIpRange;
  AwsSubnetIpv6CidrBlock: AwsSubnetIpv6CidrBlock;
  AzureIpConfiguration: AzureIpConfiguration;
  AzureNetworkSecurityGroup: AzureNetworkSecurityGroup;
  AzureSecurityRule: AzureSecurityRule;
  AzureSubnetIpConfiguration: AzureSubnetIpConfiguration;
  AzureVirtualMachineExtension: AzureVirtualMachineExtension;
  Baseboard: Baseboard;
  BasicAuth: BasicAuth;
  BasicAuthenticationInput: BasicAuthenticationInput;
  Battery: Battery;
  BigInt: Scalars['BigInt']['output'];
  Bios: Bios;
  BitLockerRecoveryKey: BitLockerRecoveryKey;
  Boolean: Scalars['Boolean']['output'];
  BootConfiguration: BootConfiguration;
  BrandMetadata: BrandMetadata;
  Bus: Bus;
  BusConfig: BusConfig;
  Byte: Scalars['Byte']['output'];
  COM: Com;
  CdromDrive: CdromDrive;
  Certificate: Certificate;
  ChromeOsActiveTimeRange: ChromeOsActiveTimeRange;
  CipherCredential: CipherCredential;
  CitrixAppliance: CitrixAppliance;
  CitrixConfiguration: CitrixConfiguration;
  CitrixCrashDump: CitrixCrashDump;
  CitrixExtraInfo: CitrixExtraInfo;
  CitrixGuestInfo: CitrixGuestInfo;
  CitrixNetwork: CitrixNetwork;
  CitrixPhysicalBlockDevice: CitrixPhysicalBlockDevice;
  CitrixPhysicalCpu: CitrixPhysicalCpu;
  CitrixPhysicalInterface: CitrixPhysicalInterface;
  CitrixPoolInfo: CitrixPoolInfo;
  CitrixPoolPatch: CitrixPoolPatch;
  CitrixPoolStorage: CitrixPoolStorage;
  CitrixRestriction: CitrixRestriction;
  CitrixVirtualBlockDevice: CitrixVirtualBlockDevice;
  CitrixVirtualDiskImage: CitrixVirtualDiskImage;
  CitrixVirtualInterface: CitrixVirtualInterface;
  CitrixXenServerInfo: CitrixXenServerInfo;
  CitrixXenServerPatch: CitrixXenServerPatch;
  CitrixXenServerStorage: CitrixXenServerStorage;
  CloudAssetCustom: CloudAssetCustom;
  CloudAssetCustomInput: CloudAssetCustomInput;
  Codec: Codec;
  Component: Component;
  ComputerSystem: ComputerSystem;
  CountryCode: Scalars['CountryCode']['output'];
  CreateWebhookInput: CreateWebhookInput;
  Cuid: Scalars['Cuid']['output'];
  Currency: Scalars['Currency']['output'];
  CursorOrder: CursorOrder;
  CustomField: CustomField;
  CustomFieldInput: CustomFieldInput;
  CustomFieldProps: CustomFieldProps;
  CustomFieldPropsInput: CustomFieldPropsInput;
  DCOM: Dcom;
  DID: Scalars['DID']['output'];
  DataCenter: DataCenter;
  Datastore: Datastore;
  DatastoreCluster: DatastoreCluster;
  Date: Scalars['Date']['output'];
  DateTime: Scalars['DateTime']['output'];
  Desktop: Desktop;
  DeviceActionResult: DeviceActionResult;
  DeviceApplication: DeviceApplication;
  DeweyDecimal: Scalars['DeweyDecimal']['output'];
  DiscoveryComponent: DiscoveryComponent;
  DiscoveryCredential: DiscoveryCredential;
  DiscoveryCredentialInput: DiscoveryCredentialInput;
  DiscoveryCredentialPaginated: DiscoveryCredentialPaginated;
  DiscoveryCredentialParameters: DiscoveryCredentialParameters;
  DiscoveryCredentialParametersInput: DiscoveryCredentialParametersInput;
  DiscoveryScanningTask: DiscoveryScanningTask;
  DiskPartition: DiskPartition;
  DisplayConfiguration: DisplayConfiguration;
  DisplayControllerConfiguration: DisplayControllerConfiguration;
  Duration: Scalars['Duration']['output'];
  EditAssetInput: EditAssetInput;
  EditAssetResponse: EditAssetResponse;
  EmailAddress: Scalars['EmailAddress']['output'];
  Environment: Environment;
  Error: Error;
  EsxiCluster: EsxiCluster;
  ExportFilterGroupedInput: ExportFilterGroupedInput;
  ExportFilterInput: ExportFilterInput;
  ExportFilteredResponse: ExportFilteredResponse;
  ExportFiltersCondition: ExportFiltersCondition;
  ExportStatusResponse: ExportStatusResponse;
  ExtendedInfo: ExtendedInfo;
  Feature: Feature;
  Field: Field;
  FieldsInput: FieldsInput;
  FileProperty: FileProperty;
  FirmwareHistory: FirmwareHistory;
  Float: Scalars['Float']['output'];
  GUID: Scalars['GUID']['output'];
  GraphicsCard: GraphicsCard;
  GroupedAggSoftwareCursoredResponse: GroupedAggSoftwareCursoredResponse;
  GroupedRelease: GroupedRelease;
  GroupedSoftware: GroupedSoftware;
  HSL: Scalars['HSL']['output'];
  HSLA: Scalars['HSLA']['output'];
  HardDisk: HardDisk;
  HexColorCode: Scalars['HexColorCode']['output'];
  Hexadecimal: Scalars['Hexadecimal']['output'];
  HyperVGuest: HyperVGuest;
  HyperVNetwork: HyperVNetwork;
  IBAN: Scalars['IBAN']['output'];
  ID: Scalars['ID']['output'];
  IP: Scalars['IP']['output'];
  IPCPatent: Scalars['IPCPatent']['output'];
  IPv4: Scalars['IPv4']['output'];
  IPv6: Scalars['IPv6']['output'];
  ISBN: Scalars['ISBN']['output'];
  ISO8601Duration: Scalars['ISO8601Duration']['output'];
  IVersionResponse: IVersionResponse;
  IdeController: IdeController;
  InfraredDevice: InfraredDevice;
  InstallationState: InstallationState;
  Int: Scalars['Int']['output'];
  IntegrationsInstallation: IntegrationsInstallation;
  IpLocation: IpLocation;
  ItemsResponse: ItemsResponse;
  JSON: Scalars['JSON']['output'];
  JSONObject: Scalars['JSONObject']['output'];
  JWT: Scalars['JWT']['output'];
  KbPatches: KbPatches;
  Keyboard: Keyboard;
  LCCSubclass: Scalars['LCCSubclass']['output'];
  Latitude: Scalars['Latitude']['output'];
  LocalDate: Scalars['LocalDate']['output'];
  LocalEndTime: Scalars['LocalEndTime']['output'];
  LocalTime: Scalars['LocalTime']['output'];
  Locale: Scalars['Locale']['output'];
  LogicalDisk: LogicalDisk;
  LogicalRules: Scalars['LogicalRules']['output'];
  LogicalVolume: LogicalVolume;
  Long: Scalars['Long']['output'];
  Longitude: Scalars['Longitude']['output'];
  MAC: Scalars['MAC']['output'];
  MaintenanceWindowInput: MaintenanceWindowInput;
  MappedDrive: MappedDrive;
  Me: Me;
  MemoryArray: MemoryArray;
  MemoryModule: MemoryModule;
  MobileDeviceManagement: MobileDeviceManagement;
  MobileDeviceManagementContainer: MobileDeviceManagementContainer;
  ModelMetadata: ModelMetadata;
  Modem: Modem;
  Monitor: Monitor;
  MonitorData: MonitorData;
  Mutation: {};
  NegativeFloat: Scalars['NegativeFloat']['output'];
  NegativeInt: Scalars['NegativeInt']['output'];
  Network: Network;
  NetworkActionDefinition: NetworkActionDefinition;
  NetworkActionDefinitionInput: NetworkActionDefinitionInput;
  NetworkAdapter: NetworkAdapter;
  NetworkClient: NetworkClient;
  NetworkConnection: NetworkConnection;
  NetworkVisibilityConfig: NetworkVisibilityConfig;
  NetworkVisibilityInput: NetworkVisibilityInput;
  NonEmptyString: Scalars['NonEmptyString']['output'];
  NonNegativeFloat: Scalars['NonNegativeFloat']['output'];
  NonNegativeInt: Scalars['NonNegativeInt']['output'];
  NonPositiveFloat: Scalars['NonPositiveFloat']['output'];
  NonPositiveInt: Scalars['NonPositiveInt']['output'];
  ObjectID: Scalars['ObjectID']['output'];
  OnBoardDevice: OnBoardDevice;
  OperatingSystem: OperatingSystem;
  OperatingSystemDetails: OperatingSystemDetails;
  OperatingSystemRecoveryConfiguration: OperatingSystemRecoveryConfiguration;
  OrgSite: OrgSite;
  OrgSiteCreated: OrgSiteCreated;
  OrgSiteMutation: OrgSiteMutation;
  OrganizationMutation: OrganizationMutation;
  OsMetadata: OsMetadata;
  OtData: OtData;
  PageFile: PageFile;
  PaginatedSourcesResponse: PaginatedSourcesResponse;
  Pagination: Pagination;
  PaginationInput: PaginationInput;
  PciCard: PciCard;
  PcmciaController: PcmciaController;
  PerformanceInformation: PerformanceInformation;
  PhoneNumber: Scalars['PhoneNumber']['output'];
  PhysicalVolume: PhysicalVolume;
  PnpSignedDriver: PnpSignedDriver;
  PointingDevice: PointingDevice;
  Port: Scalars['Port']['output'];
  PortConnector: PortConnector;
  PositiveFloat: Scalars['PositiveFloat']['output'];
  PositiveInt: Scalars['PositiveInt']['output'];
  PostalCode: Scalars['PostalCode']['output'];
  Printer: Printer;
  PrinterDriver: PrinterDriver;
  PrinterInfo: PrinterInfo;
  Process: Process;
  Processor: Processor;
  Query: {};
  QuickFixEngineering: QuickFixEngineering;
  RGB: Scalars['RGB']['output'];
  RGBA: Scalars['RGBA']['output'];
  RecognitionInfo: RecognitionInfo;
  ReconcileField: ReconcileField;
  Reconciliation: Reconciliation;
  Registry: Registry;
  Relation: Relation;
  ReleaseInfoScannedSoftware: ReleaseInfoScannedSoftware;
  ReportExecutionStatus: ReportExecutionStatus;
  ReportItem: ReportItem;
  ReportsExecutionStatus: ReportsExecutionStatus;
  ReportsFullExportResponse: ReportsFullExportResponse;
  ReportsFullExportStatusResponse: ReportsFullExportStatusResponse;
  ReportsResponse: ReportsResponse;
  ReportsResultsResponse: ReportsResultsResponse;
  ResourceGroup: ResourceGroup;
  RotateOrgSiteCredentials: RotateOrgSiteCredentials;
  RotateOrganizationCredentials: RotateOrganizationCredentials;
  RoutingNumber: Scalars['RoutingNumber']['output'];
  SafeInt: Scalars['SafeInt']['output'];
  ScanningAction: ScanningAction;
  ScanningGroup: ScanningGroup;
  ScanningGroupInput: ScanningGroupInput;
  ScanningTask: ScanningTask;
  ScanningTaskActionInput: ScanningTaskActionInput;
  ScanningTaskInput: ScanningTaskInput;
  ScsiController: ScsiController;
  SearchInput: SearchInput;
  SecurityGroup: SecurityGroup;
  SemVer: Scalars['SemVer']['output'];
  SerialNumber: SerialNumber;
  Service: Service;
  Share: Share;
  SharePermission: SharePermission;
  Site: Site;
  SiteMutation: SiteMutation;
  SiteSourceMutation: SiteSourceMutation;
  SiteUserProfile: SiteUserProfile;
  SiteVulnerabilitiesResponse: SiteVulnerabilitiesResponse;
  SiteVulnerability: SiteVulnerability;
  SiteWebhook: SiteWebhook;
  SnmpInfo: SnmpInfo;
  Software: Software;
  SoftwareAggregatedCursorInput: SoftwareAggregatedCursorInput;
  SoftwareAggregatedCursorOrderInput: SoftwareAggregatedCursorOrderInput;
  SoftwareAggregatedPaginatedCursorInput: SoftwareAggregatedPaginatedCursorInput;
  SoftwareDetails: SoftwareDetails;
  SoftwareFilterGroupedInput: SoftwareFilterGroupedInput;
  SoftwareFilterInput: SoftwareFilterInput;
  SoftwareFiltersCondition: SoftwareFiltersCondition;
  SoftwaresResponse: SoftwaresResponse;
  SoundDevice: SoundDevice;
  Source: Source;
  SourceMutation: SourceMutation;
  SourcesFilterGroupedInput: SourcesFilterGroupedInput;
  SourcesFilterInput: SourcesFilterInput;
  SourcesFiltersCondition: SourcesFiltersCondition;
  SourcesPaginationInfo: SourcesPaginationInfo;
  SourcesPaginationInput: SourcesPaginationInput;
  SqlDatabase: SqlDatabase;
  SqlServer: SqlServer;
  SqlServerCluster: SqlServerCluster;
  SqlServerService: SqlServerService;
  String: Scalars['String']['output'];
  Subnet: Subnet;
  SystemDriver: SystemDriver;
  SystemEnclosure: SystemEnclosure;
  SystemProduct: SystemProduct;
  Tag: Tag;
  TapeDrive: TapeDrive;
  Time: Scalars['Time']['output'];
  TimeZone: Scalars['TimeZone']['output'];
  Timestamp: Scalars['Timestamp']['output'];
  TonerInformation: TonerInformation;
  Tpm: Tpm;
  URL: Scalars['URL']['output'];
  USCurrency: Scalars['USCurrency']['output'];
  UUID: Scalars['UUID']['output'];
  UnsignedFloat: Scalars['UnsignedFloat']['output'];
  UnsignedInt: Scalars['UnsignedInt']['output'];
  Upload: Scalars['Upload']['output'];
  Ups: Ups;
  UsbController: UsbController;
  UsbDevice: UsbDevice;
  User: User;
  UserInGroup: UserInGroup;
  UtcOffset: Scalars['UtcOffset']['output'];
  VCenter: VCenter;
  ValueDateInput: ValueDateInput;
  ValueStringInput: ValueStringInput;
  VersionDetails: VersionDetails;
  VirtualMachine: VirtualMachine;
  VirtualNetwork: VirtualNetwork;
  VmwareDatastoreClusterConfiguration: VmwareDatastoreClusterConfiguration;
  VmwareDatastoreClusterOverride: VmwareDatastoreClusterOverride;
  VmwareGuestSnapshot: VmwareGuestSnapshot;
  VmwareProductInfo: VmwareProductInfo;
  Void: Scalars['Void']['output'];
  Volume: Volume;
  VolumeGroup: VolumeGroup;
  Vulnerability: Vulnerability;
  VulnerabilityCause: VulnerabilityCause;
  VulnerabilityExploitability: VulnerabilityExploitability;
  VulnerabilityExploitabilityCISA: VulnerabilityExploitabilityCisa;
  VulnerabilityExploitabilityMSRC: VulnerabilityExploitabilityMsrc;
  VulnerabilityExploitabilityNVD: VulnerabilityExploitabilityNvd;
  VulnerabilityReference: VulnerabilityReference;
  Warranty: Warranty;
  WarrantyDetail: WarrantyDetail;
  Webhook: Omit<Webhook, 'authentication'> & { authentication?: Maybe<ResolversParentTypes['Authentication']> };
  WebhookMasterdata: WebhookMasterdata;
  WebhookResource: WebhookResource;
};

export interface AccountNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AccountNumber'], any> {
  name: 'AccountNumber';
}

export type ActiveDirectoryGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActiveDirectoryGroup'] = ResolversParentTypes['ActiveDirectoryGroup']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActiveDirectoryInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActiveDirectoryInfo'] = ResolversParentTypes['ActiveDirectoryInfo']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  managerId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ou?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregatedCursorResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregatedCursor'] = ResolversParentTypes['AggregatedCursor']> = {
  fieldName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AirWatchApplicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AirWatchApplication'] = ResolversParentTypes['AirWatchApplication']> = {
  applicationIdentifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  buildVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isManaged?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AirWatchDeviceResolvers<ContextType = any, ParentType extends ResolversParentTypes['AirWatchDevice'] = ResolversParentTypes['AirWatchDevice']> = {
  assetNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  availablePhysicalMemory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batteryLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  complianceStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  compromisedStatus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deviceFriendlyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enrollmentStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imei?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActivationLockEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isCloudBackupEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDeviceDNDEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDeviceLocatorEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isNetworkTethered?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isRoaming?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSupervised?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastComplianceCheckOn?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastCompromisedCheckOn?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastEnrolledOn?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  locationGroupName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mobileCountryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  osVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ownership?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  processorArchitecture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serialNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  simMobileCountryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  systemIntegrityProtectionEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  totalPhysicalMemory?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  udId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userEmailAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  virtualMemory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AirWatchOrganizationGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['AirWatchOrganizationGroup'] = ResolversParentTypes['AirWatchOrganizationGroup']> = {
  admins?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  devices?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lgLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locationGroupType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organizationGroupId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AntivirusResolvers<ContextType = any, ParentType extends ResolversParentTypes['Antivirus'] = ResolversParentTypes['Antivirus']> = {
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upToDate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppAccountMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppAccountMutation'] = ResolversParentTypes['AppAccountMutation']> = {
  addWebhook?: Resolver<Maybe<ResolversTypes['Webhook']>, ParentType, ContextType, Partial<AppAccountMutationAddWebhookArgs>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['AppIntegrationKind']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetBasicInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetBasicInfo'] = ResolversParentTypes['AssetBasicInfo']> = {
  assetUnique?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstSeen?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  fqdn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastActiveScan?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastIpScan?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastLsAgent?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastLsFallBack?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastLsPush?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastPerformanceScan?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastSccmScan?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastScheduled?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastSeen?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastTried?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastTriggered?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastWorkGroupScan?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lsAgentVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lsPushVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mac?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scanServer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scannerType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sccmServer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  typeGroup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userDomain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetCustomResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetCustom'] = ResolversParentTypes['AssetCustom']> = {
  barCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  branchOffice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  building?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dnsName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<Array<Maybe<ResolversTypes['Field']>>>, ParentType, ContextType>;
  firmwareVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ftpHeader?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hardwareVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  httpServer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  httpTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  httpsServer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastFullBackup?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastFullImage?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastPatched?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purchaseDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  serialNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  softwareVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sshServer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stateName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  warrantyDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetDetailsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetDetailsResponse'] = ResolversParentTypes['AssetDetailsResponse']> = {
  COM?: Resolver<Maybe<ResolversTypes['COM']>, ParentType, ContextType>;
  DCOM?: Resolver<Maybe<ResolversTypes['DCOM']>, ParentType, ContextType>;
  activeDirectoryGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActiveDirectoryGroup']>>>, ParentType, ContextType>;
  activeDirectoryInfo?: Resolver<Maybe<ResolversTypes['ActiveDirectoryInfo']>, ParentType, ContextType>;
  airWatchApplications?: Resolver<Maybe<Array<Maybe<ResolversTypes['AirWatchApplication']>>>, ParentType, ContextType>;
  airWatchDevice?: Resolver<Maybe<ResolversTypes['AirWatchDevice']>, ParentType, ContextType>;
  airWatchOrganizationGroup?: Resolver<Maybe<ResolversTypes['AirWatchOrganizationGroup']>, ParentType, ContextType>;
  antiviruses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Antivirus']>>>, ParentType, ContextType>;
  assetBasicInfo?: Resolver<Maybe<ResolversTypes['AssetBasicInfo']>, ParentType, ContextType>;
  assetCustom?: Resolver<Maybe<ResolversTypes['AssetCustom']>, ParentType, ContextType>;
  assetGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['AssetGroup']>>>, ParentType, ContextType>;
  autoruns?: Resolver<Maybe<Array<Maybe<ResolversTypes['Autorun']>>>, ParentType, ContextType>;
  baseboards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Baseboard']>>>, ParentType, ContextType>;
  batteries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Battery']>>>, ParentType, ContextType>;
  bioses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Bios']>>>, ParentType, ContextType>;
  bitLockerRecoveryKeys?: Resolver<Maybe<Array<Maybe<ResolversTypes['BitLockerRecoveryKey']>>>, ParentType, ContextType>;
  bootConfigurations?: Resolver<Maybe<Array<Maybe<ResolversTypes['BootConfiguration']>>>, ParentType, ContextType>;
  buses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Bus']>>>, ParentType, ContextType>;
  cdromDrives?: Resolver<Maybe<Array<Maybe<ResolversTypes['CdromDrive']>>>, ParentType, ContextType>;
  certificates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Certificate']>>>, ParentType, ContextType>;
  citrixGuestInfo?: Resolver<Maybe<ResolversTypes['CitrixGuestInfo']>, ParentType, ContextType>;
  citrixPoolInfo?: Resolver<Maybe<ResolversTypes['CitrixPoolInfo']>, ParentType, ContextType>;
  citrixXenServerInfo?: Resolver<Maybe<ResolversTypes['CitrixXenServerInfo']>, ParentType, ContextType>;
  cloudAssetCustom?: Resolver<Maybe<ResolversTypes['CloudAssetCustom']>, ParentType, ContextType>;
  codecs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Codec']>>>, ParentType, ContextType>;
  components?: Resolver<Maybe<Array<Maybe<ResolversTypes['Component']>>>, ParentType, ContextType>;
  computerSystems?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComputerSystem']>>>, ParentType, ContextType>;
  datastoreClusters?: Resolver<Maybe<Array<Maybe<ResolversTypes['DatastoreCluster']>>>, ParentType, ContextType>;
  datastores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Datastore']>>>, ParentType, ContextType>;
  desktops?: Resolver<Maybe<Array<Maybe<ResolversTypes['Desktop']>>>, ParentType, ContextType>;
  deviceActionResults?: Resolver<Maybe<Array<Maybe<ResolversTypes['DeviceActionResult']>>>, ParentType, ContextType>;
  deviceApplications?: Resolver<Maybe<Array<Maybe<ResolversTypes['DeviceApplication']>>>, ParentType, ContextType>;
  diskPartitions?: Resolver<Maybe<Array<Maybe<ResolversTypes['DiskPartition']>>>, ParentType, ContextType>;
  displayConfigurations?: Resolver<Maybe<Array<Maybe<ResolversTypes['DisplayConfiguration']>>>, ParentType, ContextType>;
  displayControllerConfigurations?: Resolver<Maybe<Array<Maybe<ResolversTypes['DisplayControllerConfiguration']>>>, ParentType, ContextType>;
  environments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Environment']>>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  esxiClusters?: Resolver<Maybe<Array<Maybe<ResolversTypes['EsxiCluster']>>>, ParentType, ContextType>;
  features?: Resolver<Maybe<Array<Maybe<ResolversTypes['Feature']>>>, ParentType, ContextType>;
  fileProperties?: Resolver<Maybe<Array<Maybe<ResolversTypes['FileProperty']>>>, ParentType, ContextType>;
  graphicsCards?: Resolver<Maybe<Array<Maybe<ResolversTypes['GraphicsCard']>>>, ParentType, ContextType>;
  hardDisks?: Resolver<Maybe<Array<Maybe<ResolversTypes['HardDisk']>>>, ParentType, ContextType>;
  hyperVGuests?: Resolver<Maybe<Array<Maybe<ResolversTypes['HyperVGuest']>>>, ParentType, ContextType>;
  ideControllers?: Resolver<Maybe<Array<Maybe<ResolversTypes['IdeController']>>>, ParentType, ContextType>;
  infraredDevices?: Resolver<Maybe<Array<Maybe<ResolversTypes['InfraredDevice']>>>, ParentType, ContextType>;
  installKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  installationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipLocation?: Resolver<Maybe<ResolversTypes['IpLocation']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyboards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Keyboard']>>>, ParentType, ContextType>;
  logicalDisks?: Resolver<Maybe<Array<Maybe<ResolversTypes['LogicalDisk']>>>, ParentType, ContextType>;
  mappedDrives?: Resolver<Maybe<Array<Maybe<ResolversTypes['MappedDrive']>>>, ParentType, ContextType>;
  memoryArrays?: Resolver<Maybe<Array<Maybe<ResolversTypes['MemoryArray']>>>, ParentType, ContextType>;
  memoryModules?: Resolver<Maybe<Array<Maybe<ResolversTypes['MemoryModule']>>>, ParentType, ContextType>;
  mobileDeviceManagement?: Resolver<Maybe<ResolversTypes['MobileDeviceManagement']>, ParentType, ContextType>;
  modems?: Resolver<Maybe<Array<Maybe<ResolversTypes['Modem']>>>, ParentType, ContextType>;
  monitorData?: Resolver<Maybe<ResolversTypes['MonitorData']>, ParentType, ContextType>;
  monitors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Monitor']>>>, ParentType, ContextType>;
  networkAdapters?: Resolver<Maybe<Array<Maybe<ResolversTypes['NetworkAdapter']>>>, ParentType, ContextType>;
  networkClients?: Resolver<Maybe<Array<Maybe<ResolversTypes['NetworkClient']>>>, ParentType, ContextType>;
  networks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Network']>>>, ParentType, ContextType>;
  onBoardDevices?: Resolver<Maybe<Array<Maybe<ResolversTypes['OnBoardDevice']>>>, ParentType, ContextType>;
  operatingSystem?: Resolver<Maybe<ResolversTypes['OperatingSystem']>, ParentType, ContextType>;
  operatingSystemRecoveryConfigurations?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperatingSystemRecoveryConfiguration']>>>, ParentType, ContextType>;
  otData?: Resolver<Maybe<ResolversTypes['OtData']>, ParentType, ContextType>;
  pageFiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['PageFile']>>>, ParentType, ContextType>;
  pciCards?: Resolver<Maybe<Array<Maybe<ResolversTypes['PciCard']>>>, ParentType, ContextType>;
  pcmciaControllers?: Resolver<Maybe<Array<Maybe<ResolversTypes['PcmciaController']>>>, ParentType, ContextType>;
  performanceInformation?: Resolver<Maybe<ResolversTypes['PerformanceInformation']>, ParentType, ContextType>;
  pnpSignedDrivers?: Resolver<Maybe<Array<Maybe<ResolversTypes['PnpSignedDriver']>>>, ParentType, ContextType>;
  pointingDevices?: Resolver<Maybe<Array<Maybe<ResolversTypes['PointingDevice']>>>, ParentType, ContextType>;
  portConnectors?: Resolver<Maybe<Array<Maybe<ResolversTypes['PortConnector']>>>, ParentType, ContextType>;
  printerDrivers?: Resolver<Maybe<Array<Maybe<ResolversTypes['PrinterDriver']>>>, ParentType, ContextType>;
  printerInfo?: Resolver<Maybe<ResolversTypes['PrinterInfo']>, ParentType, ContextType>;
  printers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Printer']>>>, ParentType, ContextType>;
  processes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Process']>>>, ParentType, ContextType>;
  processors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Processor']>>>, ParentType, ContextType>;
  quickFixEngineerings?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuickFixEngineering']>>>, ParentType, ContextType>;
  recognitionInfo?: Resolver<Maybe<ResolversTypes['RecognitionInfo']>, ParentType, ContextType>;
  reconciliations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reconciliation']>>>, ParentType, ContextType>;
  registries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Registry']>>>, ParentType, ContextType>;
  relations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Relation']>>>, ParentType, ContextType>;
  resourceGroup?: Resolver<Maybe<ResolversTypes['ResourceGroup']>, ParentType, ContextType>;
  scsiControllers?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScsiController']>>>, ParentType, ContextType>;
  securityGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['SecurityGroup']>>>, ParentType, ContextType>;
  serialNumbers?: Resolver<Maybe<Array<Maybe<ResolversTypes['SerialNumber']>>>, ParentType, ContextType>;
  services?: Resolver<Maybe<Array<Maybe<ResolversTypes['Service']>>>, ParentType, ContextType>;
  shares?: Resolver<Maybe<Array<Maybe<ResolversTypes['Share']>>>, ParentType, ContextType>;
  siteId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snmpInfos?: Resolver<Maybe<Array<Maybe<ResolversTypes['SnmpInfo']>>>, ParentType, ContextType>;
  softwares?: Resolver<Maybe<Array<Maybe<ResolversTypes['Software']>>>, ParentType, ContextType>;
  soundDevices?: Resolver<Maybe<Array<Maybe<ResolversTypes['SoundDevice']>>>, ParentType, ContextType>;
  sourceExternalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sqlServers?: Resolver<Maybe<Array<Maybe<ResolversTypes['SqlServer']>>>, ParentType, ContextType>;
  systemDrivers?: Resolver<Maybe<Array<Maybe<ResolversTypes['SystemDriver']>>>, ParentType, ContextType>;
  systemEnclosures?: Resolver<Maybe<Array<Maybe<ResolversTypes['SystemEnclosure']>>>, ParentType, ContextType>;
  systemProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['SystemProduct']>>>, ParentType, ContextType>;
  tapeDrives?: Resolver<Maybe<Array<Maybe<ResolversTypes['TapeDrive']>>>, ParentType, ContextType>;
  tenantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tonerInformation?: Resolver<Maybe<Array<Maybe<ResolversTypes['TonerInformation']>>>, ParentType, ContextType>;
  tpms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tpm']>>>, ParentType, ContextType>;
  ups?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ups']>>>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  usbControllers?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsbController']>>>, ParentType, ContextType>;
  usbDevices?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsbDevice']>>>, ParentType, ContextType>;
  userInGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserInGroup']>>>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  vCenter?: Resolver<Maybe<ResolversTypes['VCenter']>, ParentType, ContextType>;
  virtualMachine?: Resolver<Maybe<ResolversTypes['VirtualMachine']>, ParentType, ContextType>;
  virtualNetworks?: Resolver<Maybe<Array<Maybe<ResolversTypes['VirtualNetwork']>>>, ParentType, ContextType>;
  vmwareProductInfo?: Resolver<Maybe<ResolversTypes['VmwareProductInfo']>, ParentType, ContextType>;
  volumeGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['VolumeGroup']>>>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Volume']>>>, ParentType, ContextType>;
  vulnerabilities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vulnerability']>>>, ParentType, ContextType>;
  warranties?: Resolver<Maybe<Array<Maybe<ResolversTypes['Warranty']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetGroup'] = ResolversParentTypes['AssetGroup']> = {
  assetGroupKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dynamic?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetGroupsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetGroupsType'] = ResolversParentTypes['AssetGroupsType']> = {
  assetGroupKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetRelationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetRelationType'] = ResolversParentTypes['AssetRelationType']> = {
  default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  installKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  installationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reverseName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetWithSoftwareResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetWithSoftwareResponse'] = ResolversParentTypes['AssetWithSoftwareResponse']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['AssetsPagination']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetsPaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetsPagination'] = ResolversParentTypes['AssetsPagination']> = {
  current?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['AssetsPage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Authentication'] = ResolversParentTypes['Authentication']> = {
  __resolveType: TypeResolveFn<'BasicAuth', ParentType, ContextType>;
};

export type AuthorizedReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthorizedReport'] = ResolversParentTypes['AuthorizedReport']> = {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subcategory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorizedSiteAccountsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthorizedSiteAccounts'] = ResolversParentTypes['AuthorizedSiteAccounts']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  joinedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastTimeAccess?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorizedSitesResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthorizedSites'] = ResolversParentTypes['AuthorizedSites']> = {
  sites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Site']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AutorunResolvers<ContextType = any, ParentType extends ResolversParentTypes['Autorun'] = ResolversParentTypes['Autorun']> = {
  command?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  commandName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AwsAmiResolvers<ContextType = any, ParentType extends ResolversParentTypes['AwsAmi'] = ResolversParentTypes['AwsAmi']> = {
  architecture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enaSupport?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hypervisor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageLocation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageOwnerAlias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  public?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rootDeviceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rootDeviceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sriovNetSupport?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stateReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  virtualizationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AwsElasticGpuResolvers<ContextType = any, ParentType extends ResolversParentTypes['AwsElasticGpu'] = ResolversParentTypes['AwsElasticGpu']> = {
  health?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AwsHostResolvers<ContextType = any, ParentType extends ResolversParentTypes['AwsHost'] = ResolversParentTypes['AwsHost']> = {
  autoPlacement?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  availabilityZone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  availableCapacity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  availableVCpus?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cores?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hostId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instanceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  releaseTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  sockets?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalCapacity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalVCpus?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AwsProductCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AwsProductCode'] = ResolversParentTypes['AwsProductCode']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AwsSecurityGroupPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AwsSecurityGroupPermission'] = ResolversParentTypes['AwsSecurityGroupPermission']> = {
  fromPort?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ipProtocol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipRanges?: Resolver<Maybe<Array<Maybe<ResolversTypes['AwsSecurityGroupPermissionIpRange']>>>, ParentType, ContextType>;
  isInbound?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  toPort?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AwsSecurityGroupPermissionIpRangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AwsSecurityGroupPermissionIpRange'] = ResolversParentTypes['AwsSecurityGroupPermissionIpRange']> = {
  cidrIp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AwsSubnetIpv6CidrBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['AwsSubnetIpv6CidrBlock'] = ResolversParentTypes['AwsSubnetIpv6CidrBlock']> = {
  ipv6CidrBlock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AzureIpConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AzureIpConfiguration'] = ResolversParentTypes['AzureIpConfiguration']> = {
  fqdn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasAssignedLoadBalancer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  idleTimeoutInMinutes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  isPrimary?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  leafDomainLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privateIpAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privateIpAddressVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privateIpAlLocationMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicIpAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicIpAddressVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicIpAlLocationMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reverseFqdn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AzureNetworkSecurityGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['AzureNetworkSecurityGroup'] = ResolversParentTypes['AzureNetworkSecurityGroup']> = {
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  securityRules?: Resolver<Maybe<Array<Maybe<ResolversTypes['AzureSecurityRule']>>>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AzureSecurityRuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['AzureSecurityRule'] = ResolversParentTypes['AzureSecurityRule']> = {
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destinationAddressPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destinationPortRange?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  direction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  protocol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ruleType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceAddressPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourcePortRange?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AzureSubnetIpConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AzureSubnetIpConfiguration'] = ResolversParentTypes['AzureSubnetIpConfiguration']> = {
  fqdn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasAssignedLoadBalancer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  idleTimeoutInMinutes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  isPrimary?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  leafDomainLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privateIpAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privateIpAddressVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privateIpAlLocationMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicIpAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicIpAddressVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicIpAlLocationMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AzureVirtualMachineExtensionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AzureVirtualMachineExtension'] = ResolversParentTypes['AzureVirtualMachineExtension']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  typeHandlerVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseboardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Baseboard'] = ResolversParentTypes['Baseboard']> = {
  hostingBoard?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  locationInChassis?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serialNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicAuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicAuth'] = ResolversParentTypes['BasicAuth']> = {
  authenticationType?: Resolver<ResolversTypes['AuthenticationType'], ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BatteryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Battery'] = ResolversParentTypes['Battery']> = {
  availability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  capacityMultiplier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  chemistry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  designCapacity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  designVoltage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufactureDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxBatteryError?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  portable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  powerManagementCapabilities?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  powerManagementSupported?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  smartBatteryVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BiosResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bios'] = ResolversParentTypes['Bios']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  biosCharacteristics?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentLanguage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  installableLanguage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primaryBios?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  releaseDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  romSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  runTimeSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serialNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  smbiosBiosVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  smbiosMajorVersion?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  smbiosMinorVersion?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  smbiosPresent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BitLockerRecoveryKeyResolvers<ContextType = any, ParentType extends ResolversParentTypes['BitLockerRecoveryKey'] = ResolversParentTypes['BitLockerRecoveryKey']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BootConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['BootConfiguration'] = ResolversParentTypes['BootConfiguration']> = {
  bootDirectory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bootMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bootRomVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bootVolume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  configurationPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  scratchDirectory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tempDirectory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrandMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['BrandMetadata'] = ResolversParentTypes['BrandMetadata']> = {
  warrantyUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BusResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bus'] = ResolversParentTypes['Bus']> = {
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BusConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['BusConfig'] = ResolversParentTypes['BusConfig']> = {
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  isMainModule?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  slotNumber?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  slotWidth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  startIndex?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ByteScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Byte'], any> {
  name: 'Byte';
}

export type ComResolvers<ContextType = any, ParentType extends ResolversParentTypes['COM'] = ResolversParentTypes['COM']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CdromDriveResolvers<ContextType = any, ParentType extends ResolversParentTypes['CdromDrive'] = ResolversParentTypes['CdromDrive']> = {
  burnSupport?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burnUnderrunProtection?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cache?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  capability?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cdWrite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  drive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dvdWrite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firmware?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interConnect?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readDvd?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  writeStrategies?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CertificateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Certificate'] = ResolversParentTypes['Certificate']> = {
  archived?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  expirationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  friendlyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  intendedPurposes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issueBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issueTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serialNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  store?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbprint?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChromeOsActiveTimeRangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChromeOsActiveTimeRange'] = ResolversParentTypes['ChromeOsActiveTimeRange']> = {
  activeTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixApplianceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixAppliance'] = ResolversParentTypes['CitrixAppliance']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixConfiguration'] = ResolversParentTypes['CitrixConfiguration']> = {
  isCustomField?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixCrashDumpResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixCrashDump'] = ResolversParentTypes['CitrixCrashDump']> = {
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixExtraInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixExtraInfo'] = ResolversParentTypes['CitrixExtraInfo']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixGuestInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixGuestInfo'] = ResolversParentTypes['CitrixGuestInfo']> = {
  extraInfo?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixExtraInfo']>>>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  live?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  memorySize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numberOfCores?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  virtualBlockDevices?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixVirtualBlockDevice']>>>, ParentType, ContextType>;
  virtualInterfaces?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixVirtualInterface']>>>, ParentType, ContextType>;
  xenServerAssetKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixNetworkResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixNetwork'] = ResolversParentTypes['CitrixNetwork']> = {
  bridge?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mtu?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  serviceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixPhysicalBlockDeviceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixPhysicalBlockDevice'] = ResolversParentTypes['CitrixPhysicalBlockDevice']> = {
  currentlyAttached?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixPhysicalCpuResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixPhysicalCpu'] = ResolversParentTypes['CitrixPhysicalCpu']> = {
  family?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modelName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numberOfCpus?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  speed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stepping?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixPhysicalInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixPhysicalInterface'] = ResolversParentTypes['CitrixPhysicalInterface']> = {
  currentlyAttached?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  defaultGateway?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  disallowUnplug?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dnsServers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  ipAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  macAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mtu?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  speed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subnetMask?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vendor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixPoolInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixPoolInfo'] = ResolversParentTypes['CitrixPoolInfo']> = {
  appliances?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixAppliance']>>>, ParentType, ContextType>;
  citrixXenServerAssetKeys?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  highAvailability?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  highAvailabilityAllowOvercommit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  highAvailabilityOvercommitted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  livePatching?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  networks?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixNetwork']>>>, ParentType, ContextType>;
  otherConfigurations?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixConfiguration']>>>, ParentType, ContextType>;
  patches?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixPoolPatch']>>>, ParentType, ContextType>;
  policyNoVendorDevice?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  redoLog?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  restrictions?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixRestriction']>>>, ParentType, ContextType>;
  storages?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixPoolStorage']>>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templates?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  workloadBalancing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  workloadBalancingVerifyCert?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixPoolPatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixPoolPatch'] = ResolversParentTypes['CitrixPoolPatch']> = {
  afterApplyGuidance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applied?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixPoolStorageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixPoolStorage'] = ResolversParentTypes['CitrixPoolStorage']> = {
  clustered?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isToolsStorage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  localCache?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  used?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  virtualAllocation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixRestrictionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixRestriction'] = ResolversParentTypes['CitrixRestriction']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixVirtualBlockDeviceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixVirtualBlockDevice'] = ResolversParentTypes['CitrixVirtualBlockDevice']> = {
  bootable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  currentlyAttached?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  device?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  empty?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qosAlgorithmParameters?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qosAlgorithmType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qosSupportedAlgorithms?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  runtimeProperties?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statusCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  statusDetails?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storageLock?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unpluggable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  userDevice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  virtualDiskImages?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixVirtualDiskImage']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixVirtualDiskImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixVirtualDiskImage'] = ResolversParentTypes['CitrixVirtualDiskImage']> = {
  allowCaching?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isASnapshot?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  managed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  metaDataLatest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  missing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  onBoot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  shareable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  storageLock?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  used?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  virtualSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixVirtualInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixVirtualInterface'] = ResolversParentTypes['CitrixVirtualInterface']> = {
  currentlyAttached?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  defaultGateway?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  device?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  macAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  macAutoGenerated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mtu?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  qosAlgorithmType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qosAlgorithms?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statusCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  statusDetails?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixXenServerInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixXenServerInfo'] = ResolversParentTypes['CitrixXenServerInfo']> = {
  citrixPoolAssetKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crashDumps?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixCrashDump']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  extraInfo?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixExtraInfo']>>>, ParentType, ContextType>;
  hostName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isMaster?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  memoryFree?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  memoryOverhead?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  memorySize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  patches?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixXenServerPatch']>>>, ParentType, ContextType>;
  pcis?: Resolver<Maybe<Array<Maybe<ResolversTypes['PciCard']>>>, ParentType, ContextType>;
  physicalCpus?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixPhysicalCpu']>>>, ParentType, ContextType>;
  physicalInterfaces?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixPhysicalInterface']>>>, ParentType, ContextType>;
  schedulerPolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sslLegacy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  storages?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixXenServerStorage']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixXenServerPatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixXenServerPatch'] = ResolversParentTypes['CitrixXenServerPatch']> = {
  appliedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitrixXenServerStorageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitrixXenServerStorage'] = ResolversParentTypes['CitrixXenServerStorage']> = {
  clustered?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isToolsStorage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  localCache?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  physicalBlockDevices?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixPhysicalBlockDevice']>>>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  used?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  virtualAllocation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  virtualDiskImages?: Resolver<Maybe<Array<Maybe<ResolversTypes['CitrixVirtualDiskImage']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CloudAssetCustomResolvers<ContextType = any, ParentType extends ResolversParentTypes['CloudAssetCustom'] = ResolversParentTypes['CloudAssetCustom']> = {
  acquisitionType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costCenter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  industry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invoiceNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purchaseOrderDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  vendorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CodecResolvers<ContextType = any, ParentType extends ResolversParentTypes['Codec'] = ResolversParentTypes['Codec']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Component'] = ResolversParentTypes['Component']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComputerSystemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComputerSystem'] = ResolversParentTypes['ComputerSystem']> = {
  adminPasswordStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  automaticResetBootOption?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  automaticResetCapability?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  bootOptionOnLimit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bootOptionOnWatchDog?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bootRomSupported?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  chassisBootupState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentTimeZone?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  daylightInEffect?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  domainRole?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enableDaylightSavingsTime?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  frontPanelResetStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  infraredSupported?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  keyboardPasswordStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  networkServerModeEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  partOfDomain?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pauseAfterReset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  powerOnPasswordStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  powerState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  powerSupplyState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resetCapability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resetCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  resetLimit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serial?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  systemType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thermalState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wakeupType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CountryCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CountryCode'], any> {
  name: 'CountryCode';
}

export interface CuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cuid'], any> {
  name: 'Cuid';
}

export interface CurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Currency'], any> {
  name: 'Currency';
}

export type CursorOrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['CursorOrder'] = ResolversParentTypes['CursorOrder']> = {
  direction?: Resolver<Maybe<ResolversTypes['OrderDirection']>, ParentType, ContextType>;
  field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomFieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomField'] = ResolversParentTypes['CustomField']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  props?: Resolver<Maybe<ResolversTypes['CustomFieldProps']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['FieldType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomFieldPropsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomFieldProps'] = ResolversParentTypes['CustomFieldProps']> = {
  currencyType?: Resolver<Maybe<ResolversTypes['CurrencyType']>, ParentType, ContextType>;
  linkTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxNumericValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minNumericValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DcomResolvers<ContextType = any, ParentType extends ResolversParentTypes['DCOM'] = ResolversParentTypes['DCOM']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DID'], any> {
  name: 'DID';
}

export type DataCenterResolvers<ContextType = any, ParentType extends ResolversParentTypes['DataCenter'] = ResolversParentTypes['DataCenter']> = {
  dataCenterKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  internalKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatastoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Datastore'] = ResolversParentTypes['Datastore']> = {
  accessible?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  datastoreClusterKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  datastoreKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  internalKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maintenanceMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxFileSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxMemoryFileSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxPhysicalRdmFileSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxVirtualDiskCapacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxVirtualRdmFileSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  multipleHostAccess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uncommitted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatastoreClusterResolvers<ContextType = any, ParentType extends ResolversParentTypes['DatastoreCluster'] = ResolversParentTypes['DatastoreCluster']> = {
  capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  datastoreClusterConfigurations?: Resolver<Maybe<Array<Maybe<ResolversTypes['VmwareDatastoreClusterConfiguration']>>>, ParentType, ContextType>;
  datastoreClusterKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  datastoreClusterOverrides?: Resolver<Maybe<Array<Maybe<ResolversTypes['VmwareDatastoreClusterOverride']>>>, ParentType, ContextType>;
  defaultIntraVmAffinity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  defaultVmBehaviour?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  drsEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  freeSpace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  internalKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ioLatencyThreshold?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ioLoadBalanceEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ioLoadImbalanceThreshold?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  loadBalanceInterval?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minSpaceUtilizationDifference?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  spaceUtilizationThreshold?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DesktopResolvers<ContextType = any, ParentType extends ResolversParentTypes['Desktop'] = ResolversParentTypes['Desktop']> = {
  borderWidth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dragFullWindows?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  iconSpacing?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  iconTitleFaceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconTitleSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  iconTitleWrap?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  screenSaverActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  wallpaper?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wallpaperStretched?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  wallpaperTiled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceActionResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeviceActionResult'] = ResolversParentTypes['DeviceActionResult']> = {
  actionName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  actionState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastUpdatedDateTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceApplicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeviceApplication'] = ResolversParentTypes['DeviceApplication']> = {
  deviceCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  intuneId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sizeInByte?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DeweyDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DeweyDecimal'], any> {
  name: 'DeweyDecimal';
}

export type DiscoveryComponentResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiscoveryComponent'] = ResolversParentTypes['DiscoveryComponent']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publicKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scanningGroup?: Resolver<Maybe<ResolversTypes['ScanningGroup']>, ParentType, ContextType>;
  scanningTasks?: Resolver<Maybe<Array<Maybe<ResolversTypes['DiscoveryScanningTask']>>>, ParentType, ContextType>;
  siteId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sourceId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiscoveryCredentialResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiscoveryCredential'] = ResolversParentTypes['DiscoveryCredential']> = {
  default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  discoveryComponentIds?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parameters?: Resolver<Maybe<ResolversTypes['DiscoveryCredentialParameters']>, ParentType, ContextType>;
  types?: Resolver<Array<ResolversTypes['DiscoveryCredentialType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiscoveryCredentialPaginatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiscoveryCredentialPaginated'] = ResolversParentTypes['DiscoveryCredentialPaginated']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['DiscoveryCredential']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['Pagination']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiscoveryCredentialParametersResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiscoveryCredentialParameters'] = ResolversParentTypes['DiscoveryCredentialParameters']> = {
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snmpV3AuthType?: Resolver<Maybe<ResolversTypes['SnmpV3AuthType']>, ParentType, ContextType>;
  snmpV3Context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snmpV3Protocol?: Resolver<Maybe<ResolversTypes['SnmpV3Protocol']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiscoveryScanningTaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiscoveryScanningTask'] = ResolversParentTypes['DiscoveryScanningTask']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  triggers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiskPartitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiskPartition'] = ResolversParentTypes['DiskPartition']> = {
  available?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  blockSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bootPartition?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  bootable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  diskIndex?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fileSystem?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  mountedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numberOfBlocks?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  primaryPartition?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  startingOffset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  used?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DisplayConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['DisplayConfiguration'] = ResolversParentTypes['DisplayConfiguration']> = {
  bitsPerPel?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  displayFlags?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  displayFrequency?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  driverVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logPixels?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pelsHeight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pelsWidth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  specificationVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DisplayControllerConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['DisplayControllerConfiguration'] = ResolversParentTypes['DisplayControllerConfiguration']> = {
  bitsPerPixel?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  colorPlanes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  deviceEntriesInAColorTable?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  deviceSpecificPens?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  horizontalResolution?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  refreshRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  verticalResolution?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  videoMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Duration'], any> {
  name: 'Duration';
}

export type EditAssetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditAssetResponse'] = ResolversParentTypes['EditAssetResponse']> = {
  assetBasicInfo?: Resolver<Maybe<ResolversTypes['AssetBasicInfo']>, ParentType, ContextType>;
  assetCustom?: Resolver<Maybe<ResolversTypes['AssetCustom']>, ParentType, ContextType>;
  cloudAssetCustom?: Resolver<Maybe<ResolversTypes['CloudAssetCustom']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export type EnvironmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Environment'] = ResolversParentTypes['Environment']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variableValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = {
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EsxiClusterResolvers<ContextType = any, ParentType extends ResolversParentTypes['EsxiCluster'] = ResolversParentTypes['EsxiCluster']> = {
  effectiveCpu?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  effectiveMemory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numCpuCores?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numCpuThreads?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numEffectiveHosts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numHosts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalCpu?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalMemory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExportFilteredResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExportFilteredResponse'] = ResolversParentTypes['ExportFilteredResponse']> = {
  COM?: Resolver<Maybe<ResolversTypes['COM']>, ParentType, ContextType>;
  DCOM?: Resolver<Maybe<ResolversTypes['DCOM']>, ParentType, ContextType>;
  activeDirectoryGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActiveDirectoryGroup']>>>, ParentType, ContextType>;
  activeDirectoryInfo?: Resolver<Maybe<ResolversTypes['ActiveDirectoryInfo']>, ParentType, ContextType>;
  airWatchApplications?: Resolver<Maybe<Array<Maybe<ResolversTypes['AirWatchApplication']>>>, ParentType, ContextType>;
  airWatchDevice?: Resolver<Maybe<ResolversTypes['AirWatchDevice']>, ParentType, ContextType>;
  airWatchOrganizationGroup?: Resolver<Maybe<ResolversTypes['AirWatchOrganizationGroup']>, ParentType, ContextType>;
  antiviruses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Antivirus']>>>, ParentType, ContextType>;
  assetBasicInfo?: Resolver<Maybe<ResolversTypes['AssetBasicInfo']>, ParentType, ContextType>;
  assetCustom?: Resolver<Maybe<ResolversTypes['AssetCustom']>, ParentType, ContextType>;
  assetGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['AssetGroup']>>>, ParentType, ContextType>;
  autoruns?: Resolver<Maybe<Array<Maybe<ResolversTypes['Autorun']>>>, ParentType, ContextType>;
  baseboards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Baseboard']>>>, ParentType, ContextType>;
  batteries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Battery']>>>, ParentType, ContextType>;
  bioses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Bios']>>>, ParentType, ContextType>;
  bitLockerRecoveryKeys?: Resolver<Maybe<Array<Maybe<ResolversTypes['BitLockerRecoveryKey']>>>, ParentType, ContextType>;
  bootConfigurations?: Resolver<Maybe<Array<Maybe<ResolversTypes['BootConfiguration']>>>, ParentType, ContextType>;
  buses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Bus']>>>, ParentType, ContextType>;
  cdromDrives?: Resolver<Maybe<Array<Maybe<ResolversTypes['CdromDrive']>>>, ParentType, ContextType>;
  certificates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Certificate']>>>, ParentType, ContextType>;
  citrixGuestInfo?: Resolver<Maybe<ResolversTypes['CitrixGuestInfo']>, ParentType, ContextType>;
  citrixPoolInfo?: Resolver<Maybe<ResolversTypes['CitrixPoolInfo']>, ParentType, ContextType>;
  citrixXenServerInfo?: Resolver<Maybe<ResolversTypes['CitrixXenServerInfo']>, ParentType, ContextType>;
  cloudAssetCustom?: Resolver<Maybe<ResolversTypes['CloudAssetCustom']>, ParentType, ContextType>;
  codecs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Codec']>>>, ParentType, ContextType>;
  components?: Resolver<Maybe<Array<Maybe<ResolversTypes['Component']>>>, ParentType, ContextType>;
  computerSystems?: Resolver<Maybe<Array<Maybe<ResolversTypes['ComputerSystem']>>>, ParentType, ContextType>;
  datastoreClusters?: Resolver<Maybe<Array<Maybe<ResolversTypes['DatastoreCluster']>>>, ParentType, ContextType>;
  datastores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Datastore']>>>, ParentType, ContextType>;
  desktops?: Resolver<Maybe<Array<Maybe<ResolversTypes['Desktop']>>>, ParentType, ContextType>;
  deviceActionResults?: Resolver<Maybe<Array<Maybe<ResolversTypes['DeviceActionResult']>>>, ParentType, ContextType>;
  deviceApplications?: Resolver<Maybe<Array<Maybe<ResolversTypes['DeviceApplication']>>>, ParentType, ContextType>;
  diskPartitions?: Resolver<Maybe<Array<Maybe<ResolversTypes['DiskPartition']>>>, ParentType, ContextType>;
  displayConfigurations?: Resolver<Maybe<Array<Maybe<ResolversTypes['DisplayConfiguration']>>>, ParentType, ContextType>;
  displayControllerConfigurations?: Resolver<Maybe<Array<Maybe<ResolversTypes['DisplayControllerConfiguration']>>>, ParentType, ContextType>;
  environments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Environment']>>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  esxiClusters?: Resolver<Maybe<Array<Maybe<ResolversTypes['EsxiCluster']>>>, ParentType, ContextType>;
  exportId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  features?: Resolver<Maybe<Array<Maybe<ResolversTypes['Feature']>>>, ParentType, ContextType>;
  fileProperties?: Resolver<Maybe<Array<Maybe<ResolversTypes['FileProperty']>>>, ParentType, ContextType>;
  graphicsCards?: Resolver<Maybe<Array<Maybe<ResolversTypes['GraphicsCard']>>>, ParentType, ContextType>;
  hardDisks?: Resolver<Maybe<Array<Maybe<ResolversTypes['HardDisk']>>>, ParentType, ContextType>;
  hyperVGuests?: Resolver<Maybe<Array<Maybe<ResolversTypes['HyperVGuest']>>>, ParentType, ContextType>;
  ideControllers?: Resolver<Maybe<Array<Maybe<ResolversTypes['IdeController']>>>, ParentType, ContextType>;
  infraredDevices?: Resolver<Maybe<Array<Maybe<ResolversTypes['InfraredDevice']>>>, ParentType, ContextType>;
  installKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  installationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipLocation?: Resolver<Maybe<ResolversTypes['IpLocation']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyboards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Keyboard']>>>, ParentType, ContextType>;
  logicalDisks?: Resolver<Maybe<Array<Maybe<ResolversTypes['LogicalDisk']>>>, ParentType, ContextType>;
  mappedDrives?: Resolver<Maybe<Array<Maybe<ResolversTypes['MappedDrive']>>>, ParentType, ContextType>;
  memoryArrays?: Resolver<Maybe<Array<Maybe<ResolversTypes['MemoryArray']>>>, ParentType, ContextType>;
  memoryModules?: Resolver<Maybe<Array<Maybe<ResolversTypes['MemoryModule']>>>, ParentType, ContextType>;
  mobileDeviceManagement?: Resolver<Maybe<ResolversTypes['MobileDeviceManagement']>, ParentType, ContextType>;
  modems?: Resolver<Maybe<Array<Maybe<ResolversTypes['Modem']>>>, ParentType, ContextType>;
  monitorData?: Resolver<Maybe<ResolversTypes['MonitorData']>, ParentType, ContextType>;
  monitors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Monitor']>>>, ParentType, ContextType>;
  networkAdapters?: Resolver<Maybe<Array<Maybe<ResolversTypes['NetworkAdapter']>>>, ParentType, ContextType>;
  networkClients?: Resolver<Maybe<Array<Maybe<ResolversTypes['NetworkClient']>>>, ParentType, ContextType>;
  networks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Network']>>>, ParentType, ContextType>;
  onBoardDevices?: Resolver<Maybe<Array<Maybe<ResolversTypes['OnBoardDevice']>>>, ParentType, ContextType>;
  operatingSystem?: Resolver<Maybe<ResolversTypes['OperatingSystem']>, ParentType, ContextType>;
  operatingSystemRecoveryConfigurations?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperatingSystemRecoveryConfiguration']>>>, ParentType, ContextType>;
  otData?: Resolver<Maybe<ResolversTypes['OtData']>, ParentType, ContextType>;
  pageFiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['PageFile']>>>, ParentType, ContextType>;
  pciCards?: Resolver<Maybe<Array<Maybe<ResolversTypes['PciCard']>>>, ParentType, ContextType>;
  pcmciaControllers?: Resolver<Maybe<Array<Maybe<ResolversTypes['PcmciaController']>>>, ParentType, ContextType>;
  performanceInformation?: Resolver<Maybe<ResolversTypes['PerformanceInformation']>, ParentType, ContextType>;
  pnpSignedDrivers?: Resolver<Maybe<Array<Maybe<ResolversTypes['PnpSignedDriver']>>>, ParentType, ContextType>;
  pointingDevices?: Resolver<Maybe<Array<Maybe<ResolversTypes['PointingDevice']>>>, ParentType, ContextType>;
  portConnectors?: Resolver<Maybe<Array<Maybe<ResolversTypes['PortConnector']>>>, ParentType, ContextType>;
  printerDrivers?: Resolver<Maybe<Array<Maybe<ResolversTypes['PrinterDriver']>>>, ParentType, ContextType>;
  printerInfo?: Resolver<Maybe<ResolversTypes['PrinterInfo']>, ParentType, ContextType>;
  printers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Printer']>>>, ParentType, ContextType>;
  processes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Process']>>>, ParentType, ContextType>;
  processors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Processor']>>>, ParentType, ContextType>;
  quickFixEngineerings?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuickFixEngineering']>>>, ParentType, ContextType>;
  recognitionInfo?: Resolver<Maybe<ResolversTypes['RecognitionInfo']>, ParentType, ContextType>;
  reconciliations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reconciliation']>>>, ParentType, ContextType>;
  registries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Registry']>>>, ParentType, ContextType>;
  relations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Relation']>>>, ParentType, ContextType>;
  resourceGroup?: Resolver<Maybe<ResolversTypes['ResourceGroup']>, ParentType, ContextType>;
  scsiControllers?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScsiController']>>>, ParentType, ContextType>;
  securityGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['SecurityGroup']>>>, ParentType, ContextType>;
  serialNumbers?: Resolver<Maybe<Array<Maybe<ResolversTypes['SerialNumber']>>>, ParentType, ContextType>;
  services?: Resolver<Maybe<Array<Maybe<ResolversTypes['Service']>>>, ParentType, ContextType>;
  shares?: Resolver<Maybe<Array<Maybe<ResolversTypes['Share']>>>, ParentType, ContextType>;
  siteId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snmpInfos?: Resolver<Maybe<Array<Maybe<ResolversTypes['SnmpInfo']>>>, ParentType, ContextType>;
  softwares?: Resolver<Maybe<Array<Maybe<ResolversTypes['Software']>>>, ParentType, ContextType>;
  soundDevices?: Resolver<Maybe<Array<Maybe<ResolversTypes['SoundDevice']>>>, ParentType, ContextType>;
  sourceExternalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sqlServers?: Resolver<Maybe<Array<Maybe<ResolversTypes['SqlServer']>>>, ParentType, ContextType>;
  systemDrivers?: Resolver<Maybe<Array<Maybe<ResolversTypes['SystemDriver']>>>, ParentType, ContextType>;
  systemEnclosures?: Resolver<Maybe<Array<Maybe<ResolversTypes['SystemEnclosure']>>>, ParentType, ContextType>;
  systemProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['SystemProduct']>>>, ParentType, ContextType>;
  tapeDrives?: Resolver<Maybe<Array<Maybe<ResolversTypes['TapeDrive']>>>, ParentType, ContextType>;
  tenantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tonerInformation?: Resolver<Maybe<Array<Maybe<ResolversTypes['TonerInformation']>>>, ParentType, ContextType>;
  tpms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tpm']>>>, ParentType, ContextType>;
  ups?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ups']>>>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  usbControllers?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsbController']>>>, ParentType, ContextType>;
  usbDevices?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsbDevice']>>>, ParentType, ContextType>;
  userInGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserInGroup']>>>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  vCenter?: Resolver<Maybe<ResolversTypes['VCenter']>, ParentType, ContextType>;
  virtualMachine?: Resolver<Maybe<ResolversTypes['VirtualMachine']>, ParentType, ContextType>;
  virtualNetworks?: Resolver<Maybe<Array<Maybe<ResolversTypes['VirtualNetwork']>>>, ParentType, ContextType>;
  vmwareProductInfo?: Resolver<Maybe<ResolversTypes['VmwareProductInfo']>, ParentType, ContextType>;
  volumeGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['VolumeGroup']>>>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Volume']>>>, ParentType, ContextType>;
  vulnerabilities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vulnerability']>>>, ParentType, ContextType>;
  warranties?: Resolver<Maybe<Array<Maybe<ResolversTypes['Warranty']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExportStatusResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExportStatusResponse'] = ResolversParentTypes['ExportStatusResponse']> = {
  completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  exportId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requestedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExtendedInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtendedInfo'] = ResolversParentTypes['ExtendedInfo']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Feature'] = ResolversParentTypes['Feature']> = {
  addedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['Field'] = ResolversParentTypes['Field']> = {
  fieldKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilePropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileProperty'] = ResolversParentTypes['FileProperty']> = {
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  found?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastAccessed?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  pathfull?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FirmwareHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['FirmwareHistory'] = ResolversParentTypes['FirmwareHistory']> = {
  firmware?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GUID'], any> {
  name: 'GUID';
}

export type GraphicsCardResolvers<ContextType = any, ParentType extends ResolversParentTypes['GraphicsCard'] = ResolversParentTypes['GraphicsCard']> = {
  adapterCompatibility?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  adapterRam?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  availability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentBitsPerPixel?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currentHorizontalResolution?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currentNumberOfColors?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currentRefreshRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currentScanMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentVerticalResolution?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceSpecificPens?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  driverVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxRefreshRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minRefreshRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  monochrome?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  numberOfColorPlanes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subSystemManufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subSystemName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoArchitecture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoMemoryType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoModeDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupedAggSoftwareCursoredResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupedAggSoftwareCursoredResponse'] = ResolversParentTypes['GroupedAggSoftwareCursoredResponse']> = {
  current?: Resolver<Maybe<Array<Maybe<ResolversTypes['AggregatedCursor']>>>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['GroupedSoftware']>>>, ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  next?: Resolver<Maybe<Array<Maybe<ResolversTypes['AggregatedCursor']>>>, ParentType, ContextType>;
  order?: Resolver<Maybe<Array<Maybe<ResolversTypes['CursorOrder']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupedReleaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupedRelease'] = ResolversParentTypes['GroupedRelease']> = {
  release?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupedSoftwareResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupedSoftware'] = ResolversParentTypes['GroupedSoftware']> = {
  architectures?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  assets?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  iconPublisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconSoftware?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  installDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  installType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  labeledPublisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  labeledSoftware?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  lastSeen?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  marketVersions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  operatingSystems?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  publisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relatedSoftwareNames?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  release?: Resolver<Maybe<Array<Maybe<ResolversTypes['GroupedRelease']>>>, ParentType, ContextType>;
  shortVersions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  siteId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  software?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unspsc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  versions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HslScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSL'], any> {
  name: 'HSL';
}

export interface HslaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSLA'], any> {
  name: 'HSLA';
}

export type HardDiskResolvers<ContextType = any, ParentType extends ResolversParentTypes['HardDisk'] = ResolversParentTypes['HardDisk']> = {
  bytesPerSector?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firmwareRevision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hctl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hotplug?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  interfaceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  majmin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partitions?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sectorsPerTrack?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  serialNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalCylinders?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalHeads?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalSectors?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalTracks?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tracksPerCylinder?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HexColorCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColorCode'], any> {
  name: 'HexColorCode';
}

export interface HexadecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Hexadecimal'], any> {
  name: 'Hexadecimal';
}

export type HyperVGuestResolvers<ContextType = any, ParentType extends ResolversParentTypes['HyperVGuest'] = ResolversParentTypes['HyperVGuest']> = {
  enabledState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guestAssetKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  healthState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hostAssetKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  memorySize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  networks?: Resolver<Maybe<Array<Maybe<ResolversTypes['HyperVNetwork']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HyperVNetworkResolvers<ContextType = any, ParentType extends ResolversParentTypes['HyperVNetwork'] = ResolversParentTypes['HyperVNetwork']> = {
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  macAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface IbanScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IBAN'], any> {
  name: 'IBAN';
}

export interface IpScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IP'], any> {
  name: 'IP';
}

export interface IpcPatentScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPCPatent'], any> {
  name: 'IPCPatent';
}

export interface IPv4ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv4'], any> {
  name: 'IPv4';
}

export interface IPv6ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv6'], any> {
  name: 'IPv6';
}

export interface IsbnScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISBN'], any> {
  name: 'ISBN';
}

export interface Iso8601DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601Duration'], any> {
  name: 'ISO8601Duration';
}

export type IVersionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['IVersionResponse'] = ResolversParentTypes['IVersionResponse']> = {
  expiresOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  masterdata?: Resolver<Maybe<Array<Maybe<ResolversTypes['WebhookMasterdata']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resources?: Resolver<Array<Maybe<ResolversTypes['WebhookResource']>>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdeControllerResolvers<ContextType = any, ParentType extends ResolversParentTypes['IdeController'] = ResolversParentTypes['IdeController']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protocolSupported?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InfraredDeviceResolvers<ContextType = any, ParentType extends ResolversParentTypes['InfraredDevice'] = ResolversParentTypes['InfraredDevice']> = {
  availability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errorCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protocolSupported?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  userConfig?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstallationStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['InstallationState'] = ResolversParentTypes['InstallationState']> = {
  deletedOnDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  firstSyncCompletedOn?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  unlinkedOnDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntegrationsInstallationResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntegrationsInstallation'] = ResolversParentTypes['IntegrationsInstallation']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fqdn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  installationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastAvailable?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  linkStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  siteId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  syncServer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  syncServerStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalAssets?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['InstallType']>, ParentType, ContextType>;
  unlinkedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unlinkedOn?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IpLocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['IpLocation'] = ResolversParentTypes['IpLocation']> = {
  endIp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ipLocation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  packageShare?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  realEnd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  realStart?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shareKeyHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sharePassword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shareUserName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startIp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemsResponse'] = ResolversParentTypes['ItemsResponse']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['AssetsPagination']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export interface JwtScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JWT'], any> {
  name: 'JWT';
}

export type KbPatchesResolvers<ContextType = any, ParentType extends ResolversParentTypes['KbPatches'] = ResolversParentTypes['KbPatches']> = {
  kb?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeyboardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Keyboard'] = ResolversParentTypes['Keyboard']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  configManagerErrorCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  configManagerUserConfig?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numberOfFunctionKeys?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LccSubclassScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LCCSubclass'], any> {
  name: 'LCCSubclass';
}

export interface LatitudeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Latitude'], any> {
  name: 'Latitude';
}

export interface LocalDateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalDate'], any> {
  name: 'LocalDate';
}

export interface LocalEndTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalEndTime'], any> {
  name: 'LocalEndTime';
}

export interface LocalTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalTime'], any> {
  name: 'LocalTime';
}

export interface LocaleScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Locale'], any> {
  name: 'Locale';
}

export type LogicalDiskResolvers<ContextType = any, ParentType extends ResolversParentTypes['LogicalDisk'] = ResolversParentTypes['LogicalDisk']> = {
  cachingType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  compressed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  creationMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationSourceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  datastoreKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diskType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  driveType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSystem?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  freeSpace?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  isDiskEncryptionEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isWriteAcceleratorEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  mountedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  osType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storageAccountType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timeCreated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumeSerialNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LogicalRulesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LogicalRules'], any> {
  name: 'LogicalRules';
}

export type LogicalVolumeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LogicalVolume'] = ResolversParentTypes['LogicalVolume']> = {
  blockDevice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceMapperPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relatedGroup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export interface LongitudeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Longitude'], any> {
  name: 'Longitude';
}

export interface MacScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MAC'], any> {
  name: 'MAC';
}

export type MappedDriveResolvers<ContextType = any, ParentType extends ResolversParentTypes['MappedDrive'] = ResolversParentTypes['MappedDrive']> = {
  autoMounted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  driveLetter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  mountedFrom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remotePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Me'] = ResolversParentTypes['Me']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['SiteUserProfile']>>>, ParentType, ContextType>;
  surname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemoryArrayResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemoryArray'] = ResolversParentTypes['MemoryArray']> = {
  correctionError?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentInterleave?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxMemoryModuleSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numberOfSlots?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  supportedInterleave?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  supportedSpeeds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  supportedTypes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  use?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemoryModuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemoryModule'] = ResolversParentTypes['MemoryModule']> = {
  configuredClockSpeed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dataWidth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  formFactor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interleaveDatadepth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  interleavePosition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  locator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  positionInRow?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  serialNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  set?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalWidth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  typeDetail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  voltage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MobileDeviceManagementResolvers<ContextType = any, ParentType extends ResolversParentTypes['MobileDeviceManagement'] = ResolversParentTypes['MobileDeviceManagement']> = {
  azureADDeviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  container?: Resolver<Maybe<ResolversTypes['MobileDeviceManagementContainer']>, ParentType, ContextType>;
  deviceCategoryDisplayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceEnrollmentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceRegistrationState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  easActivationDateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  easDeviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  freeStorageSpaceInBytes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  imei?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  intuneId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAzureADRegistered?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isEasActivated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isEncrypted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSupervised?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastSyncDateTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  managedDeviceOwnerType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operatingSystem?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  osVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  safeMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serialNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subscriberCarrier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalStorageSpaceInBytes?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userDisplayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userPrincipalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  virtualSecureMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wiFiMacAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  windowsPE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MobileDeviceManagementContainerResolvers<ContextType = any, ParentType extends ResolversParentTypes['MobileDeviceManagementContainer'] = ResolversParentTypes['MobileDeviceManagementContainer']> = {
  appId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  intuneAccount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ModelMetadata'] = ResolversParentTypes['ModelMetadata']> = {
  endOfLifeDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  endOfSupportDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Modem'] = ResolversParentTypes['Modem']> = {
  attachedTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryselected?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalModem?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  maxBaudRateToPhone?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxBaudRateToSerialPort?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  providerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MonitorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Monitor'] = ResolversParentTypes['Monitor']> = {
  builtIn?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  coreImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  depth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  main?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  manufactureDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mirror?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  online?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pixelsPerXLogicalInch?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pixelsPerYLogicalInch?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pnpDeviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quartzExtreme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serialNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MonitorDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['MonitorData'] = ResolversParentTypes['MonitorData']> = {
  acFreq?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  acVoltage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aspectRatio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  averageWattUsage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  current?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diagonal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  displayPortVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayTech?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  energyClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasCamera?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasSpeakers?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasUsbHub?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hdType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hdmiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxResolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxWattUsage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numberOfDisplayPorts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numberOfDvi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numberOfHdmi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numberOfUsbUpstream?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numberOfVga?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  panel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refreshRate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  responseTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sdrPer1000U?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  standbyWattUsage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  usbTypeADownstream?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  usbUpstream?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wattPowerSave?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wattUsageWhenOff?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _blank?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  appAccount?: Resolver<Maybe<ResolversTypes['AppAccountMutation']>, ParentType, ContextType, Partial<MutationAppAccountArgs>>;
  assetsAPIVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  installStatusVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  integrationWebhooksAPIVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  integrationsAssetsAPIVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  integrationsExporterAPIVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  integrationsReportsAPIVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgSite?: Resolver<Maybe<ResolversTypes['OrgSiteMutation']>, ParentType, ContextType, RequireFields<MutationOrgSiteArgs, 'id'>>;
  organization?: Resolver<Maybe<ResolversTypes['OrganizationMutation']>, ParentType, ContextType, RequireFields<MutationOrganizationArgs, 'id'>>;
  site?: Resolver<Maybe<ResolversTypes['SiteMutation']>, ParentType, ContextType, RequireFields<MutationSiteArgs, 'id'>>;
};

export interface NegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeFloat'], any> {
  name: 'NegativeFloat';
}

export interface NegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeInt'], any> {
  name: 'NegativeInt';
}

export type NetworkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Network'] = ResolversParentTypes['Network']> = {
  appliedDnsServers?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attachTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  broadCast?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  configuration?: Resolver<Maybe<ResolversTypes['AzureIpConfiguration']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['NetworkConnection']>, ParentType, ContextType>;
  databasePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultGateway?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleteOnTermination?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dhcpEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dhcpServer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dnsDomain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dnsDomainSuffixSearchOrder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dnsEnabledForWinsResolution?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dnsHostName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dnsServerSearchOrder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dnsServers?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domainDnsRegistrationEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  fullDnsRegistrationEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  gatewayCostMetric?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iPv6Prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  internalDnsNameLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  internalDomainNameSuffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  internalFqdn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  internalKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipAddressV4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipAddressV6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipConnectionMetric?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ipEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ipFilterSecurityEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ipPortSecurityEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ipSecPermitIpProtocols?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipSecPermitTcpPorts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAcceleratedNetworkingEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isIpForwardingEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPrimaryNetworkInterface?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  linkEncap?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  macAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  master?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mtu?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  networkInterfaceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qDisc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requesterManaged?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serviceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serviceOrder?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sourceDestCheck?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  speed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subnetMask?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tcpIpNetbiosOptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  winsEnableLmHostsLookUp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  winsPrimaryserver?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  winsSecondaryServer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NetworkActionDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NetworkActionDefinition'] = ResolversParentTypes['NetworkActionDefinition']> = {
  targets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NetworkAdapterResolvers<ContextType = any, ParentType extends ResolversParentTypes['NetworkAdapter'] = ResolversParentTypes['NetworkAdapter']> = {
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  macAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  netConnectionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  netEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  speed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NetworkClientResolvers<ContextType = any, ParentType extends ResolversParentTypes['NetworkClient'] = ResolversParentTypes['NetworkClient']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NetworkConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NetworkConnection'] = ResolversParentTypes['NetworkConnection']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastSeen?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NetworkVisibilityConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['NetworkVisibilityConfig'] = ResolversParentTypes['NetworkVisibilityConfig']> = {
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface NonEmptyStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
  name: 'NonEmptyString';
}

export interface NonNegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeFloat'], any> {
  name: 'NonNegativeFloat';
}

export interface NonNegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeInt'], any> {
  name: 'NonNegativeInt';
}

export interface NonPositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveFloat'], any> {
  name: 'NonPositiveFloat';
}

export interface NonPositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveInt'], any> {
  name: 'NonPositiveInt';
}

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectID'], any> {
  name: 'ObjectID';
}

export type OnBoardDeviceResolvers<ContextType = any, ParentType extends ResolversParentTypes['OnBoardDevice'] = ResolversParentTypes['OnBoardDevice']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OperatingSystemResolvers<ContextType = any, ParentType extends ResolversParentTypes['OperatingSystem'] = ResolversParentTypes['OperatingSystem']> = {
  activeTimeRanges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ChromeOsActiveTimeRange']>>>, ParentType, ContextType>;
  annotatedAssetId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  annotatedLocation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  annotatedUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bootStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  buildNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  buildRevNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  buildType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  codeset?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentTimezone?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dataExecutionPrevention32BitApplications?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dataExecutionPreventionAvailable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dataExecutionPreventionDrivers?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dataExecutionPreventionSupportPolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  debug?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  encryptionLevel?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foregroundApplicationBoost?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hostName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  installDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastEnrollmentTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  maxProcessMemorySize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  meid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numberOfLicensedUsers?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orgUnitPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  osDiskSizeInMb?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  osProductSuite?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  osType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  otherTypeDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registeredUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secureVirtualMemory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serialNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  servicePack?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  servicePackMajorVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  servicePackMinorVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sizeStoredInPagingFiles?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suiteMask?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  supportEndDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  systemDevice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  systemDrive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalVirtualMemorySize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalVisibleMemorySize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  willAutoRenew?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  windowsDirectory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  x86x64Kernel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OperatingSystemDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OperatingSystemDetails'] = ResolversParentTypes['OperatingSystemDetails']> = {
  architectures?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  earliestInstallDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  editions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  operatingSystem?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relatedSoftwareNames?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  releaseInfo?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  totalInstallations?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalVersions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  versionsDetails?: Resolver<Maybe<Array<Maybe<ResolversTypes['VersionDetails']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OperatingSystemRecoveryConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['OperatingSystemRecoveryConfiguration'] = ResolversParentTypes['OperatingSystemRecoveryConfiguration']> = {
  autoReboot?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  debugFilepath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  debugInfoType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kernelDumpOnly?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  miniDumpDirectory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  overwriteExistingDebugFile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sendAdminAlert?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  writeDebugInfo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  writeToSystemlog?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrgSiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgSite'] = ResolversParentTypes['OrgSite']> = {
  assetDetails?: Resolver<Maybe<ResolversTypes['AssetDetailsResponse']>, ParentType, ContextType, RequireFields<OrgSiteAssetDetailsArgs, 'key'>>;
  assetResources?: Resolver<Maybe<ResolversTypes['ItemsResponse']>, ParentType, ContextType, RequireFields<OrgSiteAssetResourcesArgs, 'fields'>>;
  customFields?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomField']>>>, ParentType, ContextType>;
  discoveryCredentials?: Resolver<Maybe<ResolversTypes['DiscoveryCredentialPaginated']>, ParentType, ContextType, Partial<OrgSiteDiscoveryCredentialsArgs>>;
  exportStatus?: Resolver<Maybe<ResolversTypes['ExportStatusResponse']>, ParentType, ContextType, RequireFields<OrgSiteExportStatusArgs, 'exportId'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reportExecutionResults?: Resolver<Maybe<ResolversTypes['ReportsResultsResponse']>, ParentType, ContextType, RequireFields<OrgSiteReportExecutionResultsArgs, 'reportId'>>;
  reportFullExport?: Resolver<Maybe<ResolversTypes['ReportsFullExportResponse']>, ParentType, ContextType, RequireFields<OrgSiteReportFullExportArgs, 'reportId'>>;
  reportFullExportStatus?: Resolver<Maybe<ResolversTypes['ReportsFullExportStatusResponse']>, ParentType, ContextType, RequireFields<OrgSiteReportFullExportStatusArgs, 'exportId' | 'reportId'>>;
  reports?: Resolver<Maybe<ResolversTypes['ReportsResponse']>, ParentType, ContextType, Partial<OrgSiteReportsArgs>>;
  scanningGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScanningGroup']>>>, ParentType, ContextType>;
  scanningTasks?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScanningTask']>>>, ParentType, ContextType>;
  softwareListWithCursor?: Resolver<Maybe<ResolversTypes['GroupedAggSoftwareCursoredResponse']>, ParentType, ContextType, Partial<OrgSiteSoftwareListWithCursorArgs>>;
  sources?: Resolver<Maybe<ResolversTypes['PaginatedSourcesResponse']>, ParentType, ContextType, Partial<OrgSiteSourcesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrgSiteCreatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgSiteCreated'] = ResolversParentTypes['OrgSiteCreated']> = {
  clientId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clientSecret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrgSiteMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgSiteMutation'] = ResolversParentTypes['OrgSiteMutation']> = {
  createCustomField?: Resolver<Maybe<ResolversTypes['CustomField']>, ParentType, ContextType, RequireFields<OrgSiteMutationCreateCustomFieldArgs, 'field'>>;
  createDiscoveryCredential?: Resolver<Maybe<ResolversTypes['DiscoveryCredential']>, ParentType, ContextType, Partial<OrgSiteMutationCreateDiscoveryCredentialArgs>>;
  createScanningGroup?: Resolver<Maybe<ResolversTypes['ScanningGroup']>, ParentType, ContextType, Partial<OrgSiteMutationCreateScanningGroupArgs>>;
  createScanningTask?: Resolver<Maybe<ResolversTypes['ScanningTask']>, ParentType, ContextType, Partial<OrgSiteMutationCreateScanningTaskArgs>>;
  createWebhook?: Resolver<Maybe<ResolversTypes['SiteWebhook']>, ParentType, ContextType, Partial<OrgSiteMutationCreateWebhookArgs>>;
  deleteAssets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType, RequireFields<OrgSiteMutationDeleteAssetsArgs, 'keys'>>;
  deleteCustomField?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<OrgSiteMutationDeleteCustomFieldArgs, 'key'>>;
  deleteDiscoveryCredential?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<OrgSiteMutationDeleteDiscoveryCredentialArgs, 'id'>>;
  deleteNetworkDiscoveryAssets?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  editAsset?: Resolver<Maybe<ResolversTypes['EditAssetResponse']>, ParentType, ContextType, RequireFields<OrgSiteMutationEditAssetArgs, 'key'>>;
  exportFilteredAssets?: Resolver<Maybe<ResolversTypes['ExportFilteredResponse']>, ParentType, ContextType, Partial<OrgSiteMutationExportFilteredAssetsArgs>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  linkingCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reportSetSchedule?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<OrgSiteMutationReportSetScheduleArgs, 'reportId'>>;
  source?: Resolver<Maybe<ResolversTypes['SourceMutation']>, ParentType, ContextType, RequireFields<OrgSiteMutationSourceArgs, 'id'>>;
  unlink?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType, RequireFields<OrgSiteMutationUnlinkArgs, 'sourceIds'>>;
  updateScanningGroup?: Resolver<Maybe<ResolversTypes['ScanningGroup']>, ParentType, ContextType, RequireFields<OrgSiteMutationUpdateScanningGroupArgs, 'id'>>;
  updateScanningTask?: Resolver<Maybe<ResolversTypes['ScanningTask']>, ParentType, ContextType, RequireFields<OrgSiteMutationUpdateScanningTaskArgs, 'id'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationMutation'] = ResolversParentTypes['OrganizationMutation']> = {
  createOrgSite?: Resolver<Maybe<ResolversTypes['OrgSiteCreated']>, ParentType, ContextType>;
  deleteOrgSite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<OrganizationMutationDeleteOrgSiteArgs, 'id'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rotateOrgSiteCredentials?: Resolver<Maybe<ResolversTypes['RotateOrgSiteCredentials']>, ParentType, ContextType, RequireFields<OrganizationMutationRotateOrgSiteCredentialsArgs, 'id'>>;
  rotateOrganizationCredentials?: Resolver<Maybe<ResolversTypes['RotateOrganizationCredentials']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OsMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['OsMetadata'] = ResolversParentTypes['OsMetadata']> = {
  build?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endOfLifeDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  endOfSupportDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OtDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['OtData'] = ResolversParentTypes['OtData']> = {
  busConfig?: Resolver<Maybe<Array<Maybe<ResolversTypes['BusConfig']>>>, ParentType, ContextType>;
  extendedInfo?: Resolver<Maybe<Array<Maybe<ResolversTypes['ExtendedInfo']>>>, ParentType, ContextType>;
  firmwareHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['FirmwareHistory']>>>, ParentType, ContextType>;
  firmwareVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isMainModule?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isNetworkNode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  moduleType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  routePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageFile'] = ResolversParentTypes['PageFile']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  initialSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maximumSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedSourcesResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedSourcesResponse'] = ResolversParentTypes['PaginatedSourcesResponse']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Source']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['SourcesPaginationInfo']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = {
  current?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PciCardResolvers<ContextType = any, ParentType extends ResolversParentTypes['PciCard'] = ResolversParentTypes['PciCard']> = {
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subSystemManufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subSystemName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PcmciaControllerResolvers<ContextType = any, ParentType extends ResolversParentTypes['PcmciaController'] = ResolversParentTypes['PcmciaController']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errorCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protocolSupported?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userConfig?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PerformanceInformationResolvers<ContextType = any, ParentType extends ResolversParentTypes['PerformanceInformation'] = ResolversParentTypes['PerformanceInformation']> = {
  gamingGraphicsScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  graphicsScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  memoryScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  primaryHardDiskScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  processorScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface PhoneNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PhoneNumber'], any> {
  name: 'PhoneNumber';
}

export type PhysicalVolumeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PhysicalVolume'] = ResolversParentTypes['PhysicalVolume']> = {
  free?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relatedGroup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  used?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PnpSignedDriverResolvers<ContextType = any, ParentType extends ResolversParentTypes['PnpSignedDriver'] = ResolversParentTypes['PnpSignedDriver']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  driverProviderName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  driverVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  friendlyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hardwareId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pdo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PointingDeviceResolvers<ContextType = any, ParentType extends ResolversParentTypes['PointingDevice'] = ResolversParentTypes['PointingDevice']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceInterface?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numberOfButtons?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pointingType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface PortScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Port'], any> {
  name: 'Port';
}

export type PortConnectorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PortConnector'] = ResolversParentTypes['PortConnector']> = {
  availability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  configManagerErrorCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  configManagerUserConfig?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  connectorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalReferenceDesignator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  internalReferenceDesignator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isBinary?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  maxBaudRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxSpeed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maximumInputBufferSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maximumOutputBufferSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  osAutoDiscovered?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  portConnectorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  powerManagementSupported?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  protocolSupported?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface PositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveFloat'], any> {
  name: 'PositiveFloat';
}

export interface PositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveInt'], any> {
  name: 'PositiveInt';
}

export interface PostalCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PostalCode'], any> {
  name: 'PostalCode';
}

export type PrinterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Printer'] = ResolversParentTypes['Printer']> = {
  capabilityDescriptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enableBidi?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  horizontalResolution?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  local?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  portName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shareName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  verticalResolution?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrinterDriverResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrinterDriver'] = ResolversParentTypes['PrinterDriver']> = {
  driverPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  driverVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hardwareId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  printProcessor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrinterInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrinterInfo'] = ResolversParentTypes['PrinterInfo']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalColorPages?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalMonoPages?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProcessResolvers<ContextType = any, ParentType extends ResolversParentTypes['Process'] = ResolversParentTypes['Process']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  commandLine?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  executablePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  threadCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProcessorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Processor'] = ResolversParentTypes['Processor']> = {
  addressSizes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressWidth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  architecture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  availability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bogoMips?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  byteOrder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentClockSpeed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currentSpeed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dataWidth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalClock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  family?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l1dCacheSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l1iCacheSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2CacheSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2CacheSpeed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  l3CacheSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxClockSpeed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minimumClockSpeed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modelType?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numberOfCores?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numberOfLogicalProcessors?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opModes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  processorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  revision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serialNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  socket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stepping?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  threadsPerCore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upgradeMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  virtualization?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  voltage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  voltageCaps?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _blank?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  assetsAPIVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorizedSites?: Resolver<Maybe<ResolversTypes['AuthorizedSites']>, ParentType, ContextType>;
  getVersions?: Resolver<Array<Maybe<ResolversTypes['IVersionResponse']>>, ParentType, ContextType>;
  getWebhookResources?: Resolver<Maybe<Array<Maybe<ResolversTypes['WebhookResource']>>>, ParentType, ContextType, RequireFields<QueryGetWebhookResourcesArgs, 'version'>>;
  installStatusVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  integrationWebhooksAPIVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  integrationsAssetsAPIVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  integrationsExporterAPIVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  integrationsReportsAPIVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType>;
  orgSite?: Resolver<Maybe<ResolversTypes['OrgSite']>, ParentType, ContextType, RequireFields<QueryOrgSiteArgs, 'id'>>;
  scanningVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType, RequireFields<QuerySiteArgs, 'id'>>;
};

export type QuickFixEngineeringResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuickFixEngineering'] = ResolversParentTypes['QuickFixEngineering']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hotFixId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  installedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  installedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RgbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGB'], any> {
  name: 'RGB';
}

export interface RgbaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBA'], any> {
  name: 'RGBA';
}

export type RecognitionInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecognitionInfo'] = ResolversParentTypes['RecognitionInfo']> = {
  brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  brandMetadata?: Resolver<Maybe<ResolversTypes['BrandMetadata']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modelMetadata?: Resolver<Maybe<ResolversTypes['ModelMetadata']>, ParentType, ContextType>;
  osMetadata?: Resolver<Maybe<ResolversTypes['OsMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReconcileFieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReconcileField'] = ResolversParentTypes['ReconcileField']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReconciliationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reconciliation'] = ResolversParentTypes['Reconciliation']> = {
  confidence?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReconcileField']>>>, ParentType, ContextType>;
  lastUpdate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  rule?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegistryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Registry'] = ResolversParentTypes['Registry']> = {
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  registryPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valueName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RelationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Relation'] = ResolversParentTypes['Relation']> = {
  childAssetKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentAssetKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReleaseInfoScannedSoftwareResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReleaseInfoScannedSoftware'] = ResolversParentTypes['ReleaseInfoScannedSoftware']> = {
  release?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scannedSoftwareName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportExecutionStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportExecutionStatus'] = ResolversParentTypes['ReportExecutionStatus']> = {
  currentResultCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  executionFinishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  isPaused?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nextExecutionAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportItem'] = ResolversParentTypes['ReportItem']> = {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  executionStatus?: Resolver<Maybe<ResolversTypes['ReportExecutionStatus']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subcategory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportsExecutionStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportsExecutionStatus'] = ResolversParentTypes['ReportsExecutionStatus']> = {
  currentResultCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  executionFinishedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPaused?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nextExecutionAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportsFullExportResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportsFullExportResponse'] = ResolversParentTypes['ReportsFullExportResponse']> = {
  attemptsLeft?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  exportId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportsFullExportStatusResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportsFullExportStatusResponse'] = ResolversParentTypes['ReportsFullExportStatusResponse']> = {
  completedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requestedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportsResponse'] = ResolversParentTypes['ReportsResponse']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReportItem']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['AssetsPagination']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportsResultsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportsResultsResponse'] = ResolversParentTypes['ReportsResultsResponse']> = {
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResourceGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceGroup'] = ResolversParentTypes['ResourceGroup']> = {
  assetKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  networkSecurityGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['AzureNetworkSecurityGroup']>>>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subscriptionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RotateOrgSiteCredentialsResolvers<ContextType = any, ParentType extends ResolversParentTypes['RotateOrgSiteCredentials'] = ResolversParentTypes['RotateOrgSiteCredentials']> = {
  clientId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clientSecret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RotateOrganizationCredentialsResolvers<ContextType = any, ParentType extends ResolversParentTypes['RotateOrganizationCredentials'] = ResolversParentTypes['RotateOrganizationCredentials']> = {
  clientId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clientSecret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RoutingNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RoutingNumber'], any> {
  name: 'RoutingNumber';
}

export interface SafeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SafeInt'], any> {
  name: 'SafeInt';
}

export type ScanningActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScanningAction'] = ResolversParentTypes['ScanningAction']> = {
  components?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScanningGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScanningGroup'] = ResolversParentTypes['ScanningGroup']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  maintenanceWindow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  networkVisibility?: Resolver<Maybe<ResolversTypes['NetworkVisibilityConfig']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScanningTaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScanningTask'] = ResolversParentTypes['ScanningTask']> = {
  actions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScanningAction']>>>, ParentType, ContextType>;
  discoveryCredentialIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  networkActionDefinition?: Resolver<Maybe<ResolversTypes['NetworkActionDefinition']>, ParentType, ContextType>;
  triggers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScsiControllerResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScsiController'] = ResolversParentTypes['ScsiController']> = {
  availability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protocolSupported?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SecurityGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['SecurityGroup'] = ResolversParentTypes['SecurityGroup']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  groupId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['AwsSecurityGroupPermission']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface SemVerScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SemVer'], any> {
  name: 'SemVer';
}

export type SerialNumberResolvers<ContextType = any, ParentType extends ResolversParentTypes['SerialNumber'] = ResolversParentTypes['SerialNumber']> = {
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productIdentity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  pathName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShareResolvers<ContextType = any, ParentType extends ResolversParentTypes['Share'] = ResolversParentTypes['Share']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sharePermissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['SharePermission']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SharePermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SharePermission'] = ResolversParentTypes['SharePermission']> = {
  denyAccess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  fullAccess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  readAccess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  trustee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  writeAccess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Site'] = ResolversParentTypes['Site']> = {
  accounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['AuthorizedSiteAccounts']>>>, ParentType, ContextType>;
  allInstallations?: Resolver<Maybe<Array<Maybe<ResolversTypes['IntegrationsInstallation']>>>, ParentType, ContextType>;
  assetDetails?: Resolver<Maybe<ResolversTypes['AssetDetailsResponse']>, ParentType, ContextType, RequireFields<SiteAssetDetailsArgs, 'key'>>;
  assetGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['AssetGroupsType']>>>, ParentType, ContextType>;
  assetResources?: Resolver<Maybe<ResolversTypes['ItemsResponse']>, ParentType, ContextType, RequireFields<SiteAssetResourcesArgs, 'fields'>>;
  assetTypes?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  assetsWithSoftware?: Resolver<Maybe<ResolversTypes['AssetWithSoftwareResponse']>, ParentType, ContextType, RequireFields<SiteAssetsWithSoftwareArgs, 'fields' | 'publisher' | 'software'>>;
  assetsWithoutSoftware?: Resolver<Maybe<ResolversTypes['AssetWithSoftwareResponse']>, ParentType, ContextType, RequireFields<SiteAssetsWithoutSoftwareArgs, 'fields' | 'publisher' | 'software'>>;
  authorizedReports?: Resolver<Maybe<Array<Maybe<ResolversTypes['AuthorizedReport']>>>, ParentType, ContextType>;
  brandingName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countSoftwareAggList?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<SiteCountSoftwareAggListArgs>>;
  customFields?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomField']>>>, ParentType, ContextType>;
  exportStatus?: Resolver<Maybe<ResolversTypes['ExportStatusResponse']>, ParentType, ContextType, RequireFields<SiteExportStatusArgs, 'exportId'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDashboardIntegrationEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<SiteIsDashboardIntegrationEnabledArgs, 'integrationId'>>;
  kbPatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['KbPatches']>>>, ParentType, ContextType, RequireFields<SiteKbPatchesArgs, 'cve'>>;
  logoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relations?: Resolver<Maybe<Array<Maybe<ResolversTypes['AssetRelationType']>>>, ParentType, ContextType>;
  reportExecutionResults?: Resolver<Maybe<ResolversTypes['ReportsResultsResponse']>, ParentType, ContextType, RequireFields<SiteReportExecutionResultsArgs, 'reportId'>>;
  reportExecutionStatus?: Resolver<Maybe<ResolversTypes['ReportsExecutionStatus']>, ParentType, ContextType, RequireFields<SiteReportExecutionStatusArgs, 'reportId'>>;
  reportFullExport?: Resolver<Maybe<ResolversTypes['ReportsFullExportResponse']>, ParentType, ContextType, RequireFields<SiteReportFullExportArgs, 'reportId'>>;
  reportFullExportStatus?: Resolver<Maybe<ResolversTypes['ReportsFullExportStatusResponse']>, ParentType, ContextType, RequireFields<SiteReportFullExportStatusArgs, 'exportId' | 'reportId'>>;
  softwareDetailsBySoftwareName?: Resolver<Maybe<ResolversTypes['SoftwareDetails']>, ParentType, ContextType, RequireFields<SiteSoftwareDetailsBySoftwareNameArgs, 'publisher' | 'software'>>;
  softwareListWithCursor?: Resolver<Maybe<ResolversTypes['GroupedAggSoftwareCursoredResponse']>, ParentType, ContextType, Partial<SiteSoftwareListWithCursorArgs>>;
  softwares?: Resolver<Maybe<ResolversTypes['SoftwaresResponse']>, ParentType, ContextType, RequireFields<SiteSoftwaresArgs, 'fields' | 'key'>>;
  vulnerabilities?: Resolver<Maybe<ResolversTypes['SiteVulnerabilitiesResponse']>, ParentType, ContextType, Partial<SiteVulnerabilitiesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteMutation'] = ResolversParentTypes['SiteMutation']> = {
  createCustomField?: Resolver<Maybe<ResolversTypes['CustomField']>, ParentType, ContextType, RequireFields<SiteMutationCreateCustomFieldArgs, 'field'>>;
  deleteAssets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType, RequireFields<SiteMutationDeleteAssetsArgs, 'keys'>>;
  deleteCustomField?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<SiteMutationDeleteCustomFieldArgs, 'key'>>;
  deleteNetworkDiscoveryAssets?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  editAsset?: Resolver<Maybe<ResolversTypes['EditAssetResponse']>, ParentType, ContextType, RequireFields<SiteMutationEditAssetArgs, 'key'>>;
  exportFilteredAssets?: Resolver<Maybe<ResolversTypes['ExportFilteredResponse']>, ParentType, ContextType, Partial<SiteMutationExportFilteredAssetsArgs>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['SiteSourceMutation']>, ParentType, ContextType, RequireFields<SiteMutationSourceArgs, 'id'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSourceMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteSourceMutation'] = ResolversParentTypes['SiteSourceMutation']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  scanNow?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  siteId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteUserProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteUserProfile'] = ResolversParentTypes['SiteUserProfile']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteVulnerabilitiesResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteVulnerabilitiesResponse'] = ResolversParentTypes['SiteVulnerabilitiesResponse']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['SiteVulnerability']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['AssetsPagination']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteVulnerabilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteVulnerability'] = ResolversParentTypes['SiteVulnerability']> = {
  assetKeys?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  attackComplexity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attackVector?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  availabilityImpact?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cause?: Resolver<Maybe<ResolversTypes['VulnerabilityCause']>, ParentType, ContextType>;
  confidentiality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exploitability?: Resolver<Maybe<ResolversTypes['VulnerabilityExploitability']>, ParentType, ContextType>;
  integrity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  patchable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  privilegeRequired?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  references?: Resolver<Maybe<Array<Maybe<ResolversTypes['VulnerabilityReference']>>>, ParentType, ContextType>;
  riskScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  severity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  userInteraction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weaknessEnumeration?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteWebhookResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteWebhook'] = ResolversParentTypes['SiteWebhook']> = {
  URL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdById?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedById?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnmpInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnmpInfo'] = ResolversParentTypes['SnmpInfo']> = {
  defaultGateway?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interfaceAdminStatus?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  interfaceAlias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interfaceDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interfaceIndex?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  interfaceIpAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interfaceMacAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interfaceMask?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interfaceMtu?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  interfaceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interfaceOperStatus?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  interfaceSpeed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  portName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upLink?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  vLan?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SoftwareResolvers<ContextType = any, ParentType extends ResolversParentTypes['Software'] = ResolversParentTypes['Software']> = {
  architecture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cpe?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  edition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  installDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  installType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  marketVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  msi?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operatingSystem?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  release?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unspsc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SoftwareDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SoftwareDetails'] = ResolversParentTypes['SoftwareDetails']> = {
  architectures?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  earliestInstallDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  editions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  iconPublisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconSoftware?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  installType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  operatingSystemsDetails?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperatingSystemDetails']>>>, ParentType, ContextType>;
  publisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relatedSoftwareNames?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  releaseInfo?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  software?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalInstallations?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalVersions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unspsc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SoftwaresResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SoftwaresResponse'] = ResolversParentTypes['SoftwaresResponse']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SoundDeviceResolvers<ContextType = any, ParentType extends ResolversParentTypes['SoundDevice'] = ResolversParentTypes['SoundDevice']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Source'] = ResolversParentTypes['Source']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  discoveryComponents?: Resolver<Maybe<Array<Maybe<ResolversTypes['DiscoveryComponent']>>>, ParentType, ContextType>;
  externalId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  siteId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['InstallationState']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SourceMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['SourceMutation'] = ResolversParentTypes['SourceMutation']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  scanNow?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  siteId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  updateDiscoveryComponent?: Resolver<Maybe<ResolversTypes['DiscoveryComponent']>, ParentType, ContextType, RequireFields<SourceMutationUpdateDiscoveryComponentArgs, 'discoveryComponentId' | 'scanningGroupId'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SourcesPaginationInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SourcesPaginationInfo'] = ResolversParentTypes['SourcesPaginationInfo']> = {
  current?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['SourcesPage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SqlDatabaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SqlDatabase'] = ResolversParentTypes['SqlDatabase']> = {
  dataFilesSizeKb?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  logFilesSizeKb?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  logFilesUsedSizeKb?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SqlServerResolvers<ContextType = any, ParentType extends ResolversParentTypes['SqlServer'] = ResolversParentTypes['SqlServer']> = {
  authentication?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cluster?: Resolver<Maybe<ResolversTypes['SqlServerCluster']>, ParentType, ContextType>;
  dataPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  databases?: Resolver<Maybe<Array<Maybe<ResolversTypes['SqlDatabase']>>>, ParentType, ContextType>;
  displayVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  installPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instanceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instanceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isClustered?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isWow64?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  serviceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  services?: Resolver<Maybe<Array<Maybe<ResolversTypes['SqlServerService']>>>, ParentType, ContextType>;
  skuName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  spLevel?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SqlServerClusterResolvers<ContextType = any, ParentType extends ResolversParentTypes['SqlServerCluster'] = ResolversParentTypes['SqlServerCluster']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SqlServerServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['SqlServerService'] = ResolversParentTypes['SqlServerService']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startupType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubnetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subnet'] = ResolversParentTypes['Subnet']> = {
  addressPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  availabilityZone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  availableIpAddressCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cidrBlock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  configuration?: Resolver<Maybe<Array<Maybe<ResolversTypes['AzureSubnetIpConfiguration']>>>, ParentType, ContextType>;
  defaultForaz?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ipv6CidrBlocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['AwsSubnetIpv6CidrBlock']>>>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  mapPublicIpOnLaunch?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subnetId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SystemDriverResolvers<ContextType = any, ParentType extends ResolversParentTypes['SystemDriver'] = ResolversParentTypes['SystemDriver']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pathName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serviceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SystemEnclosureResolvers<ContextType = any, ParentType extends ResolversParentTypes['SystemEnclosure'] = ResolversParentTypes['SystemEnclosure']> = {
  chassisName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lockPresent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  machineModel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  machineName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platformUUID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  securityStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serialNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  smbiosAssetTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  smcVersionSystem?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SystemProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['SystemProduct'] = ResolversParentTypes['SystemProduct']> = {
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TapeDriveResolvers<ContextType = any, ParentType extends ResolversParentTypes['TapeDrive'] = ResolversParentTypes['TapeDrive']> = {
  availability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  capability?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  compression?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  defaultBlockSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxBlockSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxMediaSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxPartitionCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mediaType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minBlockSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  needsCleaning?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  numberOfMediaSupported?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  padding?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export interface TimeZoneScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TimeZone'], any> {
  name: 'TimeZone';
}

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type TonerInformationResolvers<ContextType = any, ParentType extends ResolversParentTypes['TonerInformation'] = ResolversParentTypes['TonerInformation']> = {
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  tonerColorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tonerColorNr?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tonerMaximum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tonerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tonerNr?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tonerRemaining?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TpmResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tpm'] = ResolversParentTypes['Tpm']> = {
  family?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firmwareVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActivatedInitialValue?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isEnabledInitialValue?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isOwnedInitialValue?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  manufacturerCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturerVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturerVersionInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modelNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  physicalPresenceVersionInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  specLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  specVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vendorSpecific?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export interface UsCurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['USCurrency'], any> {
  name: 'USCurrency';
}

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export interface UnsignedFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedFloat'], any> {
  name: 'UnsignedFloat';
}

export interface UnsignedIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedInt'], any> {
  name: 'UnsignedInt';
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UpsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ups'] = ResolversParentTypes['Ups']> = {
  agentSoftwareVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alarmsPresent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  attachedDevices?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batteryCurrent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  batteryStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batteryTemperature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  batteryVoltage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  estimatedChargeRemaining?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  estimatedMinutesRemaining?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secondsOnBattery?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  upsSoftwareVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsbControllerResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsbController'] = ResolversParentTypes['UsbController']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  supportedProtocol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsbDeviceResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsbDevice'] = ResolversParentTypes['UsbDevice']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pnpClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pnpDeviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  present?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  service?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  accountType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  buildInAdmin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lockout?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passwordChangeable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  passwordExpires?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  passwordRequired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserInGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserInGroup'] = ResolversParentTypes['UserInGroup']> = {
  adminGroup?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  domainName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  groupName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UtcOffsetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UtcOffset'], any> {
  name: 'UtcOffset';
}

export type VCenterResolvers<ContextType = any, ParentType extends ResolversParentTypes['VCenter'] = ResolversParentTypes['VCenter']> = {
  dataCenter?: Resolver<Maybe<ResolversTypes['DataCenter']>, ParentType, ContextType>;
  vCenterKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VersionDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['VersionDetails'] = ResolversParentTypes['VersionDetails']> = {
  architectures?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  earliestInstallDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  editions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  marketVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseInfo?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReleaseInfoScannedSoftware']>>>, ParentType, ContextType>;
  shortVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalInstallations?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VirtualMachineResolvers<ContextType = any, ParentType extends ResolversParentTypes['VirtualMachine'] = ResolversParentTypes['VirtualMachine']> = {
  adminDisabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ami?: Resolver<Maybe<ResolversTypes['AwsAmi']>, ParentType, ContextType>;
  architecture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assetKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  availabilityZone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  biosDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  biosVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bootDiagnosticsStorageUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bootTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connectionState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coreCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cpuCredits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cpuMhz?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cpuModel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cpuPackagesDescriptions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dataCenterKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultGateway?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dhcp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  diskImageOffer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diskImagePublisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diskImageSku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diskImageVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dnsAddresses?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domainName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  elasticGpu?: Resolver<Maybe<ResolversTypes['AwsElasticGpu']>, ParentType, ContextType>;
  enaSupport?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  environment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  esxiKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  groupName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guestFullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guestSnapshots?: Resolver<Maybe<Array<Maybe<ResolversTypes['VmwareGuestSnapshot']>>>, ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['AwsHost']>, ParentType, ContextType>;
  hostMaxVirtualDiskCapacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hostName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hyperVisor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instanceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instanceProfileArn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instanceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  internalKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipv4Address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isBootDiagnosticsEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isManagedDiskEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isManagedServiceIdentityEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isRunning?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kernel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyPairName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  launchTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  licenseType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lifeCycle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  managedServiceIdentityType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  managementServerIp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxDataDiskCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  memorySize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numCpuCores?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numCpuPkgs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numCpuThreads?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numEthernetCards?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numHbas?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numNics?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numberOfCores?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numberOfDisks?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  port?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  powerState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privateDNSName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privateIPAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productCode?: Resolver<Maybe<Array<Maybe<ResolversTypes['AwsProductCode']>>>, ParentType, ContextType>;
  publicDnsName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicIpAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ramdiskId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resourceDiskSizeInMb?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  resourceGroupKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rootDeviceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rootDeviceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  securityGroupKeys?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  serial?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceDestCheck?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sriovNetSupport?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sslThumbprint?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stateReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stateTransitionReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subnetKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>;
  threadsPercore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  toolsRunningStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  toolsVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  toolsVersionStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vendor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  virtualMachineExtensions?: Resolver<Maybe<Array<Maybe<ResolversTypes['AzureVirtualMachineExtension']>>>, ParentType, ContextType>;
  virtualNetworkKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  virtualizationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vmwareServerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VirtualNetworkResolvers<ContextType = any, ParentType extends ResolversParentTypes['VirtualNetwork'] = ResolversParentTypes['VirtualNetwork']> = {
  awsContainerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instanceTenancy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  internalKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipAddressV4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipAddressV6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isDdosProtectionEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isVmProtectionEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  macAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mtu?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serviceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subnetMask?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subnets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Subnet']>>>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  virtualNetworkKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vpcId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VmwareDatastoreClusterConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['VmwareDatastoreClusterConfiguration'] = ResolversParentTypes['VmwareDatastoreClusterConfiguration']> = {
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VmwareDatastoreClusterOverrideResolvers<ContextType = any, ParentType extends ResolversParentTypes['VmwareDatastoreClusterOverride'] = ResolversParentTypes['VmwareDatastoreClusterOverride']> = {
  behaviour?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  intraVmAffinity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  intraVmAntiAffinity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VmwareGuestSnapshotResolvers<ContextType = any, ParentType extends ResolversParentTypes['VmwareGuestSnapshot'] = ResolversParentTypes['VmwareGuestSnapshot']> = {
  createTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  internalKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VmwareProductInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['VmwareProductInfo'] = ResolversParentTypes['VmwareProductInfo']> = {
  apiType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  apiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  build?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instanceUuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  licenseProductName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  licenseProductVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localeVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localebuild?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operatingSystemType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productLineId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vendor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type VolumeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Volume'] = ResolversParentTypes['Volume']> = {
  attachTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  attachmentState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  automount?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  blockSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  compressed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deleteOnTermination?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  device?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  driveLetter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  driveType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  encrypted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  errorMethodology?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  fileSystem?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  freeSpace?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  indexingEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  iops?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  mountPoint?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageFilePresent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  protectionStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  snapshotId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  supportsDiskQuotas?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  supportsFileBasedCompression?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VolumeGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['VolumeGroup'] = ResolversParentTypes['VolumeGroup']> = {
  format?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  free?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  logicalVolumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['LogicalVolume']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  physicalVolumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['PhysicalVolume']>>>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumeMembers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VulnerabilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vulnerability'] = ResolversParentTypes['Vulnerability']> = {
  cve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VulnerabilityCauseResolvers<ContextType = any, ParentType extends ResolversParentTypes['VulnerabilityCause'] = ResolversParentTypes['VulnerabilityCause']> = {
  affectedProduct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  vendor?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VulnerabilityExploitabilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['VulnerabilityExploitability'] = ResolversParentTypes['VulnerabilityExploitability']> = {
  CISA?: Resolver<Maybe<ResolversTypes['VulnerabilityExploitabilityCISA']>, ParentType, ContextType>;
  MSRC?: Resolver<Maybe<ResolversTypes['VulnerabilityExploitabilityMSRC']>, ParentType, ContextType>;
  NVD?: Resolver<Maybe<ResolversTypes['VulnerabilityExploitabilityNVD']>, ParentType, ContextType>;
  exploitable?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exploitedInTheWild?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VulnerabilityExploitabilityCisaResolvers<ContextType = any, ParentType extends ResolversParentTypes['VulnerabilityExploitabilityCISA'] = ResolversParentTypes['VulnerabilityExploitabilityCISA']> = {
  dueDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  exploited?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knownRansomwareCampaignUse?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VulnerabilityExploitabilityMsrcResolvers<ContextType = any, ParentType extends ResolversParentTypes['VulnerabilityExploitabilityMSRC'] = ResolversParentTypes['VulnerabilityExploitabilityMSRC']> = {
  exploitability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VulnerabilityExploitabilityNvdResolvers<ContextType = any, ParentType extends ResolversParentTypes['VulnerabilityExploitabilityNVD'] = ResolversParentTypes['VulnerabilityExploitabilityNVD']> = {
  exploitability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  impact?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VulnerabilityReferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['VulnerabilityReference'] = ResolversParentTypes['VulnerabilityReference']> = {
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WarrantyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Warranty'] = ResolversParentTypes['Warranty']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['WarrantyDetail']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forceUpdate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastWarrantySuccess?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastWarrantyTry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purchaseCountry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shipDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WarrantyDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['WarrantyDetail'] = ResolversParentTypes['WarrantyDetail']> = {
  endDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastChanged?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  serviceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WebhookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Webhook'] = ResolversParentTypes['Webhook']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  applicationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  applicationName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  authentication?: Resolver<Maybe<ResolversTypes['Authentication']>, ParentType, ContextType>;
  autoDisabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  eventsSubscribed?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  lastDeliveryDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  masterdata?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payloadUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resourcesFields?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WebhookMasterdataResolvers<ContextType = any, ParentType extends ResolversParentTypes['WebhookMasterdata'] = ResolversParentTypes['WebhookMasterdata']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isPro?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tooltip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WebhookResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['WebhookResource'] = ResolversParentTypes['WebhookResource']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccountNumber?: GraphQLScalarType;
  ActiveDirectoryGroup?: ActiveDirectoryGroupResolvers<ContextType>;
  ActiveDirectoryInfo?: ActiveDirectoryInfoResolvers<ContextType>;
  AggregatedCursor?: AggregatedCursorResolvers<ContextType>;
  AirWatchApplication?: AirWatchApplicationResolvers<ContextType>;
  AirWatchDevice?: AirWatchDeviceResolvers<ContextType>;
  AirWatchOrganizationGroup?: AirWatchOrganizationGroupResolvers<ContextType>;
  Antivirus?: AntivirusResolvers<ContextType>;
  AppAccountMutation?: AppAccountMutationResolvers<ContextType>;
  AssetBasicInfo?: AssetBasicInfoResolvers<ContextType>;
  AssetCustom?: AssetCustomResolvers<ContextType>;
  AssetDetailsResponse?: AssetDetailsResponseResolvers<ContextType>;
  AssetGroup?: AssetGroupResolvers<ContextType>;
  AssetGroupsType?: AssetGroupsTypeResolvers<ContextType>;
  AssetRelationType?: AssetRelationTypeResolvers<ContextType>;
  AssetWithSoftwareResponse?: AssetWithSoftwareResponseResolvers<ContextType>;
  AssetsPagination?: AssetsPaginationResolvers<ContextType>;
  Authentication?: AuthenticationResolvers<ContextType>;
  AuthorizedReport?: AuthorizedReportResolvers<ContextType>;
  AuthorizedSiteAccounts?: AuthorizedSiteAccountsResolvers<ContextType>;
  AuthorizedSites?: AuthorizedSitesResolvers<ContextType>;
  Autorun?: AutorunResolvers<ContextType>;
  AwsAmi?: AwsAmiResolvers<ContextType>;
  AwsElasticGpu?: AwsElasticGpuResolvers<ContextType>;
  AwsHost?: AwsHostResolvers<ContextType>;
  AwsProductCode?: AwsProductCodeResolvers<ContextType>;
  AwsSecurityGroupPermission?: AwsSecurityGroupPermissionResolvers<ContextType>;
  AwsSecurityGroupPermissionIpRange?: AwsSecurityGroupPermissionIpRangeResolvers<ContextType>;
  AwsSubnetIpv6CidrBlock?: AwsSubnetIpv6CidrBlockResolvers<ContextType>;
  AzureIpConfiguration?: AzureIpConfigurationResolvers<ContextType>;
  AzureNetworkSecurityGroup?: AzureNetworkSecurityGroupResolvers<ContextType>;
  AzureSecurityRule?: AzureSecurityRuleResolvers<ContextType>;
  AzureSubnetIpConfiguration?: AzureSubnetIpConfigurationResolvers<ContextType>;
  AzureVirtualMachineExtension?: AzureVirtualMachineExtensionResolvers<ContextType>;
  Baseboard?: BaseboardResolvers<ContextType>;
  BasicAuth?: BasicAuthResolvers<ContextType>;
  Battery?: BatteryResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Bios?: BiosResolvers<ContextType>;
  BitLockerRecoveryKey?: BitLockerRecoveryKeyResolvers<ContextType>;
  BootConfiguration?: BootConfigurationResolvers<ContextType>;
  BrandMetadata?: BrandMetadataResolvers<ContextType>;
  Bus?: BusResolvers<ContextType>;
  BusConfig?: BusConfigResolvers<ContextType>;
  Byte?: GraphQLScalarType;
  COM?: ComResolvers<ContextType>;
  CdromDrive?: CdromDriveResolvers<ContextType>;
  Certificate?: CertificateResolvers<ContextType>;
  ChromeOsActiveTimeRange?: ChromeOsActiveTimeRangeResolvers<ContextType>;
  CitrixAppliance?: CitrixApplianceResolvers<ContextType>;
  CitrixConfiguration?: CitrixConfigurationResolvers<ContextType>;
  CitrixCrashDump?: CitrixCrashDumpResolvers<ContextType>;
  CitrixExtraInfo?: CitrixExtraInfoResolvers<ContextType>;
  CitrixGuestInfo?: CitrixGuestInfoResolvers<ContextType>;
  CitrixNetwork?: CitrixNetworkResolvers<ContextType>;
  CitrixPhysicalBlockDevice?: CitrixPhysicalBlockDeviceResolvers<ContextType>;
  CitrixPhysicalCpu?: CitrixPhysicalCpuResolvers<ContextType>;
  CitrixPhysicalInterface?: CitrixPhysicalInterfaceResolvers<ContextType>;
  CitrixPoolInfo?: CitrixPoolInfoResolvers<ContextType>;
  CitrixPoolPatch?: CitrixPoolPatchResolvers<ContextType>;
  CitrixPoolStorage?: CitrixPoolStorageResolvers<ContextType>;
  CitrixRestriction?: CitrixRestrictionResolvers<ContextType>;
  CitrixVirtualBlockDevice?: CitrixVirtualBlockDeviceResolvers<ContextType>;
  CitrixVirtualDiskImage?: CitrixVirtualDiskImageResolvers<ContextType>;
  CitrixVirtualInterface?: CitrixVirtualInterfaceResolvers<ContextType>;
  CitrixXenServerInfo?: CitrixXenServerInfoResolvers<ContextType>;
  CitrixXenServerPatch?: CitrixXenServerPatchResolvers<ContextType>;
  CitrixXenServerStorage?: CitrixXenServerStorageResolvers<ContextType>;
  CloudAssetCustom?: CloudAssetCustomResolvers<ContextType>;
  Codec?: CodecResolvers<ContextType>;
  Component?: ComponentResolvers<ContextType>;
  ComputerSystem?: ComputerSystemResolvers<ContextType>;
  CountryCode?: GraphQLScalarType;
  Cuid?: GraphQLScalarType;
  Currency?: GraphQLScalarType;
  CursorOrder?: CursorOrderResolvers<ContextType>;
  CustomField?: CustomFieldResolvers<ContextType>;
  CustomFieldProps?: CustomFieldPropsResolvers<ContextType>;
  DCOM?: DcomResolvers<ContextType>;
  DID?: GraphQLScalarType;
  DataCenter?: DataCenterResolvers<ContextType>;
  Datastore?: DatastoreResolvers<ContextType>;
  DatastoreCluster?: DatastoreClusterResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Desktop?: DesktopResolvers<ContextType>;
  DeviceActionResult?: DeviceActionResultResolvers<ContextType>;
  DeviceApplication?: DeviceApplicationResolvers<ContextType>;
  DeweyDecimal?: GraphQLScalarType;
  DiscoveryComponent?: DiscoveryComponentResolvers<ContextType>;
  DiscoveryCredential?: DiscoveryCredentialResolvers<ContextType>;
  DiscoveryCredentialPaginated?: DiscoveryCredentialPaginatedResolvers<ContextType>;
  DiscoveryCredentialParameters?: DiscoveryCredentialParametersResolvers<ContextType>;
  DiscoveryScanningTask?: DiscoveryScanningTaskResolvers<ContextType>;
  DiskPartition?: DiskPartitionResolvers<ContextType>;
  DisplayConfiguration?: DisplayConfigurationResolvers<ContextType>;
  DisplayControllerConfiguration?: DisplayControllerConfigurationResolvers<ContextType>;
  Duration?: GraphQLScalarType;
  EditAssetResponse?: EditAssetResponseResolvers<ContextType>;
  EmailAddress?: GraphQLScalarType;
  Environment?: EnvironmentResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  EsxiCluster?: EsxiClusterResolvers<ContextType>;
  ExportFilteredResponse?: ExportFilteredResponseResolvers<ContextType>;
  ExportStatusResponse?: ExportStatusResponseResolvers<ContextType>;
  ExtendedInfo?: ExtendedInfoResolvers<ContextType>;
  Feature?: FeatureResolvers<ContextType>;
  Field?: FieldResolvers<ContextType>;
  FileProperty?: FilePropertyResolvers<ContextType>;
  FirmwareHistory?: FirmwareHistoryResolvers<ContextType>;
  GUID?: GraphQLScalarType;
  GraphicsCard?: GraphicsCardResolvers<ContextType>;
  GroupedAggSoftwareCursoredResponse?: GroupedAggSoftwareCursoredResponseResolvers<ContextType>;
  GroupedRelease?: GroupedReleaseResolvers<ContextType>;
  GroupedSoftware?: GroupedSoftwareResolvers<ContextType>;
  HSL?: GraphQLScalarType;
  HSLA?: GraphQLScalarType;
  HardDisk?: HardDiskResolvers<ContextType>;
  HexColorCode?: GraphQLScalarType;
  Hexadecimal?: GraphQLScalarType;
  HyperVGuest?: HyperVGuestResolvers<ContextType>;
  HyperVNetwork?: HyperVNetworkResolvers<ContextType>;
  IBAN?: GraphQLScalarType;
  IP?: GraphQLScalarType;
  IPCPatent?: GraphQLScalarType;
  IPv4?: GraphQLScalarType;
  IPv6?: GraphQLScalarType;
  ISBN?: GraphQLScalarType;
  ISO8601Duration?: GraphQLScalarType;
  IVersionResponse?: IVersionResponseResolvers<ContextType>;
  IdeController?: IdeControllerResolvers<ContextType>;
  InfraredDevice?: InfraredDeviceResolvers<ContextType>;
  InstallationState?: InstallationStateResolvers<ContextType>;
  IntegrationsInstallation?: IntegrationsInstallationResolvers<ContextType>;
  IpLocation?: IpLocationResolvers<ContextType>;
  ItemsResponse?: ItemsResponseResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  JWT?: GraphQLScalarType;
  KbPatches?: KbPatchesResolvers<ContextType>;
  Keyboard?: KeyboardResolvers<ContextType>;
  LCCSubclass?: GraphQLScalarType;
  Latitude?: GraphQLScalarType;
  LocalDate?: GraphQLScalarType;
  LocalEndTime?: GraphQLScalarType;
  LocalTime?: GraphQLScalarType;
  Locale?: GraphQLScalarType;
  LogicalDisk?: LogicalDiskResolvers<ContextType>;
  LogicalRules?: GraphQLScalarType;
  LogicalVolume?: LogicalVolumeResolvers<ContextType>;
  Long?: GraphQLScalarType;
  Longitude?: GraphQLScalarType;
  MAC?: GraphQLScalarType;
  MappedDrive?: MappedDriveResolvers<ContextType>;
  Me?: MeResolvers<ContextType>;
  MemoryArray?: MemoryArrayResolvers<ContextType>;
  MemoryModule?: MemoryModuleResolvers<ContextType>;
  MobileDeviceManagement?: MobileDeviceManagementResolvers<ContextType>;
  MobileDeviceManagementContainer?: MobileDeviceManagementContainerResolvers<ContextType>;
  ModelMetadata?: ModelMetadataResolvers<ContextType>;
  Modem?: ModemResolvers<ContextType>;
  Monitor?: MonitorResolvers<ContextType>;
  MonitorData?: MonitorDataResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NegativeFloat?: GraphQLScalarType;
  NegativeInt?: GraphQLScalarType;
  Network?: NetworkResolvers<ContextType>;
  NetworkActionDefinition?: NetworkActionDefinitionResolvers<ContextType>;
  NetworkAdapter?: NetworkAdapterResolvers<ContextType>;
  NetworkClient?: NetworkClientResolvers<ContextType>;
  NetworkConnection?: NetworkConnectionResolvers<ContextType>;
  NetworkVisibilityConfig?: NetworkVisibilityConfigResolvers<ContextType>;
  NonEmptyString?: GraphQLScalarType;
  NonNegativeFloat?: GraphQLScalarType;
  NonNegativeInt?: GraphQLScalarType;
  NonPositiveFloat?: GraphQLScalarType;
  NonPositiveInt?: GraphQLScalarType;
  ObjectID?: GraphQLScalarType;
  OnBoardDevice?: OnBoardDeviceResolvers<ContextType>;
  OperatingSystem?: OperatingSystemResolvers<ContextType>;
  OperatingSystemDetails?: OperatingSystemDetailsResolvers<ContextType>;
  OperatingSystemRecoveryConfiguration?: OperatingSystemRecoveryConfigurationResolvers<ContextType>;
  OrgSite?: OrgSiteResolvers<ContextType>;
  OrgSiteCreated?: OrgSiteCreatedResolvers<ContextType>;
  OrgSiteMutation?: OrgSiteMutationResolvers<ContextType>;
  OrganizationMutation?: OrganizationMutationResolvers<ContextType>;
  OsMetadata?: OsMetadataResolvers<ContextType>;
  OtData?: OtDataResolvers<ContextType>;
  PageFile?: PageFileResolvers<ContextType>;
  PaginatedSourcesResponse?: PaginatedSourcesResponseResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  PciCard?: PciCardResolvers<ContextType>;
  PcmciaController?: PcmciaControllerResolvers<ContextType>;
  PerformanceInformation?: PerformanceInformationResolvers<ContextType>;
  PhoneNumber?: GraphQLScalarType;
  PhysicalVolume?: PhysicalVolumeResolvers<ContextType>;
  PnpSignedDriver?: PnpSignedDriverResolvers<ContextType>;
  PointingDevice?: PointingDeviceResolvers<ContextType>;
  Port?: GraphQLScalarType;
  PortConnector?: PortConnectorResolvers<ContextType>;
  PositiveFloat?: GraphQLScalarType;
  PositiveInt?: GraphQLScalarType;
  PostalCode?: GraphQLScalarType;
  Printer?: PrinterResolvers<ContextType>;
  PrinterDriver?: PrinterDriverResolvers<ContextType>;
  PrinterInfo?: PrinterInfoResolvers<ContextType>;
  Process?: ProcessResolvers<ContextType>;
  Processor?: ProcessorResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  QuickFixEngineering?: QuickFixEngineeringResolvers<ContextType>;
  RGB?: GraphQLScalarType;
  RGBA?: GraphQLScalarType;
  RecognitionInfo?: RecognitionInfoResolvers<ContextType>;
  ReconcileField?: ReconcileFieldResolvers<ContextType>;
  Reconciliation?: ReconciliationResolvers<ContextType>;
  Registry?: RegistryResolvers<ContextType>;
  Relation?: RelationResolvers<ContextType>;
  ReleaseInfoScannedSoftware?: ReleaseInfoScannedSoftwareResolvers<ContextType>;
  ReportExecutionStatus?: ReportExecutionStatusResolvers<ContextType>;
  ReportItem?: ReportItemResolvers<ContextType>;
  ReportsExecutionStatus?: ReportsExecutionStatusResolvers<ContextType>;
  ReportsFullExportResponse?: ReportsFullExportResponseResolvers<ContextType>;
  ReportsFullExportStatusResponse?: ReportsFullExportStatusResponseResolvers<ContextType>;
  ReportsResponse?: ReportsResponseResolvers<ContextType>;
  ReportsResultsResponse?: ReportsResultsResponseResolvers<ContextType>;
  ResourceGroup?: ResourceGroupResolvers<ContextType>;
  RotateOrgSiteCredentials?: RotateOrgSiteCredentialsResolvers<ContextType>;
  RotateOrganizationCredentials?: RotateOrganizationCredentialsResolvers<ContextType>;
  RoutingNumber?: GraphQLScalarType;
  SafeInt?: GraphQLScalarType;
  ScanningAction?: ScanningActionResolvers<ContextType>;
  ScanningGroup?: ScanningGroupResolvers<ContextType>;
  ScanningTask?: ScanningTaskResolvers<ContextType>;
  ScsiController?: ScsiControllerResolvers<ContextType>;
  SecurityGroup?: SecurityGroupResolvers<ContextType>;
  SemVer?: GraphQLScalarType;
  SerialNumber?: SerialNumberResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  Share?: ShareResolvers<ContextType>;
  SharePermission?: SharePermissionResolvers<ContextType>;
  Site?: SiteResolvers<ContextType>;
  SiteMutation?: SiteMutationResolvers<ContextType>;
  SiteSourceMutation?: SiteSourceMutationResolvers<ContextType>;
  SiteUserProfile?: SiteUserProfileResolvers<ContextType>;
  SiteVulnerabilitiesResponse?: SiteVulnerabilitiesResponseResolvers<ContextType>;
  SiteVulnerability?: SiteVulnerabilityResolvers<ContextType>;
  SiteWebhook?: SiteWebhookResolvers<ContextType>;
  SnmpInfo?: SnmpInfoResolvers<ContextType>;
  Software?: SoftwareResolvers<ContextType>;
  SoftwareDetails?: SoftwareDetailsResolvers<ContextType>;
  SoftwaresResponse?: SoftwaresResponseResolvers<ContextType>;
  SoundDevice?: SoundDeviceResolvers<ContextType>;
  Source?: SourceResolvers<ContextType>;
  SourceMutation?: SourceMutationResolvers<ContextType>;
  SourcesPaginationInfo?: SourcesPaginationInfoResolvers<ContextType>;
  SqlDatabase?: SqlDatabaseResolvers<ContextType>;
  SqlServer?: SqlServerResolvers<ContextType>;
  SqlServerCluster?: SqlServerClusterResolvers<ContextType>;
  SqlServerService?: SqlServerServiceResolvers<ContextType>;
  Subnet?: SubnetResolvers<ContextType>;
  SystemDriver?: SystemDriverResolvers<ContextType>;
  SystemEnclosure?: SystemEnclosureResolvers<ContextType>;
  SystemProduct?: SystemProductResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  TapeDrive?: TapeDriveResolvers<ContextType>;
  Time?: GraphQLScalarType;
  TimeZone?: GraphQLScalarType;
  Timestamp?: GraphQLScalarType;
  TonerInformation?: TonerInformationResolvers<ContextType>;
  Tpm?: TpmResolvers<ContextType>;
  URL?: GraphQLScalarType;
  USCurrency?: GraphQLScalarType;
  UUID?: GraphQLScalarType;
  UnsignedFloat?: GraphQLScalarType;
  UnsignedInt?: GraphQLScalarType;
  Upload?: GraphQLScalarType;
  Ups?: UpsResolvers<ContextType>;
  UsbController?: UsbControllerResolvers<ContextType>;
  UsbDevice?: UsbDeviceResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserInGroup?: UserInGroupResolvers<ContextType>;
  UtcOffset?: GraphQLScalarType;
  VCenter?: VCenterResolvers<ContextType>;
  VersionDetails?: VersionDetailsResolvers<ContextType>;
  VirtualMachine?: VirtualMachineResolvers<ContextType>;
  VirtualNetwork?: VirtualNetworkResolvers<ContextType>;
  VmwareDatastoreClusterConfiguration?: VmwareDatastoreClusterConfigurationResolvers<ContextType>;
  VmwareDatastoreClusterOverride?: VmwareDatastoreClusterOverrideResolvers<ContextType>;
  VmwareGuestSnapshot?: VmwareGuestSnapshotResolvers<ContextType>;
  VmwareProductInfo?: VmwareProductInfoResolvers<ContextType>;
  Void?: GraphQLScalarType;
  Volume?: VolumeResolvers<ContextType>;
  VolumeGroup?: VolumeGroupResolvers<ContextType>;
  Vulnerability?: VulnerabilityResolvers<ContextType>;
  VulnerabilityCause?: VulnerabilityCauseResolvers<ContextType>;
  VulnerabilityExploitability?: VulnerabilityExploitabilityResolvers<ContextType>;
  VulnerabilityExploitabilityCISA?: VulnerabilityExploitabilityCisaResolvers<ContextType>;
  VulnerabilityExploitabilityMSRC?: VulnerabilityExploitabilityMsrcResolvers<ContextType>;
  VulnerabilityExploitabilityNVD?: VulnerabilityExploitabilityNvdResolvers<ContextType>;
  VulnerabilityReference?: VulnerabilityReferenceResolvers<ContextType>;
  Warranty?: WarrantyResolvers<ContextType>;
  WarrantyDetail?: WarrantyDetailResolvers<ContextType>;
  Webhook?: WebhookResolvers<ContextType>;
  WebhookMasterdata?: WebhookMasterdataResolvers<ContextType>;
  WebhookResource?: WebhookResourceResolvers<ContextType>;
};

