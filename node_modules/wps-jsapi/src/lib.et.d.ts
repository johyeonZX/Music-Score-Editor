/// <reference path="lib.kso.d.ts" />

declare namespace Et {

    interface EtBorders {
        /**
		* LineStyle
		**/
        LineStyle: any;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: EtXlBordersIndex, RHS?: EtBorder): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        /**
		* ColorIndex
		**/
        ColorIndex: any;

        /**
		* Color
		**/
        Color: any;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* Value
		**/
        Value: any;

        /**
		* Weight
		**/
        Weight: any;

        _Default(Index?: EtXlBordersIndex, RHS?: EtBorder): void;

        /**
		* ThemeColor
		**/
        ThemeColor: any;

        /**
		* TintAndShade
		**/
        TintAndShade: any;

    }

    interface EtXmlMaps {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtXmlMap): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add(Schema?: string, RootElementName?: any, RHS?: EtXmlMap): void;

        _Default(Index?: any, RHS?: EtXmlMap): void;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtAdjustments extends Kso.KsoAdjustments {}

    interface EtXmlMap {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* _Default
		**/
        readonly _Default: string;

        /**
		* AdjustColumnWidth
		**/
        AdjustColumnWidth: boolean;

        /**
		* RootElementName
		**/
        readonly RootElementName: string;

        /**
		* IsExportable
		**/
        readonly IsExportable: boolean;

        /**
		* SaveDataSourceDefinition
		**/
        SaveDataSourceDefinition: boolean;

        /**
		* ShowImportExportValidationErrors
		**/
        ShowImportExportValidationErrors: boolean;

        /**
		* PreserveColumnFilter
		**/
        PreserveColumnFilter: boolean;

        /**
		* PreserveNumberFormatting
		**/
        PreserveNumberFormatting: boolean;

        /**
		* AppendOnImport
		**/
        AppendOnImport: boolean;

        /**
		* RootElementNamespace
		**/
        readonly RootElementNamespace: EtXmlNamespace;

        /**
		* Schemas
		**/
        readonly Schemas: EtXmlSchemas;

        /**
		* DataBinding
		**/
        readonly DataBinding: EtXmlDataBinding;

        Delete(): void;

        Import(Url?: string, Overwrite?: any, RHS?: EtXlXmlImportResult): void;

        ImportXml(XmlData?: string, Overwrite?: any, RHS?: EtXlXmlImportResult): void;

        Export(Url?: string, Overwrite?: any, RHS?: EtXlXmlExportResult): void;

        ExportXml(Data?: string, RHS?: EtXlXmlExportResult): void;

        /**
		* WorkbookConnection
		**/
        readonly WorkbookConnection: EtWorkbookConnection;

    }

    interface EtShapeNodes extends Kso.KsoShapeNodes {}

    interface EtShapeNode extends Kso.KsoShapeNode {}

    interface EtTextConnection {
        /**
		* Connection
		**/
        Connection: any;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* TextFileTextQualifier
		**/
        TextFileTextQualifier: EtXlTextQualifier;

        /**
		* TextFileConsecutiveDelimiter
		**/
        TextFileConsecutiveDelimiter: boolean;

        /**
		* TextFileHeaderRow
		**/
        TextFileHeaderRow: boolean;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* TextFileColumnDataTypes
		**/
        TextFileColumnDataTypes: any;

        /**
		* TextFileCommaDelimiter
		**/
        TextFileCommaDelimiter: boolean;

        /**
		* TextFileDecimalSeparator
		**/
        TextFileDecimalSeparator: string;

        /**
		* TextFileFixedColumnWidths
		**/
        TextFileFixedColumnWidths: any;

        /**
		* TextFileOtherDelimiter
		**/
        TextFileOtherDelimiter: string;

        /**
		* TextFileParseType
		**/
        TextFileParseType: EtXlTextParsingType;

        /**
		* TextFilePlatform
		**/
        TextFilePlatform: EtXlPlatform;

        /**
		* TextFilePromptOnRefresh
		**/
        TextFilePromptOnRefresh: boolean;

        /**
		* TextFileSemicolonDelimiter
		**/
        TextFileSemicolonDelimiter: boolean;

        /**
		* TextFileSpaceDelimiter
		**/
        TextFileSpaceDelimiter: boolean;

        /**
		* TextFileStartRow
		**/
        TextFileStartRow: number;

        /**
		* TextFileTabDelimiter
		**/
        TextFileTabDelimiter: boolean;

        /**
		* TextFileThousandsSeparator
		**/
        TextFileThousandsSeparator: string;

        /**
		* TextFileTrailingMinusNumbers
		**/
        TextFileTrailingMinusNumbers: boolean;

        /**
		* TextFileVisualLayout
		**/
        TextFileVisualLayout: EtXlTextVisualLayoutType;

    }

    interface EtCalloutFormat extends Kso.KsoCalloutFormat {}

    interface EtValueChange {
        /**
		* VisibleInPivotTable
		**/
        readonly VisibleInPivotTable: boolean;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Value
		**/
        readonly Value: number;

        /**
		* Order
		**/
        readonly Order: number;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* PivotCell
		**/
        readonly PivotCell: EtPivotCell;

        /**
		* Tuple
		**/
        readonly Tuple: string;

        /**
		* AllocationValue
		**/
        readonly AllocationValue: EtXlAllocationValue;

        /**
		* AllocationMethod
		**/
        readonly AllocationMethod: EtXlAllocationMethod;

        /**
		* AllocationWeightExpression
		**/
        readonly AllocationWeightExpression: string;

        Delete(): void;

    }

    interface EtSeriesCollection extends Kso.KsoSeriesCollection {}

    interface EtPivotTable {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* PrintTitles
		**/
        PrintTitles: boolean;

        /**
		* RefreshDate
		**/
        readonly RefreshDate: string;

        /**
		* RefreshName
		**/
        readonly RefreshName: string;

        RefreshTable(RHS?: boolean): void;

        /**
		* DataBodyRange
		**/
        readonly DataBodyRange: EtRange;

        /**
		* CalculatedMembersInFilters
		**/
        CalculatedMembersInFilters: boolean;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Value
		**/
        Value: string;

        ShowPages(PageField?: any, RHS?: any): void;

        /**
		* GrandTotalName
		**/
        GrandTotalName: string;

        /**
		* MergeLabels
		**/
        MergeLabels: boolean;

        /**
		* Parent
		**/
        readonly Parent: any;

        AddFields(RowFields?: any, ColumnFields?: any, PageFields?: any, AddToTable?: any, RHS?: any): void;

        ColumnFields(Index?: any, RHS?: any): void;

        PivotCache(RHS?: EtPivotCache): void;

        /**
		* ManualUpdate
		**/
        ManualUpdate: boolean;

        /**
		* CacheIndex
		**/
        CacheIndex: number;

        HiddenFields(Index?: any, RHS?: any): void;

        /**
		* RowRange
		**/
        readonly RowRange: EtRange;

        /**
		* EnableFieldDialog
		**/
        EnableFieldDialog: boolean;

        /**
		* ColumnRange
		**/
        readonly ColumnRange: EtRange;

        /**
		* CubeFields
		**/
        readonly CubeFields: EtCubeFields;

        /**
		* ColumnGrand
		**/
        ColumnGrand: boolean;

        AllocateChanges(): void;

        PivotFields(Index?: any, RHS?: any): void;

        DataFields(Index?: any, RHS?: any): void;

        /**
		* DataLabelRange
		**/
        readonly DataLabelRange: EtRange;

        /**
		* DisplayNullString
		**/
        DisplayNullString: boolean;

        /**
		* DisplayEmptyColumn
		**/
        DisplayEmptyColumn: boolean;

        /**
		* _Default
		**/
        _Default: string;

        /**
		* CompactLayoutColumnHeader
		**/
        CompactLayoutColumnHeader: string;

        /**
		* HasAutoFormat
		**/
        HasAutoFormat: boolean;

        Format(Format?: EtXlPivotFormatType): void;

        /**
		* SourceData
		**/
        SourceData: any;

        /**
		* InnerDetail
		**/
        InnerDetail: string;

        /**
		* PageFieldOrder
		**/
        PageFieldOrder: number;

        PivotSelect(Name?: string, Mode?: EtXlPTSelectionMode, UseStandardName?: any): void;

        /**
		* PivotFormulas
		**/
        readonly PivotFormulas: EtPivotFormulas;

        /**
		* Name
		**/
        Name: string;

        /**
		* AllocationMethod
		**/
        AllocationMethod: EtXlAllocationMethod;

        PageFields(Index?: any, RHS?: any): void;

        /**
		* SmallGrid
		**/
        SmallGrid: boolean;

        /**
		* PageRange
		**/
        readonly PageRange: EtRange;

        /**
		* VacatedStyle
		**/
        VacatedStyle: string;

        /**
		* PageRangeCells
		**/
        readonly PageRangeCells: EtRange;

        /**
		* PivotSelection
		**/
        PivotSelection: string;

        /**
		* DisplayErrorString
		**/
        DisplayErrorString: boolean;

        RowFields(Index?: any, RHS?: any): void;

        /**
		* RowGrand
		**/
        RowGrand: boolean;

        Update(): void;

        /**
		* SaveData
		**/
        SaveData: boolean;

        /**
		* NullString
		**/
        NullString: string;

        /**
		* TableRange1
		**/
        readonly TableRange1: EtRange;

        /**
		* TableRange2
		**/
        readonly TableRange2: EtRange;

        VisibleFields(Index?: any, RHS?: any): void;

        CalculatedFields(RHS?: EtCalculatedFields): void;

        /**
		* EnableDrilldown
		**/
        EnableDrilldown: boolean;

        /**
		* DisplayEmptyRow
		**/
        DisplayEmptyRow: boolean;

        /**
		* PreserveFormatting
		**/
        PreserveFormatting: boolean;

        CreateCubeFile(File?: string, Measures?: any, Levels?: any, Members?: any, Properties?: any, RHS?: string): void;

        /**
		* EnableWizard
		**/
        EnableWizard: boolean;

        /**
		* ErrorString
		**/
        ErrorString: string;

        GetData(Name?: string, RHS?: number): void;

        ListFormulas(): void;

        PivotTableWizard(SourceType?: any, SourceData?: any, TableDestination?: any, TableName?: any, RowGrand?: any, ColumnGrand?: any, SaveData?: any, HasAutoFormat?: any, AutoPage?: any, Reserved?: any, BackgroundQuery?: any, OptimizeCache?: any, PageFieldOrder?: any, PageFieldWrapCount?: any, ReadData?: any, Connection?: any): void;

        AddDataField(Field?: any, Caption?: any, Function?: any, RHS?: EtPivotField): void;

        /**
		* SubtotalHiddenPageItems
		**/
        SubtotalHiddenPageItems: boolean;

        /**
		* SelectionMode
		**/
        SelectionMode: EtXlPTSelectionMode;

        /**
		* PageFieldStyle
		**/
        PageFieldStyle: string;

        /**
		* PageFieldWrapCount
		**/
        PageFieldWrapCount: number;

        _PivotSelect(Name?: string, Mode?: EtXlPTSelectionMode): void;

        /**
		* Tag
		**/
        Tag: string;

        /**
		* TableStyle
		**/
        TableStyle: string;

        DrillUp(PivotItem?: EtPivotItem, PivotLine?: any, LevelUniqueName?: any): void;

        /**
		* Slicers
		**/
        readonly Slicers: EtSlicers;

        /**
		* RepeatItemsOnEachPrintedPage
		**/
        RepeatItemsOnEachPrintedPage: boolean;

        /**
		* TotalsAnnotation
		**/
        TotalsAnnotation: boolean;

        /**
		* PivotSelectionStandard
		**/
        PivotSelectionStandard: string;

        /**
		* AlternativeText
		**/
        AlternativeText: string;

        GetPivotData(DataField?: any, Field1?: any, Item1?: any, Field2?: any, Item2?: any, Field3?: any, Item3?: any, Field4?: any, Item4?: any, Field5?: any, Item5?: any, Field6?: any, Item6?: any, Field7?: any, Item7?: any, Field8?: any, Item8?: any, Field9?: any, Item9?: any, Field10?: any, Item10?: any, Field11?: any, Item11?: any, Field12?: any, Item12?: any, Field13?: any, Item13?: any, Field14?: any, Item14?: any, RHS?: EtRange): void;

        /**
		* DataPivotField
		**/
        readonly DataPivotField: EtPivotField;

        /**
		* EnableDataValueEditing
		**/
        EnableDataValueEditing: boolean;

        ClearAllFilters(): void;

        /**
		* MDX
		**/
        readonly MDX: string;

        /**
		* ViewCalculatedMembers
		**/
        ViewCalculatedMembers: boolean;

        /**
		* CalculatedMembers
		**/
        readonly CalculatedMembers: EtCalculatedMembers;

        /**
		* DisplayImmediateItems
		**/
        DisplayImmediateItems: boolean;

        Dummy15(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: any): void;

        /**
		* EnableFieldList
		**/
        EnableFieldList: boolean;

        /**
		* VisualTotals
		**/
        VisualTotals: boolean;

        /**
		* ShowPageMultipleItemLabel
		**/
        ShowPageMultipleItemLabel: boolean;

        /**
		* Version
		**/
        readonly Version: EtXlPivotTableVersionList;

        /**
		* ShowCellBackgroundFromOLAP
		**/
        ShowCellBackgroundFromOLAP: boolean;

        /**
		* PivotColumnAxis
		**/
        readonly PivotColumnAxis: EtPivotAxis;

        /**
		* PivotRowAxis
		**/
        readonly PivotRowAxis: EtPivotAxis;

        /**
		* ShowDrillIndicators
		**/
        ShowDrillIndicators: boolean;

        /**
		* PrintDrillIndicators
		**/
        PrintDrillIndicators: boolean;

        /**
		* DisplayMemberPropertyTooltips
		**/
        DisplayMemberPropertyTooltips: boolean;

        /**
		* DisplayContextTooltips
		**/
        DisplayContextTooltips: boolean;

        /**
		* Location
		**/
        Location: string;

        ClearTable(): void;

        /**
		* CompactRowIndent
		**/
        CompactRowIndent: number;

        /**
		* LayoutRowDefault
		**/
        LayoutRowDefault: EtXlLayoutRowType;

        /**
		* DisplayFieldCaptions
		**/
        DisplayFieldCaptions: boolean;

        RowAxisLayout(RowLayout?: EtXlLayoutRowType): void;

        SubtotalLocation(Location?: EtXlSubtototalLocationType): void;

        /**
		* ActiveFilters
		**/
        readonly ActiveFilters: EtPivotFilters;

        /**
		* InGridDropZones
		**/
        InGridDropZones: boolean;

        ChangeConnection(conn?: EtWorkbookConnection): void;

        /**
		* TableStyle2
		**/
        TableStyle2: any;

        /**
		* ShowTableStyleLastColumn
		**/
        ShowTableStyleLastColumn: boolean;

        /**
		* ShowTableStyleRowStripes
		**/
        ShowTableStyleRowStripes: boolean;

        /**
		* ShowTableStyleColumnStripes
		**/
        ShowTableStyleColumnStripes: boolean;

        /**
		* ShowTableStyleRowHeaders
		**/
        ShowTableStyleRowHeaders: boolean;

        /**
		* ShowTableStyleColumnHeaders
		**/
        ShowTableStyleColumnHeaders: boolean;

        ConvertToFormulas(ConvertFilters?: boolean): void;

        /**
		* AllowMultipleFilters
		**/
        AllowMultipleFilters: boolean;

        /**
		* CompactLayoutRowHeader
		**/
        CompactLayoutRowHeader: string;

        /**
		* FieldListSortAscending
		**/
        FieldListSortAscending: boolean;

        /**
		* SortUsingCustomLists
		**/
        SortUsingCustomLists: boolean;

        ChangePivotCache(PivotCache?: any): void;

        /**
		* EnableWriteback
		**/
        EnableWriteback: boolean;

        /**
		* Allocation
		**/
        Allocation: EtXlAllocation;

        /**
		* ChangeList
		**/
        readonly ChangeList: EtPivotTableChangeList;

        /**
		* AllocationValue
		**/
        AllocationValue: EtXlAllocationValue;

        /**
		* AllocationWeightExpression
		**/
        AllocationWeightExpression: string;

        CommitChanges(): void;

        DiscardChanges(): void;

        RefreshDataSourceValues(): void;

        RepeatAllLabels(Repeat?: EtXlPivotFieldRepeatLabels): void;

        /**
		* Summary
		**/
        Summary: string;

        /**
		* VisualTotalsForSets
		**/
        VisualTotalsForSets: boolean;

        /**
		* ShowValuesRow
		**/
        ShowValuesRow: boolean;

        PivotValueCell(rowline?: any, columnline?: any, RHS?: EtPivotValueCell): void;

        /**
		* Hidden
		**/
        readonly Hidden: boolean;

        /**
		* PivotChart
		**/
        readonly PivotChart: Kso.KsoShape;

        DrillDown(PivotItem?: EtPivotItem, PivotLine?: any): void;

        DrillTo(PivotItem?: EtPivotItem, CubeField?: EtCubeField, PivotLine?: any): void;

        Dummy2(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: any): void;

    }

    interface EtPivotCache {
        CreatePivotChart(ChartDestination?: any, XlChartType?: any, Left?: any, Top?: any, Width?: any, Height?: any, RHS?: Kso.KsoShape): void;

        /**
		* MissingItemsLimit
		**/
        MissingItemsLimit: EtXlPivotTableMissingItems;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* Connection
		**/
        Connection: any;

        /**
		* Sql
		**/
        Sql: any;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Version
		**/
        readonly Version: EtXlPivotTableVersionList;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* CommandText
		**/
        CommandText: any;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* OptimizeCache
		**/
        OptimizeCache: boolean;

        /**
		* RefreshOnFileOpen
		**/
        RefreshOnFileOpen: boolean;

        /**
		* EnableRefresh
		**/
        EnableRefresh: boolean;

        /**
		* BackgroundQuery
		**/
        BackgroundQuery: boolean;

        /**
		* MemoryUsed
		**/
        readonly MemoryUsed: number;

        /**
		* QueryType
		**/
        readonly QueryType: EtXlQueryType;

        /**
		* RecordCount
		**/
        readonly RecordCount: number;

        Refresh(): void;

        /**
		* RefreshName
		**/
        readonly RefreshName: string;

        /**
		* RefreshDate
		**/
        readonly RefreshDate: string;

        /**
		* SourceData
		**/
        SourceData: any;

        /**
		* SavePassword
		**/
        SavePassword: boolean;

        /**
		* SourceConnectionFile
		**/
        SourceConnectionFile: string;

        /**
		* CommandType
		**/
        CommandType: EtXlCmdType;

        /**
		* MaintainConnection
		**/
        MaintainConnection: boolean;

        /**
		* RefreshPeriod
		**/
        RefreshPeriod: number;

        /**
		* Recordset
		**/
        readonly Recordset: any;

        ResetTimer(): void;

        MakeConnection(): void;

        /**
		* LocalConnection
		**/
        LocalConnection: any;

        CreatePivotTable(TableDestination?: any, TableName?: any, ReadData?: any, DefaultVersion?: any, RHS?: EtPivotTable): void;

        /**
		* UseLocalConnection
		**/
        UseLocalConnection: boolean;

        /**
		* ADOConnection
		**/
        readonly ADOConnection: any;

        /**
		* IsConnected
		**/
        readonly IsConnected: boolean;

        /**
		* OLAP
		**/
        readonly OLAP: boolean;

        /**
		* SourceType
		**/
        readonly SourceType: EtXlPivotTableSourceType;

        /**
		* SourceDataFile
		**/
        readonly SourceDataFile: string;

        /**
		* RobustConnect
		**/
        RobustConnect: EtXlRobustConnect;

        SaveAsODC(ODCFileName?: string, Description?: any, Keywords?: any): void;

        /**
		* WorkbookConnection
		**/
        readonly WorkbookConnection: EtWorkbookConnection;

        /**
		* UpgradeOnRefresh
		**/
        UpgradeOnRefresh: boolean;

    }

    interface EtColorFormat extends Kso.KsoColorFormat {}

    interface EtAxisTitle {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Top
		**/
        Top: number;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Left
		**/
        Left: number;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* FormulaLocal
		**/
        FormulaLocal: string;

        /**
		* Shadow
		**/
        Shadow: boolean;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

        /**
		* Text
		**/
        Text: string;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* Position
		**/
        Position: Kso.KsoXlChartElementPosition;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        /**
		* IncludeInLayout
		**/
        IncludeInLayout: boolean;

        /**
		* Height
		**/
        readonly Height: number;

        /**
		* Width
		**/
        readonly Width: number;

        /**
		* FormulaR1C1Local
		**/
        FormulaR1C1Local: string;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* FormulaR1C1
		**/
        FormulaR1C1: string;

    }

    interface EtPivotItems {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: EtPivotField;

        Add(Name?: string): void;

        /**
		* Count
		**/
        readonly Count: number;

        _NewEnum(RHS?: any): void;

    }

    interface EtLinkFormat {
        Update(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* AutoUpdate
		**/
        AutoUpdate: boolean;

    }

    interface EtLineFormat extends Kso.KsoLineFormat {}

    interface EtPivotItem {
        ChildItems(Index?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        Name: string;

        Delete(): void;

        /**
		* DataRange
		**/
        readonly DataRange: EtRange;

        /**
		* Parent
		**/
        readonly Parent: EtPivotField;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* _Default
		**/
        _Default: string;

        /**
		* LabelRange
		**/
        readonly LabelRange: EtRange;

        /**
		* ParentItem
		**/
        readonly ParentItem: EtPivotItem;

        /**
		* ParentShowDetail
		**/
        readonly ParentShowDetail: boolean;

        /**
		* RecordCount
		**/
        readonly RecordCount: number;

        /**
		* Position
		**/
        Position: number;

        /**
		* ShowDetail
		**/
        ShowDetail: boolean;

        /**
		* SourceName
		**/
        readonly SourceName: any;

        /**
		* Value
		**/
        Value: string;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* IsCalculated
		**/
        readonly IsCalculated: boolean;

        /**
		* DrilledDown
		**/
        DrilledDown: boolean;

        /**
		* StandardFormula
		**/
        StandardFormula: string;

        /**
		* SourceNameStandard
		**/
        readonly SourceNameStandard: string;

        DrillTo(Field?: string): void;

    }

    interface EtWorksheetFunction {
        VLookup(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: any): void;

        IsNonText(Arg1?: any, RHS?: boolean): void;

        LogEst(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: any): void;

        SumX2PY2(Arg1?: any, Arg2?: any, RHS?: number): void;

        IsNA(Arg1?: any, RHS?: boolean): void;

        DMin(Arg1?: EtRange, Arg2?: any, Arg3?: any, RHS?: number): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        DAverage(Arg1?: EtRange, Arg2?: any, Arg3?: any, RHS?: number): void;

        Intercept(Arg1?: any, Arg2?: any, RHS?: number): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Dollar(Arg1?: number, Arg2?: any, RHS?: string): void;

        WorkDay_Intl(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: number): void;

        Percentile(Arg1?: any, Arg2?: number, RHS?: number): void;

        _WSFunction(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: any): void;

        Permutationa(Arg1?: number, Arg2?: number, RHS?: number): void;

        Count(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        RoundBahtUp(Arg1?: number, RHS?: number): void;

        Transpose(Arg1?: any, RHS?: any): void;

        Average(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        Lookup(Arg1?: any, Arg2?: any, Arg3?: any, RHS?: any): void;

        Sum(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        EDate(Arg1?: any, Arg2?: any, RHS?: number): void;

        Fv(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: any, Arg5?: any, RHS?: number): void;

        Choose(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: any): void;

        Kurt(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        IsError(Arg1?: any, RHS?: boolean): void;

        MIrr(Arg1?: any, Arg2?: number, Arg3?: number, RHS?: number): void;

        Bin2Dec(Arg1?: any, RHS?: string): void;

        LogNormDist(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        Min(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        Proper(Arg1?: string, RHS?: string): void;

        ImSinh(Arg1?: any, RHS?: string): void;

        ChiTest(Arg1?: any, Arg2?: any, RHS?: number): void;

        Max(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        Npv(Arg1?: number, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        OddLYield(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, RHS?: number): void;

        StDev(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        ZTest(Arg1?: any, Arg2?: number, Arg3?: any, RHS?: number): void;

        Fixed(Arg1?: number, Arg2?: any, Arg3?: any, RHS?: string): void;

        Search(Arg1?: string, Arg2?: string, Arg3?: any, RHS?: number): void;

        Pi(RHS?: number): void;

        Pv(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: any, Arg5?: any, RHS?: number): void;

        HLookup(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: any): void;

        OddFYield(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, RHS?: number): void;

        Bin2Hex(Arg1?: any, Arg2?: any, RHS?: string): void;

        Ln(Arg1?: number, RHS?: number): void;

        Log10(Arg1?: number, RHS?: number): void;

        Round(Arg1?: number, Arg2?: number, RHS?: number): void;

        Index(Arg1?: any, Arg2?: number, Arg3?: any, Arg4?: any, RHS?: any): void;

        Rept(Arg1?: string, Arg2?: number, RHS?: string): void;

        PriceDisc(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, RHS?: number): void;

        DVar(Arg1?: EtRange, Arg2?: any, Arg3?: any, RHS?: number): void;

        DCount(Arg1?: EtRange, Arg2?: any, Arg3?: any, RHS?: number): void;

        Odd(Arg1?: number, RHS?: number): void;

        And(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: boolean): void;

        Match(Arg1?: any, Arg2?: any, Arg3?: any, RHS?: number): void;

        Irr(Arg1?: any, Arg2?: any, RHS?: number): void;

        Or(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: boolean): void;

        DSum(Arg1?: EtRange, Arg2?: any, Arg3?: any, RHS?: number): void;

        DMax(Arg1?: EtRange, Arg2?: any, Arg3?: any, RHS?: number): void;

        YearFrac(Arg1?: any, Arg2?: any, Arg3?: any, RHS?: number): void;

        DStDev(Arg1?: EtRange, Arg2?: any, Arg3?: any, RHS?: number): void;

        AmorDegrc(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, RHS?: number): void;

        Var(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        Text(Arg1?: any, Arg2?: string, RHS?: string): void;

        Effect(Arg1?: any, Arg2?: any, RHS?: number): void;

        PriceMat(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, RHS?: number): void;

        LinEst(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: any): void;

        Trend(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: any): void;

        Dummy19(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: any): void;

        Growth(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: any): void;

        VarP(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        NPer(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: any, Arg5?: any, RHS?: number): void;

        MMult(Arg1?: any, Arg2?: any, RHS?: any): void;

        Trim(Arg1?: string, RHS?: string): void;

        Pmt(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: any, Arg5?: any, RHS?: number): void;

        ChiSq_Test(Arg1?: any, Arg2?: any, RHS?: number): void;

        Rate(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: any, Arg5?: any, Arg6?: any, RHS?: number): void;

        Weekday(Arg1?: any, Arg2?: any, RHS?: number): void;

        Price(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, RHS?: number): void;

        FDist(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        Atanh(Arg1?: number, RHS?: number): void;

        Atan2(Arg1?: number, Arg2?: number, RHS?: number): void;

        IfNa(Arg1?: any, Arg2?: any, RHS?: any): void;

        Replace(Arg1?: string, Arg2?: number, Arg3?: number, Arg4?: string, RHS?: string): void;

        Asin(Arg1?: number, RHS?: number): void;

        Acot(Arg1?: number, RHS?: number): void;

        Acos(Arg1?: number, RHS?: number): void;

        Substitute(Arg1?: string, Arg2?: string, Arg3?: string, Arg4?: any, RHS?: string): void;

        Log(Arg1?: number, Arg2?: any, RHS?: number): void;

        GammaDist(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: boolean, RHS?: number): void;

        Find(Arg1?: string, Arg2?: string, Arg3?: any, RHS?: number): void;

        IsErr(Arg1?: any, RHS?: boolean): void;

        DCountA(Arg1?: EtRange, Arg2?: any, Arg3?: any, RHS?: number): void;

        Sln(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        Asinh(Arg1?: number, RHS?: number): void;

        IsText(Arg1?: any, RHS?: boolean): void;

        CoupDaysNc(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: number): void;

        IsNumber(Arg1?: any, RHS?: boolean): void;

        Syd(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: number, RHS?: number): void;

        Ddb(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: number, Arg5?: any, RHS?: number): void;

        Quartile_Inc(Arg1?: any, Arg2?: number, RHS?: number): void;

        Quartile_Exc(Arg1?: any, Arg2?: number, RHS?: number): void;

        Gamma_Inv(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        Clean(Arg1?: string, RHS?: string): void;

        MDeterm(Arg1?: any, RHS?: number): void;

        MInverse(Arg1?: any, RHS?: any): void;

        Ipmt(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: number, Arg5?: any, Arg6?: any, RHS?: number): void;

        Ppmt(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: number, Arg5?: any, Arg6?: any, RHS?: number): void;

        CountA(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        Product(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        Fact(Arg1?: number, RHS?: number): void;

        Bin2Oct(Arg1?: any, Arg2?: any, RHS?: string): void;

        DProduct(Arg1?: EtRange, Arg2?: any, Arg3?: any, RHS?: number): void;

        StDevP(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        DStDevP(Arg1?: EtRange, Arg2?: any, Arg3?: any, RHS?: number): void;

        Weibull_Dist(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: boolean, RHS?: number): void;

        DVarP(Arg1?: EtRange, Arg2?: any, Arg3?: any, RHS?: number): void;

        IsLogical(Arg1?: any, RHS?: boolean): void;

        USDollar(Arg1?: number, Arg2?: number, RHS?: string): void;

        FindB(Arg1?: string, Arg2?: string, Arg3?: any, RHS?: number): void;

        Binom_Dist_Range(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: any, RHS?: number): void;

        SearchB(Arg1?: string, Arg2?: string, Arg3?: any, RHS?: number): void;

        ReplaceB(Arg1?: string, Arg2?: number, Arg3?: number, Arg4?: string, RHS?: string): void;

        StDev_P(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        StDev_S(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        ImProduct(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: string): void;

        RoundUp(Arg1?: number, Arg2?: number, RHS?: number): void;

        RoundDown(Arg1?: number, Arg2?: number, RHS?: number): void;

        Rank(Arg1?: number, Arg2?: EtRange, Arg3?: any, RHS?: number): void;

        Days360(Arg1?: any, Arg2?: any, Arg3?: any, RHS?: number): void;

        Bitand(Arg1?: number, Arg2?: number, RHS?: number): void;

        Vdb(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: number, Arg5?: number, Arg6?: any, Arg7?: any, RHS?: number): void;

        Cot(Arg1?: number, RHS?: number): void;

        Beta_Inv(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: any, Arg5?: any, RHS?: number): void;

        AverageIf(Arg1?: EtRange, Arg2?: any, Arg3?: any, RHS?: number): void;

        Median(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        CoupPcd(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: number): void;

        ImSum(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: string): void;

        ImSub(Arg1?: any, Arg2?: any, RHS?: string): void;

        SumProduct(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        Sinh(Arg1?: number, RHS?: number): void;

        EncodeURL(Arg1?: string, RHS?: any): void;

        Cosh(Arg1?: number, RHS?: number): void;

        Tanh(Arg1?: number, RHS?: number): void;

        ImSec(Arg1?: any, RHS?: string): void;

        Acosh(Arg1?: number, RHS?: number): void;

        Pearson(Arg1?: any, Arg2?: any, RHS?: number): void;

        DGet(Arg1?: EtRange, Arg2?: any, Arg3?: any, RHS?: any): void;

        FTest(Arg1?: any, Arg2?: any, RHS?: number): void;

        Db(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: number, Arg5?: any, RHS?: number): void;

        Frequency(Arg1?: any, Arg2?: any, RHS?: any): void;

        AveDev(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        BetaDist(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: any, Arg5?: any, RHS?: number): void;

        GammaLn(Arg1?: number, RHS?: number): void;

        BetaInv(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: any, Arg5?: any, RHS?: number): void;

        BinomDist(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: boolean, RHS?: number): void;

        ChiDist(Arg1?: number, Arg2?: number, RHS?: number): void;

        ChiInv(Arg1?: number, Arg2?: number, RHS?: number): void;

        Combin(Arg1?: number, Arg2?: number, RHS?: number): void;

        Confidence(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        CritBinom(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        Even(Arg1?: number, RHS?: number): void;

        ExponDist(Arg1?: number, Arg2?: number, Arg3?: boolean, RHS?: number): void;

        FInv(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        Bitrshift(Arg1?: number, Arg2?: number, RHS?: number): void;

        ImExp(Arg1?: any, RHS?: string): void;

        Fisher(Arg1?: number, RHS?: number): void;

        FisherInv(Arg1?: number, RHS?: number): void;

        AverageIfs(Arg1?: EtRange, Arg2?: EtRange, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, RHS?: number): void;

        TDist(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        Floor(Arg1?: number, Arg2?: number, RHS?: number): void;

        GammaInv(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        Ceiling(Arg1?: number, Arg2?: number, RHS?: number): void;

        HypGeomDist(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: number, RHS?: number): void;

        Received(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, RHS?: number): void;

        LogInv(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        NegBinomDist(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        NormDist(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: boolean, RHS?: number): void;

        Dec2Hex(Arg1?: any, Arg2?: any, RHS?: string): void;

        NormSDist(Arg1?: number, RHS?: number): void;

        ErfC(Arg1?: any, RHS?: number): void;

        NormInv(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        NormSInv(Arg1?: number, RHS?: number): void;

        IsThaiDigit(Arg1?: string, RHS?: boolean): void;

        Standardize(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        Permut(Arg1?: number, Arg2?: number, RHS?: number): void;

        Poisson(Arg1?: number, Arg2?: number, Arg3?: boolean, RHS?: number): void;

        CountIfs(Arg1?: EtRange, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        Weibull(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: boolean, RHS?: number): void;

        Skew(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        SumXMY2(Arg1?: any, Arg2?: any, RHS?: number): void;

        SumX2MY2(Arg1?: any, Arg2?: any, RHS?: number): void;

        OddFPrice(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, RHS?: number): void;

        RSq(Arg1?: any, Arg2?: any, RHS?: number): void;

        Correl(Arg1?: any, Arg2?: any, RHS?: number): void;

        Covar(Arg1?: any, Arg2?: any, RHS?: number): void;

        Forecast(Arg1?: number, Arg2?: any, Arg3?: any, RHS?: number): void;

        StEyx(Arg1?: any, Arg2?: any, RHS?: number): void;

        AccrIntM(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, RHS?: number): void;

        Slope(Arg1?: any, Arg2?: any, RHS?: number): void;

        Quartile(Arg1?: any, Arg2?: number, RHS?: number): void;

        TTest(Arg1?: any, Arg2?: any, Arg3?: number, Arg4?: number, RHS?: number): void;

        Prob(Arg1?: any, Arg2?: any, Arg3?: number, Arg4?: any, RHS?: number): void;

        Hex2Bin(Arg1?: any, Arg2?: any, RHS?: string): void;

        DevSq(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        GeoMean(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        HarMean(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        SumSq(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        Large(Arg1?: any, Arg2?: number, RHS?: number): void;

        Small(Arg1?: any, Arg2?: number, RHS?: number): void;

        Coth(Arg1?: number, RHS?: number): void;

        PercentRank(Arg1?: any, Arg2?: number, Arg3?: any, RHS?: number): void;

        Mode(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        Oct2Hex(Arg1?: any, Arg2?: any, RHS?: string): void;

        TrimMean(Arg1?: any, Arg2?: number, RHS?: number): void;

        TInv(Arg1?: number, Arg2?: number, RHS?: number): void;

        ErfC_Precise(Arg1?: any, RHS?: number): void;

        Xirr(Arg1?: any, Arg2?: any, Arg3?: any, RHS?: number): void;

        Power(Arg1?: number, Arg2?: number, RHS?: number): void;

        Bitlshift(Arg1?: number, Arg2?: number, RHS?: number): void;

        Radians(Arg1?: number, RHS?: number): void;

        Degrees(Arg1?: number, RHS?: number): void;

        Subtotal(Arg1?: number, Arg2?: EtRange, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        Mode_Sngl(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        ImLog2(Arg1?: any, RHS?: string): void;

        RTD(progID?: any, server?: any, topic1?: any, topic2?: any, topic3?: any, topic4?: any, topic5?: any, topic6?: any, topic7?: any, topic8?: any, topic9?: any, topic10?: any, topic11?: any, topic12?: any, topic13?: any, topic14?: any, topic15?: any, topic16?: any, topic17?: any, topic18?: any, topic19?: any, topic20?: any, topic21?: any, topic22?: any, topic23?: any, topic24?: any, topic25?: any, topic26?: any, topic27?: any, topic28?: any, RHS?: any): void;

        SumIf(Arg1?: EtRange, Arg2?: any, Arg3?: any, RHS?: number): void;

        CountIf(Arg1?: EtRange, Arg2?: any, RHS?: number): void;

        CountBlank(Arg1?: EtRange, RHS?: number): void;

        Ispmt(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: number, RHS?: number): void;

        FilterXML(Arg1?: string, Arg2?: string, RHS?: any): void;

        Roman(Arg1?: number, Arg2?: any, RHS?: string): void;

        Asc(Arg1?: string, RHS?: string): void;

        ThaiNumString(Arg1?: number, RHS?: string): void;

        Dbcs(Arg1?: string, RHS?: string): void;

        Phonetic(Arg1?: EtRange, RHS?: string): void;

        BahtText(Arg1?: number, RHS?: string): void;

        ThaiDayOfWeek(Arg1?: number, RHS?: string): void;

        NetworkDays_Intl(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: number): void;

        ThaiDigit(Arg1?: string, RHS?: string): void;

        ThaiMonthOfYear(Arg1?: number, RHS?: string): void;

        ThaiNumSound(Arg1?: number, RHS?: string): void;

        AmorLinc(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, RHS?: number): void;

        ThaiStringLength(Arg1?: string, RHS?: number): void;

        RoundBahtDown(Arg1?: number, RHS?: number): void;

        OddLPrice(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, RHS?: number): void;

        ThaiYear(Arg1?: number, RHS?: number): void;

        Hex2Dec(Arg1?: any, RHS?: string): void;

        T_Inv_2T(Arg1?: number, Arg2?: number, RHS?: number): void;

        Hex2Oct(Arg1?: any, Arg2?: any, RHS?: string): void;

        Dec2Bin(Arg1?: any, Arg2?: any, RHS?: string): void;

        ImCot(Arg1?: any, RHS?: string): void;

        ImCos(Arg1?: any, RHS?: string): void;

        Dec2Oct(Arg1?: any, Arg2?: any, RHS?: string): void;

        Oct2Bin(Arg1?: any, Arg2?: any, RHS?: string): void;

        FVSchedule(Arg1?: any, Arg2?: any, RHS?: number): void;

        Oct2Dec(Arg1?: any, RHS?: string): void;

        ImDiv(Arg1?: any, Arg2?: any, RHS?: string): void;

        ImPower(Arg1?: any, Arg2?: any, RHS?: string): void;

        ImAbs(Arg1?: any, RHS?: string): void;

        Rank_Avg(Arg1?: number, Arg2?: EtRange, Arg3?: any, RHS?: number): void;

        ImSqrt(Arg1?: any, RHS?: string): void;

        ImLn(Arg1?: any, RHS?: string): void;

        ImLog10(Arg1?: any, RHS?: string): void;

        ImSin(Arg1?: any, RHS?: string): void;

        ImArgument(Arg1?: any, RHS?: string): void;

        ImConjugate(Arg1?: any, RHS?: string): void;

        Imaginary(Arg1?: any, RHS?: number): void;

        ImReal(Arg1?: any, RHS?: number): void;

        Complex(Arg1?: any, Arg2?: any, Arg3?: any, RHS?: string): void;

        SeriesSum(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: number): void;

        FactDouble(Arg1?: any, RHS?: number): void;

        SqrtPi(Arg1?: any, RHS?: number): void;

        Quotient(Arg1?: any, Arg2?: any, RHS?: number): void;

        Delta(Arg1?: any, Arg2?: any, RHS?: number): void;

        Duration(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, RHS?: number): void;

        GeStep(Arg1?: any, Arg2?: any, RHS?: number): void;

        IsEven(Arg1?: any, RHS?: boolean): void;

        IsOdd(Arg1?: any, RHS?: boolean): void;

        Xor(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: boolean): void;

        MRound(Arg1?: any, Arg2?: any, RHS?: number): void;

        Erf(Arg1?: any, Arg2?: any, RHS?: number): void;

        BesselI(Arg1?: any, Arg2?: any, RHS?: number): void;

        BesselY(Arg1?: any, Arg2?: any, RHS?: number): void;

        BesselK(Arg1?: any, Arg2?: any, RHS?: number): void;

        BesselJ(Arg1?: any, Arg2?: any, RHS?: number): void;

        Xnpv(Arg1?: any, Arg2?: any, RHS?: number): void;

        LogNorm_Dist(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: boolean, RHS?: number): void;

        YieldMat(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, RHS?: number): void;

        IntRate(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, RHS?: number): void;

        Disc(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, RHS?: number): void;

        YieldDisc(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, RHS?: number): void;

        TBillEq(Arg1?: any, Arg2?: any, Arg3?: any, RHS?: number): void;

        TBillPrice(Arg1?: any, Arg2?: any, Arg3?: any, RHS?: number): void;

        TBillYield(Arg1?: any, Arg2?: any, Arg3?: any, RHS?: number): void;

        DollarDe(Arg1?: any, Arg2?: any, RHS?: number): void;

        DollarFr(Arg1?: any, Arg2?: any, RHS?: number): void;

        Nominal(Arg1?: any, Arg2?: any, RHS?: number): void;

        CumPrinc(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, RHS?: number): void;

        CumIPmt(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, RHS?: number): void;

        EoMonth(Arg1?: any, Arg2?: any, RHS?: number): void;

        CoupDayBs(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: number): void;

        CoupDays(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: number): void;

        CoupNcd(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: number): void;

        Gcd(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        CoupNum(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: number): void;

        MDuration(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, RHS?: number): void;

        Norm_S_Dist(Arg1?: number, Arg2?: boolean, RHS?: number): void;

        RandBetween(Arg1?: any, Arg2?: any, RHS?: number): void;

        Erf_Precise(Arg1?: any, RHS?: number): void;

        WeekNum(Arg1?: any, Arg2?: any, RHS?: number): void;

        Convert(Arg1?: any, Arg2?: any, Arg3?: any, RHS?: number): void;

        AccrInt(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, RHS?: number): void;

        WorkDay(Arg1?: any, Arg2?: any, Arg3?: any, RHS?: number): void;

        NetworkDays(Arg1?: any, Arg2?: any, Arg3?: any, RHS?: number): void;

        MultiNomial(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        Lcm(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        SumIfs(Arg1?: EtRange, Arg2?: EtRange, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, RHS?: number): void;

        IfError(Arg1?: any, Arg2?: any, RHS?: any): void;

        Aggregate(Arg1?: number, Arg2?: number, Arg3?: EtRange, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        Confidence_Norm(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        Confidence_T(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        F_Test(Arg1?: any, Arg2?: any, RHS?: number): void;

        Covariance_S(Arg1?: any, Arg2?: any, RHS?: number): void;

        Covariance_P(Arg1?: any, Arg2?: any, RHS?: number): void;

        Expon_Dist(Arg1?: number, Arg2?: number, Arg3?: boolean, RHS?: number): void;

        T_Test(Arg1?: any, Arg2?: any, Arg3?: number, Arg4?: number, RHS?: number): void;

        Gamma_Dist(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: boolean, RHS?: number): void;

        Mode_Mult(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: any): void;

        Norm_Dist(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: boolean, RHS?: number): void;

        Norm_Inv(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        Percentile_Inc(Arg1?: any, Arg2?: number, RHS?: number): void;

        Percentile_Exc(Arg1?: any, Arg2?: number, RHS?: number): void;

        Ceiling_Precise(Arg1?: number, Arg2?: any, RHS?: number): void;

        PercentRank_Exc(Arg1?: any, Arg2?: number, Arg3?: any, RHS?: number): void;

        PercentRank_Inc(Arg1?: any, Arg2?: number, Arg3?: any, RHS?: number): void;

        Poisson_Dist(Arg1?: number, Arg2?: number, Arg3?: boolean, RHS?: number): void;

        PDuration(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        Rank_Eq(Arg1?: number, Arg2?: EtRange, Arg3?: any, RHS?: number): void;

        T_Dist(Arg1?: number, Arg2?: number, Arg3?: boolean, RHS?: number): void;

        T_Dist_2T(Arg1?: number, Arg2?: number, RHS?: number): void;

        T_Dist_RT(Arg1?: number, Arg2?: number, RHS?: number): void;

        T_Inv(Arg1?: number, Arg2?: number, RHS?: number): void;

        Var_P(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        Var_S(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        ISO_Ceiling(Arg1?: number, Arg2?: any, RHS?: number): void;

        Dummy21(Arg1?: number, Arg2?: number, RHS?: number): void;

        Beta_Dist(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: boolean, Arg5?: any, Arg6?: any, RHS?: number): void;

        ChiSq_Dist(Arg1?: number, Arg2?: number, Arg3?: boolean, RHS?: number): void;

        ChiSq_Dist_RT(Arg1?: number, Arg2?: number, RHS?: number): void;

        ChiSq_Inv(Arg1?: number, Arg2?: number, RHS?: number): void;

        ChiSq_Inv_RT(Arg1?: number, Arg2?: number, RHS?: number): void;

        F_Dist(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: boolean, RHS?: number): void;

        F_Dist_RT(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        F_Inv(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        F_Inv_RT(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        HypGeom_Dist(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: number, Arg5?: boolean, RHS?: number): void;

        LogNorm_Inv(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        NegBinom_Dist(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: boolean, RHS?: number): void;

        Norm_S_Inv(Arg1?: number, RHS?: number): void;

        Acoth(Arg1?: number, RHS?: number): void;

        Z_Test(Arg1?: any, Arg2?: number, Arg3?: any, RHS?: number): void;

        Binom_Dist(Arg1?: number, Arg2?: number, Arg3?: number, Arg4?: boolean, RHS?: number): void;

        Binom_Inv(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        GammaLn_Precise(Arg1?: number, RHS?: number): void;

        Floor_Precise(Arg1?: number, Arg2?: any, RHS?: number): void;

        Csc(Arg1?: number, RHS?: number): void;

        Csch(Arg1?: number, RHS?: number): void;

        Sec(Arg1?: number, RHS?: number): void;

        Sech(Arg1?: number, RHS?: number): void;

        ImTan(Arg1?: any, RHS?: string): void;

        ImCsc(Arg1?: any, RHS?: string): void;

        ImCsch(Arg1?: any, RHS?: string): void;

        ImSech(Arg1?: any, RHS?: string): void;

        Phi(Arg1?: number, RHS?: number): void;

        Bitor(Arg1?: number, Arg2?: number, RHS?: number): void;

        Bitxor(Arg1?: number, Arg2?: number, RHS?: number): void;

        Combina(Arg1?: number, Arg2?: number, RHS?: number): void;

        Base(Arg1?: number, Arg2?: number, Arg3?: any, RHS?: string): void;

        Decimal(Arg1?: string, Arg2?: number, RHS?: number): void;

        Days(Arg1?: any, Arg2?: any, RHS?: number): void;

        Gamma(Arg1?: number, RHS?: number): void;

        Gauss(Arg1?: number, RHS?: number): void;

        Skew_p(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: number): void;

        Rri(Arg1?: number, Arg2?: number, Arg3?: number, RHS?: number): void;

        Unichar(Arg1?: number, RHS?: string): void;

        Unicode(Arg1?: string, RHS?: number): void;

        ImCosh(Arg1?: any, RHS?: string): void;

        Munit(Arg1?: number, RHS?: any): void;

        Arabic(Arg1?: string, RHS?: number): void;

        IsoWeekNum(Arg1?: number, Arg2?: any, RHS?: number): void;

        NumberValue(Arg1?: string, Arg2?: string, Arg3?: string, RHS?: number): void;

        IsFormula(Arg1?: EtRange, RHS?: boolean): void;

        Ceiling_Math(Arg1?: number, Arg2?: any, Arg3?: any, RHS?: number): void;

        Floor_Math(Arg1?: number, Arg2?: any, Arg3?: any, RHS?: number): void;

        WebService(Arg1?: string, RHS?: any): void;

    }

    interface EtDownBars {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtXmlDataBinding {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* SourceUrl
		**/
        readonly SourceUrl: string;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* _Default
		**/
        readonly _Default: string;

        Refresh(RHS?: EtXlXmlImportResult): void;

        LoadSettings(Url?: string): void;

        ClearSettings(): void;

    }

    interface EtPictureFormat extends Kso.KsoPictureFormat {}

    interface EtTextEffectFormat extends Kso.KsoTextEffectFormat {}

    interface EtDiagramNodeChildren extends Kso.KsoDiagramNodeChildren {}

    interface EtOptionButtons {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Text
		**/
        Text: string;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        /**
		* Accelerator
		**/
        Accelerator: any;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        Add(Left?: number, Top?: number, Width?: number, Height?: number, RHS?: EtOptionButton): void;

        _Dummy22(): void;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* GroupBox
		**/
        readonly GroupBox: EtGroupBox;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* _Default
		**/
        _Default: number;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Display3DShading
		**/
        Display3DShading: boolean;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Value
		**/
        Value: any;

        /**
		* LinkedCell
		**/
        LinkedCell: string;

        Group(RHS?: EtGroupObject): void;

        /**
		* PhoneticAccelerator
		**/
        PhoneticAccelerator: any;

        /**
		* Count
		**/
        readonly Count: number;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtShadowFormat extends Kso.KsoShadowFormat {}

    interface EtChartObjects {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Dummy3(): void;

        /**
		* Count
		**/
        readonly Count: number;

        _Copy(RHS?: any): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        Cut(RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        /**
		* ProtectChartObject
		**/
        ProtectChartObject: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        Add(Left?: number, Top?: number, Width?: number, Height?: number, RHS?: EtChartObject): void;

        _Dummy28(): void;

        _Dummy27(): void;

        _Dummy25(): void;

        _Dummy22(): void;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* RoundedCorners
		**/
        RoundedCorners: boolean;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Shadow
		**/
        Shadow: boolean;

        Copy(RHS?: any): void;

        Group(RHS?: EtGroupObject): void;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

        _Default(Index?: any, RHS?: any): void;

    }

    interface EtChartObject {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        _Copy(RHS?: any): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        Cut(RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        /**
		* ProtectChartObject
		**/
        ProtectChartObject: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        Activate(RHS?: any): void;

        /**
		* Chart
		**/
        readonly Chart: EtChart;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* RoundedCorners
		**/
        RoundedCorners: boolean;

        /**
		* Shadow
		**/
        Shadow: boolean;

        Copy(RHS?: any): void;

    }

    interface EtThreeDFormat extends Kso.KsoThreeDFormat {}

    interface EtFillFormat extends Kso.KsoFillFormat {}

    interface EtWorksheetDataConnection {
        /**
		* Connection
		**/
        readonly Connection: any;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* CommandType
		**/
        CommandType: EtXlCmdType;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* CommandText
		**/
        CommandText: any;

        /**
		* Parent
		**/
        readonly Parent: any;

    }

    interface EtDiagramNodes extends Kso.KsoDiagramNodes {}

    interface EtDiagramNode extends Kso.KsoDiagramNode {}

    interface EtLeaderLines {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Select(): void;

        Delete(): void;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtSlicerPivotTables {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtPivotTable): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        RemovePivotTable(PivotTable?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtPivotTable): void;

        AddPivotTable(PivotTable?: EtPivotTable): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtSmartTagAction {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* _Default
		**/
        readonly _Default: string;

        Execute(): void;

        /**
		* Type
		**/
        readonly Type: EtXlSmartTagControlType;

        /**
		* ExpandHelp
		**/
        ExpandHelp: boolean;

        /**
		* PresentInPane
		**/
        readonly PresentInPane: boolean;

        /**
		* CheckboxState
		**/
        CheckboxState: boolean;

        /**
		* TextboxText
		**/
        TextboxText: string;

        /**
		* ListSelection
		**/
        ListSelection: number;

        /**
		* RadioGroupSelection
		**/
        RadioGroupSelection: number;

        /**
		* ActiveXControl
		**/
        readonly ActiveXControl: any;

    }

    interface EtModelTable {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* SourceWorkbookConnection
		**/
        readonly SourceWorkbookConnection: EtWorkbookConnection;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* SourceName
		**/
        readonly SourceName: string;

        /**
		* ModelTableColumns
		**/
        readonly ModelTableColumns: EtModelTableColumns;

        _Dummy7(): void;

        Refresh(): void;

        /**
		* RecordCount
		**/
        readonly RecordCount: number;

    }

    interface EtShape extends Kso.KsoShape {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* DrawingObject
		**/
        readonly DrawingObject: any;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* LinkFormat
		**/
        readonly LinkFormat: EtLinkFormat;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* ControlFormat
		**/
        readonly ControlFormat: EtControlFormat;

        /**
		* Placement
		**/
        Placement: EtXlPlacement;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Hyperlink
		**/
        readonly Hyperlink: EtHyperlink;

        /**
		* Locked
		**/
        Locked: boolean;

        CopyPicture(Appearance?: any, Format?: any): void;

        /**
		* OLEFormat
		**/
        readonly OLEFormat: EtOLEFormat;

        /**
		* FormControlType
		**/
        readonly FormControlType: EtXlFormControl;

        /**
		* ID
		**/
        readonly ID: number;

    }

    interface EtSlicer {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Width
		**/
        Width: number;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Top
		**/
        Top: number;

        /**
		* Left
		**/
        Left: number;

        /**
		* DisableMoveResizeUI
		**/
        DisableMoveResizeUI: boolean;

        /**
		* Height
		**/
        Height: number;

        /**
		* RowHeight
		**/
        RowHeight: number;

        /**
		* ColumnWidth
		**/
        ColumnWidth: number;

        /**
		* NumberOfColumns
		**/
        NumberOfColumns: number;

        /**
		* DisplayHeader
		**/
        DisplayHeader: boolean;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* SlicerCache
		**/
        readonly SlicerCache: EtSlicerCache;

        /**
		* SlicerCacheLevel
		**/
        readonly SlicerCacheLevel: EtSlicerCacheLevel;

        /**
		* Shape
		**/
        readonly Shape: Kso.KsoShape;

        /**
		* Style
		**/
        Style: any;

        Delete(): void;

        Cut(): void;

        Copy(): void;

        /**
		* ActiveItem
		**/
        readonly ActiveItem: EtSlicerItem;

        /**
		* TimelineViewState
		**/
        readonly TimelineViewState: EtTimelineViewState;

        /**
		* SlicerCacheType
		**/
        readonly SlicerCacheType: EtXlSlicerCacheType;

    }

    interface EtApplication {
        OnUndo(Text?: string, Procedure?: string, lcid?: number): void;

        /**
		* ActiveMenuBar
		**/
        readonly ActiveMenuBar: EtMenuBar;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        Evaluate(Name?: any, lcid?: number, RHS?: any): void;

        _Run2(Macro?: any, Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, lcid?: number, RHS?: any): void;

        /**
		* ActiveWindow
		**/
        readonly ActiveWindow: EtWindow;

        /**
		* ActiveCell
		**/
        readonly ActiveCell: EtRange;

        /**
		* ThousandsSeparator
		**/
        ThousandsSeparator: string;

        /**
		* WorksheetFunction
		**/
        readonly WorksheetFunction: EtWorksheetFunction;

        /**
		* PrintCommunication
		**/
        PrintCommunication: boolean;

        /**
		* SmartArtLayouts
		**/
        readonly SmartArtLayouts: Kso.KsoSmartArtLayouts;

        GetCustomListNum(ListArray?: any, lcid?: number, RHS?: number): void;

        DDEInitiate(App?: string, Topic?: string, lcid?: number, RHS?: number): void;

        /**
		* MapPaperSize
		**/
        MapPaperSize: boolean;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* ActivePrinter
		**/
        ActivePrinter: number;

        /**
		* LanguageSettings
		**/
        readonly LanguageSettings: Kso.KsoLanguageSettings;

        /**
		* MoveAfterReturnDirection
		**/
        MoveAfterReturnDirection: number;

        /**
		* Calculation
		**/
        Calculation: number;

        /**
		* Parent
		**/
        readonly Parent: EtApplication;

        /**
		* GenerateTableRefs
		**/
        GenerateTableRefs: number;

        /**
		* TransitionNavigKeys
		**/
        TransitionNavigKeys: number;

        Union(Arg1?: EtRange, Arg2?: EtRange, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, lcid?: number, RHS?: EtRange): void;

        Repeat(lcid?: number): void;

        /**
		* ActiveChart
		**/
        readonly ActiveChart: EtChart;

        FindFile(lcid?: number, RHS?: boolean): void;

        /**
		* Width
		**/
        Width: number;

        /**
		* ActiveDialog
		**/
        readonly ActiveDialog: EtDialogSheet;

        /**
		* Cells
		**/
        readonly Cells: EtRange;

        CalculateFull(): void;

        DoubleClick(lcid?: number): void;

        /**
		* DisplayFullScreen
		**/
        DisplayFullScreen: number;

        /**
		* ActiveSheet
		**/
        readonly ActiveSheet: any;

        /**
		* ActiveWorkbook
		**/
        readonly ActiveWorkbook: EtWorkbook;

        /**
		* AltStartupPath
		**/
        AltStartupPath: number;

        /**
		* Excel4MacroSheets
		**/
        readonly Excel4MacroSheets: EtSheets;

        ShortcutMenus(Index?: number, RHS?: EtMenu): void;

        /**
		* DeferAsyncQueries
		**/
        DeferAsyncQueries: boolean;

        FileConverters(Index1?: any, Index2?: any, lcid?: number, RHS?: any): void;

        /**
		* AddIns
		**/
        readonly AddIns: EtAddIns;

        /**
		* Assistant
		**/
        readonly Assistant: Kso.KsoAssistant;

        /**
		* Modules
		**/
        readonly Modules: EtModules;

        /**
		* FileValidationPivot
		**/
        FileValidationPivot: EtXlFileValidationPivotMode;

        /**
		* Sheets
		**/
        readonly Sheets: EtSheets;

        ResetTipWizard(lcid?: number): void;

        Calculate(lcid?: number): void;

        /**
		* PromptForSummaryInfo
		**/
        PromptForSummaryInfo: number;

        /**
		* Charts
		**/
        readonly Charts: EtSheets;

        /**
		* Rows
		**/
        readonly Rows: EtRange;

        AddChartAutoFormat(Chart?: any, Name?: string, Description?: any, lcid?: number): void;

        DDEExecute(Channel?: number, String?: string, lcid?: number): void;

        /**
		* Columns
		**/
        readonly Columns: EtRange;

        /**
		* MergeInstances
		**/
        MergeInstances: boolean;

        InchesToPoints(Inches?: number, lcid?: number, RHS?: number): void;

        /**
		* CommandBars
		**/
        readonly CommandBars: Kso.KsoCommandBars;

        /**
		* DDEAppReturnCode
		**/
        readonly DDEAppReturnCode: number;

        /**
		* LargeOperationCellThousandCount
		**/
        LargeOperationCellThousandCount: number;

        /**
		* ShowChartTipValues
		**/
        ShowChartTipValues: boolean;

        Quit(): void;

        DDEPoke(Channel?: number, Item?: any, Data?: any, lcid?: number): void;

        /**
		* AutoCorrect
		**/
        readonly AutoCorrect: EtAutoCorrect;

        DDERequest(Channel?: number, Item?: string, lcid?: number, RHS?: any): void;

        _WSFunction(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, lcid?: number, RHS?: any): void;

        _Evaluate(Name?: any, lcid?: number, RHS?: any): void;

        /**
		* DisplayPasteOptions
		**/
        DisplayPasteOptions: boolean;

        /**
		* Visible
		**/
        Visible: number;

        DDETerminate(Channel?: number, lcid?: number): void;

        /**
		* ChartDataPointTrack
		**/
        ChartDataPointTrack: boolean;

        /**
		* FixedDecimal
		**/
        FixedDecimal: number;

        /**
		* AskToUpdateLinks
		**/
        AskToUpdateLinks: number;

        /**
		* ThisWorkbook
		**/
        readonly ThisWorkbook: number;

        /**
		* DialogSheets
		**/
        readonly DialogSheets: EtSheets;

        ExecuteExcel4Macro(String?: string, lcid?: number, RHS?: any): void;

        /**
		* ProductCode
		**/
        readonly ProductCode: string;

        Intersect(Arg1?: EtRange, Arg2?: EtRange, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, lcid?: number, RHS?: EtRange): void;

        /**
		* MenuBars
		**/
        readonly MenuBars: EtMenuBars;

        Undo(lcid?: number): void;

        /**
		* Names
		**/
        readonly Names: EtNames;

        Range(Cell1?: any, Cell2?: any, RHS?: EtRange): void;

        /**
		* Left
		**/
        Left: number;

        Run(Macro?: any, Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: any): void;

        /**
		* UILanguage
		**/
        UILanguage: number;

        /**
		* EnableAnimations
		**/
        EnableAnimations: number;

        /**
		* Selection
		**/
        readonly Selection: number;

        /**
		* AlertBeforeOverwriting
		**/
        AlertBeforeOverwriting: number;

        SendKeys(Keys?: any, Wait?: any, lcid?: number): void;

        /**
		* Toolbars
		**/
        readonly Toolbars: EtToolbars;

        /**
		* Workbooks
		**/
        readonly Workbooks: EtWorkbooks;

        /**
		* OnEntry
		**/
        OnEntry: number;

        /**
		* Windows
		**/
        readonly Windows: EtWindows;

        /**
		* StartupPath
		**/
        readonly StartupPath: number;

        /**
		* Worksheets
		**/
        readonly Worksheets: EtSheets;

        /**
		* Excel4IntlMacroSheets
		**/
        readonly Excel4IntlMacroSheets: EtSheets;

        /**
		* CalculateBeforeSave
		**/
        CalculateBeforeSave: number;

        ActivateMicrosoftApp(Index?: EtXlMSApplication, lcid?: number): void;

        /**
		* ShowWindowsInTaskbar
		**/
        ShowWindowsInTaskbar: boolean;

        AddCustomList(ListArray?: any, ByRow?: any, lcid?: number): void;

        /**
		* Build
		**/
        readonly Build: number;

        Caller(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Hwnd
		**/
        readonly Hwnd: number;

        Volatile(Volatile?: any, lcid?: number): void;

        /**
		* CanPlaySounds
		**/
        readonly CanPlaySounds: number;

        /**
		* CanRecordSounds
		**/
        readonly CanRecordSounds: number;

        /**
		* _Default
		**/
        readonly _Default: string;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* CellDragAndDrop
		**/
        CellDragAndDrop: number;

        CentimetersToPoints(Centimeters?: number, lcid?: number, RHS?: number): void;

        CheckSpelling(Word?: string, CustomDictionary?: any, IgnoreUppercase?: any, lcid?: number, RHS?: boolean): void;

        /**
		* EnableCheckFileExtensions
		**/
        EnableCheckFileExtensions: boolean;

        ClipboardFormats(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* DisplayClipboardWindow
		**/
        DisplayClipboardWindow: number;

        /**
		* ColorButtons
		**/
        ColorButtons: boolean;

        /**
		* CommandUnderlines
		**/
        CommandUnderlines: number;

        /**
		* UseClusterConnector
		**/
        UseClusterConnector: boolean;

        /**
		* ConstrainNumeric
		**/
        ConstrainNumeric: number;

        ConvertFormula(Formula?: any, FromReferenceStyle?: EtXlReferenceStyle, ToReferenceStyle?: any, ToAbsolute?: any, RelativeTo?: any, lcid?: number, RHS?: any): void;

        /**
		* Value
		**/
        readonly Value: string;

        /**
		* CopyObjectsWithCells
		**/
        CopyObjectsWithCells: number;

        /**
		* Cursor
		**/
        Cursor: number;

        /**
		* CustomListCount
		**/
        readonly CustomListCount: number;

        /**
		* CutCopyMode
		**/
        CutCopyMode: number;

        /**
		* SheetsInNewWorkbook
		**/
        SheetsInNewWorkbook: number;

        /**
		* EnableAutoComplete
		**/
        EnableAutoComplete: boolean;

        /**
		* DataEntryMode
		**/
        DataEntryMode: number;

        Dummy9(RHS?: any): void;

        Dummy8(Arg1?: any, RHS?: any): void;

        Dummy7(RHS?: any): void;

        Dummy6(RHS?: any): void;

        Dummy5(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, RHS?: any): void;

        Dummy4(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, RHS?: any): void;

        Dummy3(RHS?: any): void;

        Dummy2(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, RHS?: any): void;

        Dummy1(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, RHS?: any): void;

        Dummy14(): void;

        Dummy13(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: any): void;

        Dummy12(p1?: EtPivotTable, p2?: EtPivotTable): void;

        Dummy11(): void;

        Dummy10(arg?: any, RHS?: boolean): void;

        /**
		* UseSystemSeparators
		**/
        UseSystemSeparators: boolean;

        _MacroOptions(Macro?: any, Description?: any, HasMenu?: any, MenuText?: any, HasShortcutKey?: any, ShortcutKey?: any, Category?: any, StatusBar?: any, HelpContextID?: any, HelpFile?: any, lcid?: number): void;

        /**
		* DefaultFilePath
		**/
        DefaultFilePath: number;

        DeleteChartAutoFormat(Name?: string, lcid?: number): void;

        /**
		* ShowDevTools
		**/
        ShowDevTools: boolean;

        DeleteCustomList(ListNum?: number, lcid?: number): void;

        /**
		* WindowsForPens
		**/
        readonly WindowsForPens: number;

        Save(Filename?: any, lcid?: number): void;

        /**
		* MailSystem
		**/
        readonly MailSystem: number;

        GetCustomListContents(ListNum?: number, lcid?: number, RHS?: any): void;

        /**
		* Dialogs
		**/
        readonly Dialogs: EtDialogs;

        /**
		* Quitting
		**/
        readonly Quitting: boolean;

        /**
		* DisplayAlerts
		**/
        DisplayAlerts: number;

        /**
		* DisplayFormulaBar
		**/
        DisplayFormulaBar: number;

        /**
		* DisplayNoteIndicator
		**/
        DisplayNoteIndicator: boolean;

        /**
		* DisplayCommentIndicator
		**/
        DisplayCommentIndicator: EtXlCommentDisplayMode;

        /**
		* DisplayExcel4Menus
		**/
        DisplayExcel4Menus: number;

        /**
		* UserName
		**/
        UserName: number;

        /**
		* UsableHeight
		**/
        readonly UsableHeight: number;

        /**
		* DisplayRecentFiles
		**/
        DisplayRecentFiles: boolean;

        /**
		* DisplayScrollBars
		**/
        DisplayScrollBars: number;

        /**
		* DisplayStatusBar
		**/
        DisplayStatusBar: number;

        /**
		* EditDirectlyInCell
		**/
        EditDirectlyInCell: number;

        /**
		* DefaultSaveFormat
		**/
        DefaultSaveFormat: EtXlFileFormat;

        /**
		* EnableCancelKey
		**/
        EnableCancelKey: number;

        /**
		* EnableSound
		**/
        EnableSound: boolean;

        /**
		* EnableTipWizard
		**/
        EnableTipWizard: number;

        /**
		* FileSearch
		**/
        readonly FileSearch: Kso.KsoFileSearch;

        /**
		* FileFind
		**/
        readonly FileFind: Kso.KsoFind;

        RecordMacro(BasicCode?: any, XlmCode?: any, lcid?: number): void;

        _FindFile(lcid?: number): void;

        /**
		* FixedDecimalPlaces
		**/
        FixedDecimalPlaces: number;

        GetOpenFilename(FileFilter?: any, FilterIndex?: any, Title?: any, ButtonText?: any, MultiSelect?: any, lcid?: number, RHS?: any): void;

        GetSaveAsFilename(InitialFilename?: any, FileFilter?: any, FilterIndex?: any, Title?: any, ButtonText?: any, lcid?: number, RHS?: any): void;

        Goto(Reference?: any, Scroll?: any, lcid?: number): void;

        /**
		* DisplayFormulaAutoComplete
		**/
        DisplayFormulaAutoComplete: boolean;

        /**
		* Height
		**/
        Height: number;

        Help(HelpFile?: any, HelpContextID?: any, lcid?: number): void;

        /**
		* IgnoreRemoteRequests
		**/
        IgnoreRemoteRequests: number;

        InputBox(Prompt?: string, Title?: any, Default?: any, Left?: any, Top?: any, HelpFile?: any, HelpContextID?: any, Type?: any, lcid?: number, RHS?: any): void;

        /**
		* Interactive
		**/
        Interactive: number;

        International(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* ShowStartupDialog
		**/
        ShowStartupDialog: boolean;

        /**
		* COMAddIns
		**/
        readonly COMAddIns: Kso.KsoCOMAddIns;

        /**
		* Iteration
		**/
        Iteration: number;

        /**
		* StandardFont
		**/
        StandardFont: number;

        /**
		* MemoryFree
		**/
        readonly MemoryFree: number;

        /**
		* LargeButtons
		**/
        LargeButtons: boolean;

        /**
		* LibraryPath
		**/
        readonly LibraryPath: number;

        MailLogoff(lcid?: number): void;

        MailLogon(Name?: any, Password?: any, DownloadNewMail?: any, lcid?: number): void;

        /**
		* ShowSelectionFloaties
		**/
        ShowSelectionFloaties: boolean;

        /**
		* MailSession
		**/
        readonly MailSession: number;

        /**
		* MathCoprocessorAvailable
		**/
        readonly MathCoprocessorAvailable: number;

        /**
		* MaxChange
		**/
        MaxChange: number;

        /**
		* EnableLargeOperationAlert
		**/
        EnableLargeOperationAlert: boolean;

        /**
		* EnableLivePreview
		**/
        EnableLivePreview: boolean;

        /**
		* MaxIterations
		**/
        MaxIterations: number;

        /**
		* MemoryTotal
		**/
        readonly MemoryTotal: number;

        /**
		* MemoryUsed
		**/
        readonly MemoryUsed: number;

        /**
		* MouseAvailable
		**/
        readonly MouseAvailable: number;

        /**
		* MoveAfterReturn
		**/
        MoveAfterReturn: number;

        /**
		* RecentFiles
		**/
        readonly RecentFiles: EtRecentFiles;

        /**
		* Name
		**/
        readonly Name: string;

        NextLetter(lcid?: number, RHS?: EtWorkbook): void;

        /**
		* NetworkTemplatesPath
		**/
        readonly NetworkTemplatesPath: number;

        /**
		* Dummy23
		**/
        Dummy23: boolean;

        /**
		* Dummy22
		**/
        Dummy22: boolean;

        Dummy20(grfCompareFunctions?: number, RHS?: any): void;

        /**
		* CalculationVersion
		**/
        readonly CalculationVersion: number;

        /**
		* ODBCErrors
		**/
        readonly ODBCErrors: EtODBCErrors;

        /**
		* ODBCTimeout
		**/
        ODBCTimeout: number;

        /**
		* OnCalculate
		**/
        OnCalculate: number;

        /**
		* OnData
		**/
        OnData: number;

        /**
		* OnDoubleClick
		**/
        OnDoubleClick: number;

        OnKey(Key?: string, Procedure?: any, lcid?: number): void;

        OnRepeat(Text?: string, Procedure?: string, lcid?: number): void;

        /**
		* OnSheetActivate
		**/
        OnSheetActivate: number;

        /**
		* OnSheetDeactivate
		**/
        OnSheetDeactivate: number;

        OnTime(EarliestTime?: any, Procedure?: string, LatestTime?: any, Schedule?: any, lcid?: number): void;

        /**
		* OnWindow
		**/
        OnWindow: number;

        /**
		* OperatingSystem
		**/
        readonly OperatingSystem: number;

        /**
		* OrganizationName
		**/
        readonly OrganizationName: number;

        /**
		* Path
		**/
        readonly Path: number;

        /**
		* PathSeparator
		**/
        readonly PathSeparator: number;

        PreviousSelections(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* PivotTableSelection
		**/
        PivotTableSelection: boolean;

        /**
		* Dummy101
		**/
        readonly Dummy101: any;

        /**
		* RecordRelative
		**/
        readonly RecordRelative: number;

        /**
		* ReferenceStyle
		**/
        ReferenceStyle: number;

        /**
		* StandardFontSize
		**/
        StandardFontSize: number;

        RegisteredFunctions(Index1?: any, Index2?: any, lcid?: number, RHS?: any): void;

        /**
		* ExtendList
		**/
        ExtendList: boolean;

        RegisterXLL(Filename?: string, lcid?: number, RHS?: boolean): void;

        /**
		* RollZoom
		**/
        RollZoom: boolean;

        SaveWorkspace(Filename?: any, lcid?: number): void;

        /**
		* ScreenUpdating
		**/
        ScreenUpdating: number;

        SetDefaultChart(FormatName?: any, Gallery?: any): void;

        /**
		* ShowChartTipNames
		**/
        ShowChartTipNames: boolean;

        /**
		* StatusBar
		**/
        StatusBar: number;

        /**
		* TemplatesPath
		**/
        readonly TemplatesPath: number;

        /**
		* ShowToolTips
		**/
        ShowToolTips: boolean;

        /**
		* Top
		**/
        Top: number;

        /**
		* SmartArtQuickStyles
		**/
        readonly SmartArtQuickStyles: Kso.KsoSmartArtQuickStyles;

        /**
		* UsableWidth
		**/
        readonly UsableWidth: number;

        /**
		* TransitionMenuKey
		**/
        TransitionMenuKey: number;

        /**
		* ShowQuickAnalysis
		**/
        ShowQuickAnalysis: boolean;

        /**
		* ShowMenuFloaties
		**/
        ShowMenuFloaties: boolean;

        /**
		* ReplaceFormat
		**/
        readonly ReplaceFormat: EtCellFormat;

        /**
		* TransitionMenuKeyAction
		**/
        TransitionMenuKeyAction: number;

        /**
		* UserControl
		**/
        UserControl: boolean;

        /**
		* Version
		**/
        readonly Version: number;

        _Wait(Time?: any, lcid?: number): void;

        /**
		* WindowState
		**/
        WindowState: number;

        /**
		* DefaultSheetDirection
		**/
        DefaultSheetDirection: number;

        /**
		* CursorMovement
		**/
        CursorMovement: number;

        /**
		* ControlCharacters
		**/
        ControlCharacters: number;

        /**
		* EnableEvents
		**/
        EnableEvents: boolean;

        /**
		* DisplayInfoWindow
		**/
        DisplayInfoWindow: boolean;

        Wait(Time?: any, lcid?: number, RHS?: boolean): void;

        /**
		* OLEDBErrors
		**/
        readonly OLEDBErrors: EtOLEDBErrors;

        GetPhonetic(Text?: any, RHS?: string): void;

        /**
		* DefaultWebOptions
		**/
        readonly DefaultWebOptions: EtDefaultWebOptions;

        /**
		* UserLibraryPath
		**/
        readonly UserLibraryPath: string;

        /**
		* AutoPercentEntry
		**/
        AutoPercentEntry: boolean;

        /**
		* AnswerWizard
		**/
        readonly AnswerWizard: Kso.KsoAnswerWizard;

        /**
		* FeatureInstall
		**/
        FeatureInstall: Kso.KsoMsoFeatureInstall;

        /**
		* Ready
		**/
        readonly Ready: boolean;

        /**
		* FindFormat
		**/
        readonly FindFormat: EtCellFormat;

        /**
		* ClusterConnector
		**/
        ClusterConnector: string;

        /**
		* UsedObjects
		**/
        readonly UsedObjects: EtUsedObjects;

        /**
		* CalculationState
		**/
        readonly CalculationState: EtXlCalculationState;

        /**
		* CalculationInterruptKey
		**/
        CalculationInterruptKey: EtXlCalculationInterruptKey;

        /**
		* Watches
		**/
        readonly Watches: EtWatches;

        /**
		* DisplayFunctionToolTips
		**/
        DisplayFunctionToolTips: boolean;

        /**
		* AutomationSecurity
		**/
        AutomationSecurity: Kso.KsoMsoAutomationSecurity;

        FileDialog(fileDialogType?: Kso.KsoMsoFileDialogType, RHS?: Kso.KsoFileDialog): void;

        CalculateFullRebuild(): void;

        /**
		* DisplayInsertOptions
		**/
        DisplayInsertOptions: boolean;

        /**
		* GenerateGetPivotData
		**/
        GenerateGetPivotData: boolean;

        /**
		* AutoRecover
		**/
        readonly AutoRecover: EtAutoRecover;

        /**
		* Hinstance
		**/
        readonly Hinstance: number;

        CheckAbort(KeepAbort?: any): void;

        /**
		* ThisCell
		**/
        readonly ThisCell: EtRange;

        /**
		* ErrorCheckingOptions
		**/
        readonly ErrorCheckingOptions: EtErrorCheckingOptions;

        /**
		* AutoFormatAsYouTypeReplaceHyperlinks
		**/
        AutoFormatAsYouTypeReplaceHyperlinks: boolean;

        /**
		* SmartTagRecognizers
		**/
        readonly SmartTagRecognizers: EtSmartTagRecognizers;

        /**
		* NewWorkbook
		**/
        readonly NewWorkbook: Kso.KsoNewFile;

        /**
		* SpellingOptions
		**/
        readonly SpellingOptions: EtSpellingOptions;

        /**
		* Speech
		**/
        readonly Speech: EtSpeech;

        /**
		* DecimalSeparator
		**/
        DecimalSeparator: string;

        /**
		* RTD
		**/
        readonly RTD: EtRTD;

        /**
		* DisplayDocumentActionTaskPane
		**/
        DisplayDocumentActionTaskPane: boolean;

        DisplayXMLSourcePane(XmlMap?: any): void;

        /**
		* ArbitraryXMLSupportAvailable
		**/
        readonly ArbitraryXMLSupportAvailable: boolean;

        Support(Object?: any, ID?: number, arg?: any, RHS?: any): void;

        /**
		* MeasurementUnit
		**/
        MeasurementUnit: number;

        /**
		* DisplayDocumentInformationPanel
		**/
        DisplayDocumentInformationPanel: boolean;

        /**
		* AlwaysUseClearType
		**/
        AlwaysUseClearType: boolean;

        /**
		* WarnOnFunctionNameConflict
		**/
        WarnOnFunctionNameConflict: boolean;

        /**
		* FormulaBarHeight
		**/
        FormulaBarHeight: number;

        /**
		* Assistance
		**/
        readonly Assistance: Kso.KsoAssistance;

        CalculateUntilAsyncQueriesDone(): void;

        /**
		* MultiThreadedCalculation
		**/
        readonly MultiThreadedCalculation: EtMultiThreadedCalculation;

        SharePointVersion(bstrUrl?: string, RHS?: number): void;

        /**
		* ActiveEncryptionSession
		**/
        readonly ActiveEncryptionSession: number;

        /**
		* HighQualityModeForGraphics
		**/
        HighQualityModeForGraphics: boolean;

        /**
		* FileExportConverters
		**/
        readonly FileExportConverters: EtFileExportConverters;

        /**
		* SmartArtColors
		**/
        readonly SmartArtColors: Kso.KsoSmartArtColors;

        /**
		* AddIns2
		**/
        readonly AddIns2: EtAddIns2;

        MacroOptions(Macro?: any, Description?: any, HasMenu?: any, MenuText?: any, HasShortcutKey?: any, ShortcutKey?: any, Category?: any, StatusBar?: any, HelpContextID?: any, HelpFile?: any, ArgumentDescriptions?: any, lcid?: number): void;

        /**
		* ProtectedViewWindows
		**/
        readonly ProtectedViewWindows: EtProtectedViewWindows;

        /**
		* ActiveProtectedViewWindow
		**/
        readonly ActiveProtectedViewWindow: EtProtectedViewWindow;

        /**
		* IsSandboxed
		**/
        readonly IsSandboxed: boolean;

        /**
		* SaveISO8601Dates
		**/
        SaveISO8601Dates: boolean;

        /**
		* HinstancePtr
		**/
        readonly HinstancePtr: any;

        /**
		* FileValidation
		**/
        FileValidation: Kso.KsoMsoFileValidationMode;

        /**
		* QuickAnalysis
		**/
        readonly QuickAnalysis: EtQuickAnalysis;

        /**
		* FlashFill
		**/
        FlashFill: boolean;

        /**
		* EnableMacroAnimations
		**/
        EnableMacroAnimations: boolean;

        /**
		* FlashFillMode
		**/
        FlashFillMode: boolean;

        /**
		* DebugTools
		**/
        readonly DebugTools: EtDebugTools;

    }

    interface EtRange {
        AddressLocal(RowAbsolute?: any, ColumnAbsolute?: any, ReferenceStyle?: EtXlReferenceStyle, External?: any, RelativeTo?: any, RHS?: string): void;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        ClearFormats(RHS?: any): void;

        AdvancedFilter(Action?: EtXlFilterAction, CriteriaRange?: any, CopyToRange?: any, Unique?: any, RHS?: any): void;

        FindNext(After?: any, RHS?: EtRange): void;

        AutoFill(Destination?: EtRange, Type?: EtXlAutoFillType, RHS?: any): void;

        _Default(RowIndex?: any, ColumnIndex?: any, lcid?: number, RHS?: any): void;

        Activate(RHS?: any): void;

        ApplyNames(Names?: any, IgnoreRelativeAbsolute?: any, UseRowColumnNames?: any, OmitColumn?: any, OmitRow?: any, Order?: EtXlApplyNamesOrder, AppendLast?: any, RHS?: any): void;

        Address(RowAbsolute?: any, ColumnAbsolute?: any, ReferenceStyle?: EtXlReferenceStyle, External?: any, RelativeTo?: any, lcid?: number, RHS?: string): void;

        ClearNotes(RHS?: any): void;

        /**
		* AddIndent
		**/
        AddIndent: any;

        ClearContents(RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* PageBreak
		**/
        PageBreak: number;

        ApplyOutlineStyles(RHS?: any): void;

        /**
		* Areas
		**/
        readonly Areas: EtAreas;

        AutoComplete(String?: string, RHS?: string): void;

        AutoFilter(Field?: any, Criteria1?: any, Operator?: EtXlAutoFilterOperator, Criteria2?: any, VisibleDropDown?: any, RHS?: any): void;

        AutoFit(RHS?: any): void;

        Clear(RHS?: any): void;

        AutoFormat(Format?: EtXlRangeAutoFormat, Number?: any, Font?: any, Alignment?: any, Border?: any, Pattern?: any, Width?: any, RHS?: any): void;

        Find(What?: any, After?: any, LookIn?: any, LookAt?: any, SearchOrder?: any, SearchDirection?: EtXlSearchDirection, MatchCase?: any, MatchByte?: any, SearchFormat?: any, RHS?: EtRange): void;

        AutoOutline(RHS?: any): void;

        _BorderAround(LineStyle?: any, Weight?: Kso.KsoXlBorderWeight, ColorIndex?: Kso.KsoXlColorIndex, Color?: any, RHS?: any): void;

        EditionOptions(Type?: EtXlEditionType, Option?: EtXlEditionOptionsOption, Name?: any, Reference?: any, Appearance?: EtXlPictureAppearance, ChartSize?: EtXlPictureAppearance, Format?: any, RHS?: any): void;

        /**
		* Borders
		**/
        readonly Borders: EtBorders;

        RemoveSubtotal(RHS?: any): void;

        Calculate(RHS?: any): void;

        FindPrevious(After?: any, RHS?: EtRange): void;

        /**
		* Width
		**/
        readonly Width: any;

        /**
		* Cells
		**/
        readonly Cells: EtRange;

        AllocateChanges(): void;

        ClearOutline(RHS?: any): void;

        /**
		* Column
		**/
        readonly Column: number;

        Delete(Shift?: any, RHS?: any): void;

        /**
		* CurrentRegion
		**/
        readonly CurrentRegion: EtRange;

        ColumnDifferences(Comparison?: any, RHS?: EtRange): void;

        /**
		* UseStandardWidth
		**/
        UseStandardWidth: any;

        /**
		* Columns
		**/
        readonly Columns: EtRange;

        /**
		* ColumnWidth
		**/
        ColumnWidth: any;

        /**
		* FormulaHidden
		**/
        FormulaHidden: any;

        /**
		* Formula
		**/
        Formula: number;

        /**
		* WrapText
		**/
        WrapText: any;

        FillDown(RHS?: any): void;

        Consolidate(Sources?: any, Function?: any, TopRow?: any, LeftColumn?: any, CreateLinks?: any, RHS?: any): void;

        RowDifferences(Comparison?: any, RHS?: EtRange): void;

        Copy(Destination?: any, RHS?: any): void;

        CopyFromRecordset(Data?: any, MaxRows?: any, MaxColumns?: any, RHS?: number): void;

        /**
		* FormulaLabel
		**/
        FormulaLabel: EtXlFormulaLabel;

        End(Direction?: EtXlDirection, RHS?: EtRange): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* MDX
		**/
        readonly MDX: string;

        /**
		* Precedents
		**/
        readonly Precedents: EtRange;

        /**
		* Dependents
		**/
        readonly Dependents: EtRange;

        /**
		* Count
		**/
        readonly Count: number;

        CreateNames(Top?: any, Left?: any, Bottom?: any, Right?: any, RHS?: any): void;

        CreatePublisher(Edition?: any, Appearance?: EtXlPictureAppearance, ContainsPICT?: any, ContainsBIFF?: any, ContainsRTF?: any, ContainsVALU?: any, RHS?: any): void;

        /**
		* CurrentArray
		**/
        readonly CurrentArray: EtRange;

        Cut(Destination?: any, RHS?: any): void;

        DataSeries(Rowcol?: any, Type?: EtXlDataSeriesType, Date?: EtXlDataSeriesDate, Step?: any, Stop?: any, Trend?: any, RHS?: any): void;

        DialogBox(RHS?: any): void;

        /**
		* ListObject
		**/
        readonly ListObject: EtListObject;

        /**
		* EntireColumn
		**/
        readonly EntireColumn: EtRange;

        /**
		* DirectDependents
		**/
        readonly DirectDependents: EtRange;

        /**
		* DirectPrecedents
		**/
        readonly DirectPrecedents: EtRange;

        FillUp(RHS?: any): void;

        /**
		* EntireRow
		**/
        readonly EntireRow: EtRange;

        FillLeft(RHS?: any): void;

        FillRight(RHS?: any): void;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* FormulaArray
		**/
        FormulaArray: any;

        /**
		* FormulaLocal
		**/
        FormulaLocal: any;

        /**
		* FormulaR1C1
		**/
        FormulaR1C1: number;

        /**
		* LocationInTable
		**/
        readonly LocationInTable: EtXlLocationInTable;

        /**
		* FormulaR1C1Local
		**/
        FormulaR1C1Local: any;

        FunctionWizard(RHS?: any): void;

        GoalSeek(Goal?: any, ChangingCell?: EtRange, RHS?: boolean): void;

        Group(Start?: any, End?: any, By?: any, Periods?: any, RHS?: any): void;

        /**
		* HasArray
		**/
        readonly HasArray: any;

        /**
		* HasFormula
		**/
        readonly HasFormula: any;

        /**
		* Height
		**/
        readonly Height: any;

        /**
		* Hidden
		**/
        Hidden: any;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* IndentLevel
		**/
        IndentLevel: any;

        InsertIndent(InsertAmount?: number): void;

        Replace(What?: any, Replacement?: any, LookAt?: any, SearchOrder?: any, MatchCase?: any, MatchByte?: any, SearchFormat?: any, ReplaceFormat?: any, RHS?: boolean): void;

        Insert(Shift?: any, CopyOrigin?: any, RHS?: any): void;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        Item(RowIndex?: any, ColumnIndex?: any, lcid?: number, RHS?: any): void;

        Justify(RHS?: any): void;

        Run(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: any): void;

        /**
		* Left
		**/
        readonly Left: any;

        /**
		* ShrinkToFit
		**/
        ShrinkToFit: any;

        /**
		* ListHeaderRows
		**/
        readonly ListHeaderRows: number;

        ListNames(RHS?: any): void;

        /**
		* Locked
		**/
        Locked: any;

        Merge(Across?: any): void;

        UnMerge(): void;

        /**
		* FormatConditions
		**/
        readonly FormatConditions: EtFormatConditions;

        /**
		* MergeArea
		**/
        readonly MergeArea: EtRange;

        /**
		* MergeCells
		**/
        MergeCells: any;

        /**
		* Name
		**/
        Name: any;

        /**
		* QueryTable
		**/
        readonly QueryTable: EtQueryTable;

        NavigateArrow(TowardPrecedent?: any, ArrowNumber?: any, LinkNumber?: any, RHS?: any): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        /**
		* Next
		**/
        readonly Next: EtRange;

        NoteText(Text?: any, Start?: any, Length?: any, RHS?: string): void;

        /**
		* NumberFormat
		**/
        NumberFormat: any;

        TextToColumns(Destination?: any, DataType?: EtXlTextParsingType, TextQualifier?: EtXlTextQualifier, ConsecutiveDelimiter?: any, Tab?: any, Semicolon?: any, Comma?: any, Space?: any, Other?: any, OtherChar?: any, FieldInfo?: any, DecimalSeparator?: any, ThousandsSeparator?: any, TrailingMinusNumbers?: any, RHS?: any): void;

        /**
		* NumberFormatLocal
		**/
        NumberFormatLocal: any;

        Offset(RowOffset?: any, ColumnOffset?: any, RHS?: EtRange): void;

        Sort(Key1?: any, Order1?: EtXlSortOrder, Key2?: any, Type?: any, Order2?: EtXlSortOrder, Key3?: any, Order3?: EtXlSortOrder, Header?: EtXlYesNoGuess, OrderCustom?: any, MatchCase?: any, Orientation?: EtXlSortOrientation, SortMethod?: EtXlSortMethod, DataOption1?: EtXlSortDataOption, DataOption2?: EtXlSortDataOption, DataOption3?: EtXlSortDataOption, RHS?: any): void;

        /**
		* Orientation
		**/
        Orientation: any;

        Show(RHS?: any): void;

        /**
		* OutlineLevel
		**/
        OutlineLevel: any;

        Parse(ParseLine?: any, Destination?: any, RHS?: any): void;

        _PasteSpecial(Paste?: EtXlPasteType, Operation?: EtXlPasteSpecialOperation, SkipBlanks?: any, Transpose?: any, RHS?: any): void;

        /**
		* PivotField
		**/
        readonly PivotField: EtPivotField;

        /**
		* PivotItem
		**/
        readonly PivotItem: EtPivotItem;

        /**
		* PivotTable
		**/
        readonly PivotTable: EtPivotTable;

        /**
		* PrefixCharacter
		**/
        readonly PrefixCharacter: any;

        /**
		* Previous
		**/
        readonly Previous: EtRange;

        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, RHS?: any): void;

        PrintPreview(EnableChanges?: any, RHS?: any): void;

        Range(Cell1?: any, Cell2?: any, RHS?: EtRange): void;

        Resize(RowSize?: any, ColumnSize?: any, RHS?: EtRange): void;

        /**
		* Row
		**/
        readonly Row: number;

        /**
		* RowHeight
		**/
        RowHeight: any;

        /**
		* Rows
		**/
        readonly Rows: EtRange;

        Select(RHS?: any): void;

        ShowDependents(Remove?: any, RHS?: any): void;

        /**
		* ShowDetail
		**/
        ShowDetail: any;

        ShowErrors(RHS?: any): void;

        ShowPrecedents(Remove?: any, RHS?: any): void;

        SortSpecial(SortMethod?: EtXlSortMethod, Key1?: any, Order1?: EtXlSortOrder, Type?: any, Key2?: any, Order2?: EtXlSortOrder, Key3?: any, Order3?: EtXlSortOrder, Header?: EtXlYesNoGuess, OrderCustom?: any, MatchCase?: any, Orientation?: EtXlSortOrientation, DataOption1?: EtXlSortDataOption, DataOption2?: EtXlSortDataOption, DataOption3?: EtXlSortDataOption, RHS?: any): void;

        /**
		* Worksheet
		**/
        readonly Worksheet: EtWorksheet;

        /**
		* SoundNote
		**/
        readonly SoundNote: EtSoundNote;

        SpecialCells(Type?: EtXlCellType, Value?: any, RHS?: EtRange): void;

        /**
		* Validation
		**/
        readonly Validation: EtValidation;

        /**
		* Style
		**/
        Style: any;

        SubscribeTo(Edition?: string, Format?: EtXlSubscribeToFormat, RHS?: any): void;

        Subtotal(GroupBy?: number, Function?: EtXlConsolidationFunction, TotalList?: any, Replace?: any, PageBreaks?: any, SummaryBelowData?: EtXlSummaryRow, RHS?: any): void;

        /**
		* Summary
		**/
        readonly Summary: any;

        Table(RowInput?: any, ColumnInput?: any, RHS?: any): void;

        /**
		* Text
		**/
        readonly Text: any;

        /**
		* Top
		**/
        readonly Top: any;

        Ungroup(RHS?: any): void;

        /**
		* UseStandardHeight
		**/
        UseStandardHeight: any;

        Value(RangeValueDataType?: any, lcid?: number, RHS?: any): void;

        /**
		* Value2
		**/
        Value2: number;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        AddComment(Text?: any, RHS?: EtComment): void;

        /**
		* Comment
		**/
        readonly Comment: EtComment;

        ClearComments(): void;

        /**
		* Phonetic
		**/
        readonly Phonetic: EtPhonetic;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* Hyperlinks
		**/
        readonly Hyperlinks: EtHyperlinks;

        /**
		* Phonetics
		**/
        readonly Phonetics: EtPhonetics;

        SetPhonetic(): void;

        /**
		* ID
		**/
        ID: string;

        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, RHS?: any): void;

        /**
		* PivotCell
		**/
        readonly PivotCell: EtPivotCell;

        Dirty(): void;

        /**
		* Errors
		**/
        readonly Errors: EtErrors;

        /**
		* SmartTags
		**/
        readonly SmartTags: EtSmartTags;

        Speak(SpeakDirection?: any, SpeakFormulas?: any): void;

        PasteSpecial(Paste?: EtXlPasteType, Operation?: EtXlPasteSpecialOperation, SkipBlanks?: any, Transpose?: any, RHS?: any): void;

        /**
		* AllowEdit
		**/
        readonly AllowEdit: boolean;

        /**
		* XPath
		**/
        readonly XPath: EtXPath;

        /**
		* ServerActions
		**/
        readonly ServerActions: EtActions;

        RemoveDuplicates(Columns?: any, Header?: EtXlYesNoGuess): void;

        PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, RHS?: any): void;

        ExportAsFixedFormat(Type?: EtXlFixedFormatType, Filename?: any, Quality?: any, IncludeDocProperties?: any, IgnorePrintAreas?: any, From?: any, To?: any, OpenAfterPublish?: any, FixedFormatExtClassPtr?: any): void;

        /**
		* CountLarge
		**/
        readonly CountLarge: any;

        CalculateRowMajorOrder(RHS?: any): void;

        /**
		* SparklineGroups
		**/
        readonly SparklineGroups: EtSparklineGroups;

        ClearHyperlinks(): void;

        /**
		* DisplayFormat
		**/
        readonly DisplayFormat: EtDisplayFormat;

        BorderAround(LineStyle?: any, Weight?: Kso.KsoXlBorderWeight, ColorIndex?: Kso.KsoXlColorIndex, Color?: any, ThemeColor?: any, RHS?: any): void;

        DiscardChanges(): void;

        FlashFill(): void;

    }

    interface EtTextFrame2 extends Kso.KsoTextFrame2 {}

    interface EtTextFrame extends Kso.KsoTextFrame {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* VerticalOverflow
		**/
        VerticalOverflow: EtXlOartVerticalOverflow;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: Kso.KsoXlHAlign;

        /**
		* AutoSize
		**/
        AutoSize: boolean;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: Kso.KsoXlVAlign;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* AutoMargins
		**/
        AutoMargins: boolean;

        /**
		* HorizontalOverflow
		**/
        HorizontalOverflow: EtXlOartHorizontalOverflow;

    }

    interface EtAction {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        Execute(): void;

        /**
		* Coordinate
		**/
        readonly Coordinate: string;

        /**
		* Caption
		**/
        readonly Caption: string;

        /**
		* Type
		**/
        readonly Type: EtXlActionType;

        /**
		* Content
		**/
        readonly Content: string;

    }

    interface EtComment {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Shape
		**/
        readonly Shape: Kso.KsoShape;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Author
		**/
        readonly Author: string;

        Text(Text?: any, Start?: any, Overwrite?: any, RHS?: string): void;

        /**
		* Visible
		**/
        Visible: boolean;

        Next(RHS?: EtComment): void;

        Previous(RHS?: EtComment): void;

    }

    interface EtComments {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: number, RHS?: EtComment): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: number, RHS?: EtComment): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtAreas {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: number, RHS?: EtRange): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        _Default(Index?: number, RHS?: EtRange): void;

    }

    interface EtPivotFormula {
        /**
		* Index
		**/
        Index: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Value
		**/
        Value: string;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* _Default
		**/
        _Default: string;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* StandardFormula
		**/
        StandardFormula: string;

    }

    interface EtBorder {
        /**
		* LineStyle
		**/
        LineStyle: any;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Weight
		**/
        Weight: any;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* TintAndShade
		**/
        TintAndShade: any;

        /**
		* ColorIndex
		**/
        ColorIndex: any;

        /**
		* Color
		**/
        Color: any;

        /**
		* ThemeColor
		**/
        ThemeColor: any;

    }

    interface EtPivotFilters {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtPivotFilter): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Default(Index?: any, RHS?: EtPivotFilter): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        /**
		* Count
		**/
        readonly Count: number;

        Add(Type?: EtXlPivotFilterType, DataField?: any, Value1?: any, Value2?: any, Order?: any, Name?: any, Description?: any, MemberPropertyField?: any, RHS?: EtPivotFilter): void;

        Add2(Type?: EtXlPivotFilterType, DataField?: any, Value1?: any, Value2?: any, Order?: any, Name?: any, Description?: any, MemberPropertyField?: any, WholeDayFilter?: any, RHS?: EtPivotFilter): void;

    }

    interface EtPivotFilter {
        /**
		* Description
		**/
        readonly Description: string;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Order
		**/
        Order: number;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* FilterType
		**/
        readonly FilterType: EtXlPivotFilterType;

        /**
		* Active
		**/
        readonly Active: boolean;

        /**
		* PivotField
		**/
        readonly PivotField: EtPivotField;

        /**
		* DataField
		**/
        readonly DataField: EtPivotField;

        /**
		* DataCubeField
		**/
        readonly DataCubeField: EtCubeField;

        /**
		* IsMemberPropertyFilter
		**/
        readonly IsMemberPropertyFilter: boolean;

        /**
		* Value2
		**/
        readonly Value2: any;

        /**
		* Value1
		**/
        readonly Value1: any;

        /**
		* MemberPropertyField
		**/
        readonly MemberPropertyField: EtPivotField;

        /**
		* WholeDayFilter
		**/
        WholeDayFilter: boolean;

    }

    interface EtCharacters {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Caption
		**/
        Caption: string;

        Insert(String?: string, RHS?: any): void;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* Text
		**/
        Text: string;

        /**
		* PhoneticCharacters
		**/
        PhoneticCharacters: string;

    }

    interface EtPivotField {
        ChildItems(Index?: any, RHS?: any): void;

        VisibleItems(Index?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* DataRange
		**/
        readonly DataRange: EtRange;

        /**
		* AutoShowField
		**/
        readonly AutoShowField: string;

        /**
		* DisplayAsTooltip
		**/
        DisplayAsTooltip: boolean;

        Delete(): void;

        _AutoSort(Order?: number, Field?: string): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Calculation
		**/
        Calculation: EtXlPivotFieldCalculation;

        /**
		* ShowAllItems
		**/
        ShowAllItems: boolean;

        /**
		* CurrentPageList
		**/
        CurrentPageList: any;

        /**
		* DataType
		**/
        readonly DataType: EtXlPivotFieldDataType;

        AutoShow(Type?: number, Range?: number, Count?: number, Field?: string): void;

        /**
		* ChildField
		**/
        readonly ChildField: EtPivotField;

        /**
		* AutoSortField
		**/
        readonly AutoSortField: string;

        ClearAllFilters(): void;

        /**
		* CurrentPage
		**/
        CurrentPage: any;

        /**
		* _Default
		**/
        _Default: string;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* IsCalculated
		**/
        readonly IsCalculated: boolean;

        /**
		* Function
		**/
        Function: EtXlConsolidationFunction;

        /**
		* GroupLevel
		**/
        readonly GroupLevel: any;

        /**
		* HiddenItemsList
		**/
        HiddenItemsList: any;

        /**
		* AllItemsVisible
		**/
        readonly AllItemsVisible: boolean;

        /**
		* AutoShowRange
		**/
        readonly AutoShowRange: number;

        HiddenItems(Index?: any, RHS?: any): void;

        /**
		* LabelRange
		**/
        readonly LabelRange: EtRange;

        PivotItems(Index?: any, RHS?: any): void;

        /**
		* Name
		**/
        Name: string;

        /**
		* NumberFormat
		**/
        NumberFormat: string;

        /**
		* Value
		**/
        Value: string;

        /**
		* IsMemberProperty
		**/
        readonly IsMemberProperty: boolean;

        /**
		* Orientation
		**/
        Orientation: Kso.KsoXlPivotFieldOrientation;

        /**
		* DragToData
		**/
        DragToData: boolean;

        /**
		* ParentField
		**/
        readonly ParentField: EtPivotField;

        ParentItems(Index?: any, RHS?: any): void;

        /**
		* EnableItemSelection
		**/
        EnableItemSelection: boolean;

        /**
		* Position
		**/
        Position: any;

        /**
		* SourceName
		**/
        readonly SourceName: string;

        /**
		* LayoutPageBreak
		**/
        LayoutPageBreak: boolean;

        /**
		* TotalLevels
		**/
        readonly TotalLevels: any;

        Subtotals(Index?: any, RHS?: any): void;

        /**
		* BaseField
		**/
        BaseField: any;

        /**
		* BaseItem
		**/
        BaseItem: any;

        CalculatedItems(RHS?: EtCalculatedItems): void;

        /**
		* DragToColumn
		**/
        DragToColumn: boolean;

        /**
		* DragToHide
		**/
        DragToHide: boolean;

        /**
		* DragToPage
		**/
        DragToPage: boolean;

        /**
		* DragToRow
		**/
        DragToRow: boolean;

        /**
		* SubtotalName
		**/
        SubtotalName: string;

        /**
		* MemoryUsed
		**/
        readonly MemoryUsed: number;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* ServerBased
		**/
        ServerBased: boolean;

        /**
		* StandardFormula
		**/
        StandardFormula: string;

        /**
		* CurrentPageName
		**/
        CurrentPageName: string;

        /**
		* AutoSortOrder
		**/
        readonly AutoSortOrder: number;

        /**
		* AutoShowType
		**/
        readonly AutoShowType: number;

        /**
		* AutoShowCount
		**/
        readonly AutoShowCount: number;

        /**
		* CubeField
		**/
        readonly CubeField: EtCubeField;

        /**
		* LayoutBlankLine
		**/
        LayoutBlankLine: boolean;

        /**
		* LayoutSubtotalLocation
		**/
        LayoutSubtotalLocation: EtXlSubtototalLocationType;

        /**
		* LayoutForm
		**/
        LayoutForm: EtXlLayoutFormType;

        /**
		* DrilledDown
		**/
        DrilledDown: boolean;

        /**
		* DatabaseSort
		**/
        DatabaseSort: boolean;

        /**
		* PropertyParentField
		**/
        readonly PropertyParentField: EtPivotField;

        /**
		* PropertyOrder
		**/
        PropertyOrder: number;

        AddPageItem(Item?: string, ClearList?: any): void;

        /**
		* MemberPropertyCaption
		**/
        MemberPropertyCaption: string;

        /**
		* Hidden
		**/
        Hidden: boolean;

        DrillTo(Field?: string): void;

        /**
		* UseMemberPropertyAsCaption
		**/
        UseMemberPropertyAsCaption: boolean;

        /**
		* DisplayInReport
		**/
        DisplayInReport: boolean;

        /**
		* DisplayAsCaption
		**/
        readonly DisplayAsCaption: boolean;

        /**
		* LayoutCompactRow
		**/
        LayoutCompactRow: boolean;

        /**
		* IncludeNewItemsInFilter
		**/
        IncludeNewItemsInFilter: boolean;

        /**
		* VisibleItemsList
		**/
        VisibleItemsList: any;

        /**
		* PivotFilters
		**/
        readonly PivotFilters: EtPivotFilters;

        /**
		* AutoSortPivotLine
		**/
        readonly AutoSortPivotLine: EtPivotLine;

        /**
		* AutoSortCustomSubtotal
		**/
        readonly AutoSortCustomSubtotal: number;

        /**
		* ShowingInAxis
		**/
        readonly ShowingInAxis: boolean;

        /**
		* EnableMultiplePageItems
		**/
        EnableMultiplePageItems: boolean;

        ClearManualFilter(): void;

        ClearValueFilters(): void;

        ClearLabelFilters(): void;

        AutoSort(Order?: number, Field?: string, PivotLine?: any, CustomSubtotal?: any): void;

        /**
		* SourceCaption
		**/
        readonly SourceCaption: string;

        /**
		* ShowDetail
		**/
        ShowDetail: boolean;

        /**
		* RepeatLabels
		**/
        RepeatLabels: boolean;

    }

    interface EtCalculatedMembers {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        _Add(Name?: string, Formula?: string, SolveOrder?: any, Type?: any, RHS?: EtCalculatedMember): void;

        Item(Index?: any, RHS?: EtCalculatedMember): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtCalculatedMember): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        Add(Name?: string, Formula?: any, SolveOrder?: any, Type?: any, Dynamic?: any, DisplayFolder?: any, HierarchizeDistinct?: any, RHS?: EtCalculatedMember): void;

        AddCalculatedMember(Name?: string, Formula?: any, SolveOrder?: any, Type?: any, DisplayFolder?: any, MeasureGroup?: any, ParentHierarchy?: any, ParentMember?: any, NumberFormat?: any, RHS?: EtCalculatedMember): void;

    }

    interface EtCalculatedMember {
        /**
		* SolveOrder
		**/
        readonly SolveOrder: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* IsValid
		**/
        readonly IsValid: boolean;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Formula
		**/
        readonly Formula: string;

        /**
		* SourceName
		**/
        readonly SourceName: string;

        /**
		* HierarchizeDistinct
		**/
        HierarchizeDistinct: boolean;

        /**
		* _Default
		**/
        readonly _Default: string;

        Delete(): void;

        /**
		* Type
		**/
        readonly Type: EtXlCalculatedMemberType;

        /**
		* Dynamic
		**/
        readonly Dynamic: boolean;

        /**
		* DisplayFolder
		**/
        readonly DisplayFolder: string;

        /**
		* FlattenHierarchies
		**/
        FlattenHierarchies: boolean;

        /**
		* MeasureGroup
		**/
        readonly MeasureGroup: string;

        /**
		* ParentHierarchy
		**/
        readonly ParentHierarchy: string;

        /**
		* ParentMember
		**/
        readonly ParentMember: string;

        /**
		* NumberFormat
		**/
        readonly NumberFormat: EtXlCalcMemNumberFormatType;

    }

    interface EtPivotLines {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtPivotLine): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Default(Index?: any, RHS?: EtPivotLine): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        /**
		* Count
		**/
        readonly Count: number;

    }

    interface EtPivotLine {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Position
		**/
        readonly Position: number;

        /**
		* LineType
		**/
        readonly LineType: EtXlPivotLineType;

        /**
		* PivotLineCells
		**/
        readonly PivotLineCells: EtPivotLineCells;

        /**
		* PivotLineCellsFull
		**/
        readonly PivotLineCellsFull: EtPivotLineCells;

    }

    interface EtRtdServer {
        ServerStart(CallbackObject?: EtRTDUpdateEvent, pfRes?: number): void;

        ConnectData(TopicID?: number, Strings?: any[], GetNewValues?: boolean, pvarOut?: any): void;

        ServerTerminate(): void;

        RefreshData(TopicCount?: number, parrayOut?: any[]): void;

        DisconnectData(TopicID?: number): void;

        Heartbeat(pfRes?: number): void;

    }

    interface EtFont {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Italic
		**/
        Italic: any;

        /**
		* Background
		**/
        Background: any;

        /**
		* FontStyle
		**/
        FontStyle: any;

        /**
		* Bold
		**/
        Bold: any;

        /**
		* ColorIndex
		**/
        ColorIndex: any;

        /**
		* Strikethrough
		**/
        Strikethrough: any;

        /**
		* Color
		**/
        Color: any;

        /**
		* Name
		**/
        Name: any;

        /**
		* OutlineFont
		**/
        OutlineFont: any;

        /**
		* Shadow
		**/
        Shadow: any;

        /**
		* Size
		**/
        Size: any;

        /**
		* Subscript
		**/
        Subscript: any;

        /**
		* Superscript
		**/
        Superscript: any;

        /**
		* Underline
		**/
        Underline: any;

        /**
		* ThemeColor
		**/
        ThemeColor: any;

        /**
		* TintAndShade
		**/
        TintAndShade: any;

        /**
		* ThemeFont
		**/
        ThemeFont: EtXlThemeFont;

    }

    interface EtWorkbookConnection {
        /**
		* Description
		**/
        Description: string;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* _Default
		**/
        _Default: string;

        /**
		* Type
		**/
        readonly Type: EtXlConnectionType;

        Refresh(): void;

        /**
		* OLEDBConnection
		**/
        readonly OLEDBConnection: EtOLEDBConnection;

        /**
		* ODBCConnection
		**/
        readonly ODBCConnection: EtODBCConnection;

        /**
		* Ranges
		**/
        readonly Ranges: EtRanges;

        Delete(): void;

        /**
		* ModelConnection
		**/
        readonly ModelConnection: EtModelConnection;

        /**
		* WorksheetDataConnection
		**/
        readonly WorksheetDataConnection: EtWorksheetDataConnection;

        /**
		* RefreshWithRefreshAll
		**/
        RefreshWithRefreshAll: boolean;

        /**
		* TextConnection
		**/
        readonly TextConnection: EtTextConnection;

        /**
		* DataFeedConnection
		**/
        readonly DataFeedConnection: EtDataFeedConnection;

        /**
		* InModel
		**/
        readonly InModel: boolean;

        /**
		* ModelTables
		**/
        readonly ModelTables: EtModelTables;

    }

    interface EtTreeviewControl {
        /**
		* Drilled
		**/
        Drilled: any;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Hidden
		**/
        Hidden: any;

    }

    interface EtDialogFrame {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Text
		**/
        Text: string;

        _Dummy9(): void;

        _Dummy3(): void;

        _Dummy4(): void;

        _Dummy5(): void;

        _Dummy7(): void;

        _Dummy8(): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        _Dummy18(): void;

        _Dummy17(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        _Dummy10(): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        _Dummy25(): void;

        _Dummy23(): void;

        _Dummy22(): void;

        _Dummy20(): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* Width
		**/
        Width: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* Caption
		**/
        Caption: string;

    }

    interface EtVPageBreaks {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: number, RHS?: EtVPageBreak): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: number, RHS?: EtVPageBreak): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        Add(Before?: any, RHS?: EtVPageBreak): void;

    }

    interface EtInterior {
        /**
		* PatternColorIndex
		**/
        PatternColorIndex: any;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PatternColor
		**/
        PatternColor: any;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* ColorIndex
		**/
        ColorIndex: any;

        /**
		* Color
		**/
        Color: any;

        /**
		* InvertIfNegative
		**/
        InvertIfNegative: any;

        /**
		* Pattern
		**/
        Pattern: any;

        /**
		* ThemeColor
		**/
        ThemeColor: any;

        /**
		* TintAndShade
		**/
        TintAndShade: any;

        /**
		* PatternThemeColor
		**/
        PatternThemeColor: any;

        /**
		* PatternTintAndShade
		**/
        PatternTintAndShade: any;

        /**
		* Gradient
		**/
        readonly Gradient: any;

    }

    interface EtSpinners {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* SmallChange
		**/
        SmallChange: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        Add(Left?: number, Top?: number, Width?: number, Height?: number, RHS?: EtSpinner): void;

        _Dummy22(): void;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* _Default
		**/
        _Default: number;

        /**
		* Display3DShading
		**/
        Display3DShading: boolean;

        /**
		* Value
		**/
        Value: number;

        /**
		* LinkedCell
		**/
        LinkedCell: string;

        /**
		* Max
		**/
        Max: number;

        /**
		* Min
		**/
        Min: number;

        /**
		* Count
		**/
        readonly Count: number;

        Group(RHS?: EtGroupObject): void;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtSpinner {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* SmallChange
		**/
        SmallChange: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* _Default
		**/
        _Default: number;

        /**
		* Display3DShading
		**/
        Display3DShading: boolean;

        /**
		* Value
		**/
        Value: number;

        /**
		* LinkedCell
		**/
        LinkedCell: string;

        /**
		* Max
		**/
        Max: number;

        /**
		* Min
		**/
        Min: number;

    }

    interface EtCalculatedItems {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtPivotItem): void;

        _Add(Name?: string, Formula?: string, RHS?: EtPivotItem): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Field?: any, RHS?: EtPivotItem): void;

        _NewEnum(RHS?: any): void;

        Add(Name?: string, Formula?: string, UseStandardFormula?: any, RHS?: EtPivotItem): void;

    }

    interface EtCubeField {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* FlattenHierarchies
		**/
        FlattenHierarchies: boolean;

        /**
		* Value
		**/
        readonly Value: string;

        /**
		* Orientation
		**/
        Orientation: Kso.KsoXlPivotFieldOrientation;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* CubeFieldType
		**/
        readonly CubeFieldType: EtXlCubeFieldType;

        /**
		* CurrentPageName
		**/
        CurrentPageName: string;

        /**
		* _Caption
		**/
        readonly _Caption: string;

        /**
		* HasMemberProperties
		**/
        readonly HasMemberProperties: boolean;

        /**
		* Position
		**/
        Position: number;

        /**
		* TreeviewControl
		**/
        readonly TreeviewControl: EtTreeviewControl;

        /**
		* DragToColumn
		**/
        DragToColumn: boolean;

        _AddMemberPropertyField(Property?: string, PropertyOrder?: any): void;

        /**
		* DragToHide
		**/
        DragToHide: boolean;

        /**
		* CubeFieldSubType
		**/
        readonly CubeFieldSubType: EtXlCubeFieldSubType;

        /**
		* HiddenLevels
		**/
        HiddenLevels: number;

        /**
		* DragToPage
		**/
        DragToPage: boolean;

        /**
		* DragToRow
		**/
        DragToRow: boolean;

        /**
		* IsDate
		**/
        readonly IsDate: boolean;

        /**
		* DragToData
		**/
        DragToData: boolean;

        /**
		* LayoutForm
		**/
        LayoutForm: EtXlLayoutFormType;

        /**
		* PivotFields
		**/
        readonly PivotFields: EtPivotFields;

        /**
		* EnableMultiplePageItems
		**/
        EnableMultiplePageItems: boolean;

        /**
		* LayoutSubtotalLocation
		**/
        LayoutSubtotalLocation: EtXlSubtototalLocationType;

        /**
		* ShowInFieldList
		**/
        ShowInFieldList: boolean;

        Delete(): void;

        AddMemberPropertyField(Property?: string, PropertyOrder?: any, PropertyDisplayedIn?: any): void;

        /**
		* IncludeNewItemsInFilter
		**/
        IncludeNewItemsInFilter: boolean;

        /**
		* AllItemsVisible
		**/
        readonly AllItemsVisible: boolean;

        ClearManualFilter(): void;

        CreatePivotFields(): void;

        /**
		* HierarchizeDistinct
		**/
        HierarchizeDistinct: boolean;

        /**
		* Caption
		**/
        Caption: string;

    }

    interface EtCubeFields {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtCubeField): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtCubeField): void;

        GetMeasure(AttributeHierarchy?: any, Function?: EtXlConsolidationFunction, Caption?: any, RHS?: EtCubeField): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        AddSet(Name?: string, Caption?: string, RHS?: EtCubeField): void;

    }

    interface EtXmlNamespace {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Prefix
		**/
        readonly Prefix: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* _Default
		**/
        readonly _Default: string;

        /**
		* Uri
		**/
        readonly Uri: string;

    }

    interface EtListObject {
        UpdateChanges(iConflictType?: EtXlListConflict): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* ListRows
		**/
        readonly ListRows: EtListRows;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Publish(Target?: any, LinkSource?: boolean, RHS?: string): void;

        Refresh(): void;

        Unlink(): void;

        /**
		* SourceType
		**/
        readonly SourceType: EtXlListObjectSourceType;

        Unlist(): void;

        Resize(Range?: EtRange): void;

        /**
		* _Default
		**/
        readonly _Default: string;

        /**
		* Active
		**/
        readonly Active: boolean;

        /**
		* DataBodyRange
		**/
        readonly DataBodyRange: EtRange;

        /**
		* DisplayRightToLeft
		**/
        readonly DisplayRightToLeft: boolean;

        /**
		* HeaderRowRange
		**/
        readonly HeaderRowRange: EtRange;

        /**
		* InsertRowRange
		**/
        readonly InsertRowRange: EtRange;

        /**
		* ListColumns
		**/
        readonly ListColumns: EtListColumns;

        /**
		* ShowHeaders
		**/
        ShowHeaders: boolean;

        /**
		* ShowTotals
		**/
        ShowTotals: boolean;

        /**
		* Name
		**/
        Name: string;

        /**
		* QueryTable
		**/
        readonly QueryTable: EtQueryTable;

        /**
		* TotalsRowRange
		**/
        readonly TotalsRowRange: EtRange;

        /**
		* Range
		**/
        readonly Range: EtRange;

        /**
		* ShowAutoFilter
		**/
        ShowAutoFilter: boolean;

        /**
		* SharePointURL
		**/
        readonly SharePointURL: string;

        /**
		* XmlMap
		**/
        readonly XmlMap: EtXmlMap;

        /**
		* DisplayName
		**/
        DisplayName: string;

        /**
		* AutoFilter
		**/
        readonly AutoFilter: EtAutoFilter;

        /**
		* TableStyle
		**/
        TableStyle: any;

        /**
		* ShowTableStyleFirstColumn
		**/
        ShowTableStyleFirstColumn: boolean;

        /**
		* ShowTableStyleLastColumn
		**/
        ShowTableStyleLastColumn: boolean;

        /**
		* TableObject
		**/
        readonly TableObject: EtTableObject;

        /**
		* ShowTableStyleRowStripes
		**/
        ShowTableStyleRowStripes: boolean;

        /**
		* Summary
		**/
        Summary: string;

        /**
		* ShowTableStyleColumnStripes
		**/
        ShowTableStyleColumnStripes: boolean;

        /**
		* Sort
		**/
        readonly Sort: EtSort;

        /**
		* Comment
		**/
        Comment: string;

        ExportToVisio(): void;

        /**
		* AlternativeText
		**/
        AlternativeText: string;

        /**
		* Slicers
		**/
        readonly Slicers: EtSlicers;

        /**
		* ShowAutoFilterDropDown
		**/
        ShowAutoFilterDropDown: boolean;

    }

    interface EtModelTables {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtModelTable): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtModelTable): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtPivotFields {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: EtPivotTable;

        /**
		* Count
		**/
        readonly Count: number;

        _NewEnum(RHS?: any): void;

    }

    interface EtScenario {
        /**
		* Index
		**/
        readonly Index: number;

        ChangeScenario(ChangingCells?: any, Values?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* ChangingCells
		**/
        readonly ChangingCells: EtRange;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Show(RHS?: any): void;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Comment
		**/
        Comment: string;

        /**
		* Hidden
		**/
        Hidden: boolean;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Name
		**/
        Name: string;

        Values(Index?: any, RHS?: any): void;

    }

    interface EtMenuBars {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtMenuBar): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add(Name?: any, RHS?: EtMenuBar): void;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtMenuBar): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtMenuBar {
        /**
		* Index
		**/
        readonly Index: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Activate(): void;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* BuiltIn
		**/
        readonly BuiltIn: boolean;

        /**
		* Menus
		**/
        readonly Menus: EtMenus;

        Reset(): void;

    }

    interface EtCalculatedFields {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtPivotField): void;

        _Add(Name?: string, Formula?: string, RHS?: EtPivotField): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Field?: any, RHS?: EtPivotField): void;

        _NewEnum(RHS?: any): void;

        Add(Name?: string, Formula?: string, UseStandardFormula?: any, RHS?: EtPivotField): void;

    }

    interface EtPivotCell {
        /**
		* PivotItem
		**/
        readonly PivotItem: EtPivotItem;

        /**
		* DataField
		**/
        readonly DataField: EtPivotField;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* PivotCellType
		**/
        readonly PivotCellType: EtXlPivotCellType;

        /**
		* CellChanged
		**/
        readonly CellChanged: EtXlCellChangedState;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* PivotField
		**/
        readonly PivotField: EtPivotField;

        /**
		* PivotTable
		**/
        readonly PivotTable: EtPivotTable;

        /**
		* RowItems
		**/
        readonly RowItems: EtPivotItemList;

        /**
		* ServerActions
		**/
        readonly ServerActions: EtActions;

        /**
		* ColumnItems
		**/
        readonly ColumnItems: EtPivotItemList;

        /**
		* Range
		**/
        readonly Range: EtRange;

        /**
		* Dummy18
		**/
        readonly Dummy18: string;

        /**
		* CustomSubtotalFunction
		**/
        readonly CustomSubtotalFunction: EtXlConsolidationFunction;

        /**
		* PivotRowLine
		**/
        readonly PivotRowLine: EtPivotLine;

        /**
		* PivotColumnLine
		**/
        readonly PivotColumnLine: EtPivotLine;

        AllocateChange(): void;

        DiscardChange(): void;

        /**
		* DataSourceValue
		**/
        readonly DataSourceValue: any;

        /**
		* MDX
		**/
        readonly MDX: string;

    }

    interface EtColorScaleCriterion {
        /**
		* Index
		**/
        readonly Index: number;

        /**
		* Type
		**/
        Type: EtXlConditionValueTypes;

        /**
		* FormatColor
		**/
        readonly FormatColor: EtFormatColor;

        /**
		* Value
		**/
        Value: any;

    }

    interface EtColorScaleCriteria {
        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtColorScaleCriterion): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        Item(Index?: any, RHS?: EtColorScaleCriterion): void;

    }

    interface EtSparkHorizontalAxis {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Axis
		**/
        readonly Axis: EtSparkColor;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* RightToLeftPlotOrder
		**/
        RightToLeftPlotOrder: boolean;

        /**
		* IsDateAxis
		**/
        readonly IsDateAxis: boolean;

        /**
		* Parent
		**/
        readonly Parent: any;

    }

    interface EtSlicers {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtSlicer): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtSlicer): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        Add(SlicerDestination?: any, Level?: any, Name?: any, Caption?: any, Top?: any, Left?: any, Width?: any, Height?: any, RHS?: EtSlicer): void;

    }

    interface EtOLEDBConnection {
        /**
		* Connection
		**/
        Connection: any;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* SourceConnectionFile
		**/
        SourceConnectionFile: string;

        /**
		* CommandType
		**/
        CommandType: EtXlCmdType;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* CommandText
		**/
        CommandText: any;

        /**
		* BackgroundQuery
		**/
        BackgroundQuery: boolean;

        /**
		* ADOConnection
		**/
        readonly ADOConnection: any;

        /**
		* ServerFillColor
		**/
        ServerFillColor: boolean;

        CancelRefresh(): void;

        /**
		* CalculatedMembers
		**/
        readonly CalculatedMembers: EtCalculatedMembers;

        /**
		* MaxDrillthroughRecords
		**/
        MaxDrillthroughRecords: number;

        /**
		* RefreshOnFileOpen
		**/
        RefreshOnFileOpen: boolean;

        /**
		* Refreshing
		**/
        readonly Refreshing: boolean;

        /**
		* EnableRefresh
		**/
        EnableRefresh: boolean;

        /**
		* ServerNumberFormat
		**/
        ServerNumberFormat: boolean;

        MakeConnection(): void;

        /**
		* LocalConnection
		**/
        LocalConnection: any;

        /**
		* MaintainConnection
		**/
        MaintainConnection: boolean;

        /**
		* ServerTextColor
		**/
        ServerTextColor: boolean;

        Refresh(): void;

        /**
		* RefreshDate
		**/
        readonly RefreshDate: string;

        /**
		* RefreshPeriod
		**/
        RefreshPeriod: number;

        /**
		* RobustConnect
		**/
        RobustConnect: EtXlRobustConnect;

        SaveAsODC(ODCFileName?: string, Description?: any, Keywords?: any): void;

        /**
		* SavePassword
		**/
        SavePassword: boolean;

        /**
		* SourceDataFile
		**/
        SourceDataFile: string;

        /**
		* OLAP
		**/
        readonly OLAP: boolean;

        /**
		* UseLocalConnection
		**/
        UseLocalConnection: boolean;

        /**
		* IsConnected
		**/
        readonly IsConnected: boolean;

        /**
		* ServerCredentialsMethod
		**/
        ServerCredentialsMethod: EtXlCredentialsMethod;

        /**
		* RetrieveInOfficeUILang
		**/
        RetrieveInOfficeUILang: boolean;

        /**
		* ServerSSOApplicationID
		**/
        ServerSSOApplicationID: string;

        /**
		* AlwaysUseConnectionFile
		**/
        AlwaysUseConnectionFile: boolean;

        /**
		* ServerFontStyle
		**/
        ServerFontStyle: boolean;

        /**
		* LocaleID
		**/
        LocaleID: number;

        Reconnect(): void;

    }

    interface EtODBCConnection {
        /**
		* Connection
		**/
        Connection: any;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* SourceConnectionFile
		**/
        SourceConnectionFile: string;

        /**
		* CommandType
		**/
        CommandType: EtXlCmdType;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* CommandText
		**/
        CommandText: any;

        /**
		* RefreshOnFileOpen
		**/
        RefreshOnFileOpen: boolean;

        /**
		* Refreshing
		**/
        readonly Refreshing: boolean;

        /**
		* EnableRefresh
		**/
        EnableRefresh: boolean;

        /**
		* BackgroundQuery
		**/
        BackgroundQuery: boolean;

        CancelRefresh(): void;

        Refresh(): void;

        /**
		* RefreshDate
		**/
        readonly RefreshDate: string;

        /**
		* RefreshPeriod
		**/
        RefreshPeriod: number;

        /**
		* RobustConnect
		**/
        RobustConnect: EtXlRobustConnect;

        SaveAsODC(ODCFileName?: string, Description?: any, Keywords?: any): void;

        /**
		* SourceData
		**/
        SourceData: any;

        /**
		* SavePassword
		**/
        SavePassword: boolean;

        /**
		* SourceDataFile
		**/
        SourceDataFile: string;

        /**
		* ServerCredentialsMethod
		**/
        ServerCredentialsMethod: EtXlCredentialsMethod;

        /**
		* ServerSSOApplicationID
		**/
        ServerSSOApplicationID: string;

        /**
		* AlwaysUseConnectionFile
		**/
        AlwaysUseConnectionFile: boolean;

    }

    interface EtRanges {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtRange): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Default(Index?: any, RHS?: EtRange): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        /**
		* Count
		**/
        readonly Count: number;

    }

    interface EtDatabar {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        SetLastPriority(): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* MaxPoint
		**/
        readonly MaxPoint: EtConditionValue;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* PercentMax
		**/
        PercentMax: number;

        /**
		* PercentMin
		**/
        PercentMin: number;

        /**
		* StopIfTrue
		**/
        readonly StopIfTrue: boolean;

        /**
		* Priority
		**/
        Priority: number;

        SetFirstPriority(): void;

        /**
		* MinPoint
		**/
        readonly MinPoint: EtConditionValue;

        /**
		* AppliesTo
		**/
        readonly AppliesTo: EtRange;

        /**
		* BarColor
		**/
        readonly BarColor: any;

        /**
		* ShowValue
		**/
        ShowValue: boolean;

        /**
		* BarBorder
		**/
        readonly BarBorder: EtDataBarBorder;

        /**
		* Type
		**/
        readonly Type: number;

        Delete(): void;

        ModifyAppliesToRange(Range?: EtRange): void;

        /**
		* ScopeType
		**/
        ScopeType: EtXlPivotConditionScope;

        /**
		* PTCondition
		**/
        readonly PTCondition: boolean;

        /**
		* Direction
		**/
        Direction: number;

        /**
		* BarFillType
		**/
        BarFillType: EtXlDataBarFillType;

        /**
		* AxisPosition
		**/
        AxisPosition: EtXlDataBarAxisPosition;

        /**
		* AxisColor
		**/
        readonly AxisColor: any;

        /**
		* NegativeBarFormat
		**/
        readonly NegativeBarFormat: EtNegativeBarFormat;

    }

    interface EtSparkline {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Location
		**/
        readonly Location: EtRange;

        /**
		* SourceData
		**/
        SourceData: string;

        ModifySourceData(Formula?: string): void;

        ModifyLocation(Range?: EtRange): void;

    }

    interface EtPivotTableChangeList {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtValueChange): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Default(Index?: any, RHS?: EtValueChange): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        /**
		* Count
		**/
        readonly Count: number;

        Add(Tuple?: string, Value?: number, AllocationValue?: any, AllocationMethod?: any, AllocationWeightExpression?: any, RHS?: EtValueChange): void;

    }

    interface EtColorScale {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        SetLastPriority(): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* StopIfTrue
		**/
        readonly StopIfTrue: boolean;

        /**
		* Priority
		**/
        Priority: number;

        SetFirstPriority(): void;

        /**
		* AppliesTo
		**/
        readonly AppliesTo: EtRange;

        /**
		* Type
		**/
        readonly Type: number;

        Delete(): void;

        ModifyAppliesToRange(Range?: EtRange): void;

        /**
		* ScopeType
		**/
        ScopeType: EtXlPivotConditionScope;

        /**
		* PTCondition
		**/
        readonly PTCondition: boolean;

        /**
		* ColorScaleCriteria
		**/
        readonly ColorScaleCriteria: EtColorScaleCriteria;

    }

    interface EtConnectorFormat extends Kso.KsoConnectorFormat {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

    }

    interface EtModelConnection {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* CommandType
		**/
        CommandType: EtXlCmdType;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* CommandText
		**/
        CommandText: any;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* CalculatedMembers
		**/
        readonly CalculatedMembers: EtCalculatedMembers;

        /**
		* ADOConnection
		**/
        readonly ADOConnection: any;

    }

    interface EtDataFeedConnection {
        /**
		* Connection
		**/
        Connection: any;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* RefreshDate
		**/
        readonly RefreshDate: string;

        /**
		* SourceConnectionFile
		**/
        SourceConnectionFile: string;

        /**
		* CommandType
		**/
        CommandType: EtXlCmdType;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* CommandText
		**/
        CommandText: any;

        /**
		* AlwaysUseConnectionFile
		**/
        AlwaysUseConnectionFile: boolean;

        /**
		* RefreshOnFileOpen
		**/
        RefreshOnFileOpen: boolean;

        /**
		* Refreshing
		**/
        readonly Refreshing: boolean;

        /**
		* EnableRefresh
		**/
        EnableRefresh: boolean;

        /**
		* RefreshPeriod
		**/
        RefreshPeriod: number;

        /**
		* SavePassword
		**/
        SavePassword: boolean;

        /**
		* ServerCredentialsMethod
		**/
        ServerCredentialsMethod: EtXlCredentialsMethod;

        /**
		* SourceDataFile
		**/
        SourceDataFile: string;

        CancelRefresh(): void;

        Refresh(): void;

        SaveAsODC(ODCFileName?: string, Description?: any, Keywords?: any): void;

    }

    interface EtIconCriterion {
        /**
		* Operator
		**/
        Operator: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* Type
		**/
        Type: EtXlConditionValueTypes;

        /**
		* Value
		**/
        Value: any;

        /**
		* Icon
		**/
        Icon: EtXlIcon;

    }

    interface EtPublishObject {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* AutoRepublish
		**/
        AutoRepublish: boolean;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* DivID
		**/
        readonly DivID: string;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Sheet
		**/
        readonly Sheet: string;

        Publish(Create?: any): void;

        /**
		* SourceType
		**/
        readonly SourceType: EtXlSourceType;

        /**
		* Source
		**/
        readonly Source: string;

        /**
		* HtmlType
		**/
        HtmlType: EtXlHtmlType;

        /**
		* Title
		**/
        Title: string;

        /**
		* Filename
		**/
        Filename: string;

    }

    interface EtPublishObjects {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtPublishObject): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add(SourceType?: EtXlSourceType, Filename?: string, Sheet?: any, Source?: any, HtmlType?: any, DivID?: any, Title?: any, RHS?: EtPublishObject): void;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtPublishObject): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        Publish(): void;

    }

    interface EtModelTableColumns {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtModelTableColumn): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtModelTableColumn): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtModelTableColumn {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* DataType
		**/
        readonly DataType: number;

    }

    interface EtHiLoLines {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtPivotFormulas {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtPivotFormula): void;

        _Add(Formula?: string, RHS?: EtPivotFormula): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtPivotFormula): void;

        _NewEnum(RHS?: any): void;

        Add(Formula?: string, UseStandardFormula?: any, RHS?: EtPivotFormula): void;

    }

    interface EtScenarios {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtScenario): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Merge(Source?: any, RHS?: any): void;

        Add(Name?: string, ChangingCells?: any, Values?: any, Comment?: any, Locked?: any, Hidden?: any, RHS?: EtScenario): void;

        /**
		* Count
		**/
        readonly Count: number;

        CreateSummary(ReportType?: EtXlSummaryReportType, ResultCells?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtPivotAxis {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* PivotLines
		**/
        readonly PivotLines: EtPivotLines;

    }

    interface EtModel {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* DataModelConnection
		**/
        readonly DataModelConnection: EtWorkbookConnection;

        /**
		* ModelRelationships
		**/
        readonly ModelRelationships: EtModelRelationships;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        AddConnection(ConnectionToDataSource?: EtWorkbookConnection, RHS?: EtWorkbookConnection): void;

        /**
		* ModelTables
		**/
        readonly ModelTables: EtModelTables;

        Refresh(): void;

        CreateModelWorkbookConnection(ModelTable?: any, RHS?: EtWorkbookConnection): void;

        /**
		* Name
		**/
        readonly Name: string;

        Initialize(): void;

    }

    interface EtPivotLineCells {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtPivotCell): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Default(Index?: any, RHS?: EtPivotCell): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* Full
		**/
        readonly Full: boolean;

    }

    interface EtOptionButton {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* PhoneticAccelerator
		**/
        PhoneticAccelerator: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        /**
		* Accelerator
		**/
        Accelerator: any;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* GroupBox
		**/
        readonly GroupBox: EtGroupBox;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* _Default
		**/
        _Default: number;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Text
		**/
        Text: string;

        /**
		* Display3DShading
		**/
        Display3DShading: boolean;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Value
		**/
        Value: any;

        /**
		* LinkedCell
		**/
        LinkedCell: string;

    }

    interface EtDebugTools {
        Dump(Path?: string): void;

        RunCommand(cmdid?: number, param1?: any, param2?: any, param3?: any): void;

        Do(): void;

        Diagnose(): void;

        Report(): void;

        Profile(): void;

        GetResult(cmdid?: number, param?: any, res?: any): void;

        /**
		* Solver
		**/
        readonly Solver: EtSolver;

        /**
		* DisableMsgBox
		**/
        DisableMsgBox: boolean;

        UndoTransBegin(book?: EtWorkbook): void;

        UndoTransEnd(book?: EtWorkbook, cancelTrans?: boolean, desc?: string): void;

    }

    interface EtGroupShapes extends Kso.KsoGroupShapes {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        _Default(Index?: any, RHS?: Kso.KsoShape): void;

    }

    interface EtPivotItemList {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtPivotItem): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Field?: any, RHS?: EtPivotItem): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtActions {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtAction): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Default(Index?: any, RHS?: EtAction): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        /**
		* Count
		**/
        readonly Count: number;

    }

    interface EtSlicerCaches {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtSlicerCache): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtSlicerCache): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        Add(Source?: any, SourceField?: any, Name?: any, RHS?: EtSlicerCache): void;

        Add2(Source?: any, SourceField?: any, Name?: any, SlicerCacheType?: any, RHS?: EtSlicerCache): void;

    }

    interface EtSlicerCache {
        /**
		* Slicers
		**/
        readonly Slicers: EtSlicers;

        /**
		* VisibleSlicerItemsList
		**/
        VisibleSlicerItemsList: any;

        /**
		* OLAP
		**/
        readonly OLAP: boolean;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* List
		**/
        readonly List: boolean;

        /**
		* WorkbookConnection
		**/
        readonly WorkbookConnection: EtWorkbookConnection;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* SourceType
		**/
        readonly SourceType: EtXlPivotTableSourceType;

        /**
		* PivotTables
		**/
        readonly PivotTables: EtSlicerPivotTables;

        /**
		* SlicerCacheLevels
		**/
        readonly SlicerCacheLevels: EtSlicerCacheLevels;

        /**
		* RequireManualUpdate
		**/
        RequireManualUpdate: boolean;

        /**
		* Name
		**/
        Name: string;

        /**
		* VisibleSlicerItems
		**/
        readonly VisibleSlicerItems: EtSlicerItems;

        /**
		* SlicerItems
		**/
        readonly SlicerItems: EtSlicerItems;

        /**
		* TimelineState
		**/
        readonly TimelineState: EtTimelineState;

        /**
		* CrossFilterType
		**/
        CrossFilterType: EtXlSlicerCrossFilterType;

        /**
		* SortItems
		**/
        SortItems: EtXlSlicerSort;

        /**
		* SourceName
		**/
        readonly SourceName: string;

        /**
		* SortUsingCustomLists
		**/
        SortUsingCustomLists: boolean;

        /**
		* ShowAllItems
		**/
        ShowAllItems: boolean;

        /**
		* FilterCleared
		**/
        readonly FilterCleared: boolean;

        ClearManualFilter(): void;

        Delete(): void;

        ClearAllFilters(): void;

        /**
		* SlicerCacheType
		**/
        readonly SlicerCacheType: EtXlSlicerCacheType;

        /**
		* ListObject
		**/
        readonly ListObject: EtListObject;

        ClearDateFilter(): void;

    }

    interface EtSlicerCacheLevel {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* SortItems
		**/
        SortItems: EtXlSlicerSort;

        /**
		* SlicerItems
		**/
        readonly SlicerItems: EtSlicerItems;

        /**
		* Ordinal
		**/
        readonly Ordinal: number;

        /**
		* CrossFilterType
		**/
        CrossFilterType: EtXlSlicerCrossFilterType;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* VisibleSlicerItemsList
		**/
        readonly VisibleSlicerItemsList: any;

    }

    interface EtSlicerCacheLevels {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Level?: any, RHS?: EtSlicerCacheLevel): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Level?: any, RHS?: EtSlicerCacheLevel): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtOLEDBErrors {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: number, RHS?: EtOLEDBError): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: number, RHS?: EtOLEDBError): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtSlicerItems {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtSlicerItem): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtSlicerItem): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtWorksheetView {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* DisplayFormulas
		**/
        DisplayFormulas: boolean;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Sheet
		**/
        readonly Sheet: any;

        /**
		* DisplayHeadings
		**/
        DisplayHeadings: boolean;

        /**
		* DisplayGridlines
		**/
        DisplayGridlines: boolean;

        /**
		* DisplayOutline
		**/
        DisplayOutline: boolean;

        /**
		* DisplayZeros
		**/
        DisplayZeros: boolean;

    }

    interface EtSlicerItem {
        /**
		* SourceNameStandard
		**/
        readonly SourceNameStandard: string;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Value
		**/
        readonly Value: string;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: EtSlicerCache;

        /**
		* Caption
		**/
        readonly Caption: string;

        /**
		* SourceName
		**/
        readonly SourceName: any;

        /**
		* Selected
		**/
        Selected: boolean;

        /**
		* HasData
		**/
        readonly HasData: boolean;

    }

    interface EtTimelineState {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* EndDate
		**/
        readonly EndDate: any;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* StartDate
		**/
        readonly StartDate: any;

        /**
		* FilterType
		**/
        readonly FilterType: EtXlPivotFilterType;

        /**
		* FilterValue1
		**/
        readonly FilterValue1: any;

        /**
		* FilterValue2
		**/
        readonly FilterValue2: any;

        /**
		* SingleRangeFilterState
		**/
        readonly SingleRangeFilterState: boolean;

        SetFilterDateRange(StartDate?: any, EndDate?: any, RHS?: EtXlFilterStatus): void;

    }

    interface EtListColumns {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtListColumn): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add(Position?: any, RHS?: EtListColumn): void;

        _Default(Index?: any, RHS?: EtListColumn): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        /**
		* Count
		**/
        readonly Count: number;

    }

    interface EtCanvasShapes extends Kso.KsoCanvasShapes {}

    interface EtListColumn {
        /**
		* Index
		**/
        readonly Index: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Range
		**/
        readonly Range: EtRange;

        /**
		* Name
		**/
        Name: string;

        /**
		* Total
		**/
        readonly Total: EtRange;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* _Default
		**/
        readonly _Default: string;

        /**
		* ListDataFormat
		**/
        readonly ListDataFormat: EtListDataFormat;

        /**
		* TotalsCalculation
		**/
        TotalsCalculation: EtXlTotalsCalculation;

        /**
		* XPath
		**/
        readonly XPath: EtXPath;

        /**
		* SharePointFormula
		**/
        readonly SharePointFormula: string;

        /**
		* DataBodyRange
		**/
        readonly DataBodyRange: EtRange;

    }

    interface EtListDataFormat {
        /**
		* DefaultValue
		**/
        readonly DefaultValue: any;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* lcid
		**/
        readonly lcid: number;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* _Default
		**/
        readonly _Default: EtXlListDataType;

        /**
		* IsPercent
		**/
        readonly IsPercent: boolean;

        /**
		* Choices
		**/
        readonly Choices: any;

        /**
		* ReadOnly
		**/
        readonly ReadOnly: boolean;

        /**
		* DecimalPlaces
		**/
        readonly DecimalPlaces: number;

        /**
		* MaxCharacters
		**/
        readonly MaxCharacters: number;

        /**
		* MaxNumber
		**/
        readonly MaxNumber: any;

        /**
		* MinNumber
		**/
        readonly MinNumber: any;

        /**
		* Required
		**/
        readonly Required: boolean;

        /**
		* Type
		**/
        readonly Type: EtXlListDataType;

        /**
		* AllowFillIn
		**/
        readonly AllowFillIn: boolean;

    }

    interface EtButtons {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Text
		**/
        Text: string;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        /**
		* Accelerator
		**/
        Accelerator: any;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        Add(Left?: number, Top?: number, Width?: number, Height?: number, RHS?: EtButton): void;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        _Dummy22(): void;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* HelpButton
		**/
        HelpButton: boolean;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* AddIndent
		**/
        AddIndent: boolean;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* AutoSize
		**/
        AutoSize: boolean;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* CancelButton
		**/
        CancelButton: boolean;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* DefaultButton
		**/
        DefaultButton: boolean;

        /**
		* DismissButton
		**/
        DismissButton: boolean;

        Group(RHS?: EtGroupObject): void;

        /**
		* PhoneticAccelerator
		**/
        PhoneticAccelerator: any;

        /**
		* Count
		**/
        readonly Count: number;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtXPath {
        /**
		* Repeating
		**/
        readonly Repeating: boolean;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Map
		**/
        readonly Map: EtXmlMap;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Value
		**/
        readonly Value: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        SetValue(Map?: EtXmlMap, XPath?: string, SelectionNamespace?: any, Repeating?: any): void;

        /**
		* _Default
		**/
        readonly _Default: string;

        Clear(): void;

    }

    interface EtXmlSchema {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Namespace
		**/
        readonly Namespace: EtXmlNamespace;

        /**
		* XML
		**/
        readonly XML: string;

    }

    interface EtXmlSchemas {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtXmlSchema): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Default(Index?: any, RHS?: EtXmlSchema): void;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtListRow {
        /**
		* InvalidData
		**/
        readonly InvalidData: boolean;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Range
		**/
        readonly Range: EtRange;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

    }

    interface EtListRows {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtListRow): void;

        _Add(Position?: any, RHS?: EtListRow): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Default(Index?: any, RHS?: EtListRow): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        /**
		* Count
		**/
        readonly Count: number;

        Add(Position?: any, AlwaysInsert?: any, RHS?: EtListRow): void;

    }

    interface EtQueryTable {
        /**
		* RowNumbers
		**/
        RowNumbers: boolean;

        /**
		* WebPreFormattedTextToColumns
		**/
        WebPreFormattedTextToColumns: boolean;

        /**
		* Sql
		**/
        Sql: any;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* FillAdjacentFormulas
		**/
        FillAdjacentFormulas: boolean;

        /**
		* FieldNames
		**/
        FieldNames: boolean;

        /**
		* Name
		**/
        Name: string;

        /**
		* WebTables
		**/
        WebTables: string;

        /**
		* TextFileSpaceDelimiter
		**/
        TextFileSpaceDelimiter: boolean;

        /**
		* CommandText
		**/
        CommandText: any;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* SourceDataFile
		**/
        SourceDataFile: string;

        /**
		* HasAutoFormat
		**/
        HasAutoFormat: boolean;

        /**
		* TextFileFixedColumnWidths
		**/
        TextFileFixedColumnWidths: any;

        /**
		* EnableRefresh
		**/
        EnableRefresh: boolean;

        /**
		* Refreshing
		**/
        readonly Refreshing: boolean;

        /**
		* RefreshStyle
		**/
        RefreshStyle: EtXlCellInsertionMode;

        /**
		* RefreshOnFileOpen
		**/
        RefreshOnFileOpen: boolean;

        /**
		* ResultRange
		**/
        readonly ResultRange: EtRange;

        /**
		* RefreshPeriod
		**/
        RefreshPeriod: number;

        /**
		* FetchedRowOverflow
		**/
        readonly FetchedRowOverflow: boolean;

        /**
		* PreserveColumnInfo
		**/
        PreserveColumnInfo: boolean;

        /**
		* BackgroundQuery
		**/
        BackgroundQuery: boolean;

        /**
		* EnableEditing
		**/
        EnableEditing: boolean;

        CancelRefresh(): void;

        /**
		* SavePassword
		**/
        SavePassword: boolean;

        /**
		* Destination
		**/
        readonly Destination: EtRange;

        /**
		* Connection
		**/
        Connection: any;

        /**
		* PostText
		**/
        PostText: string;

        /**
		* TextFileParseType
		**/
        TextFileParseType: EtXlTextParsingType;

        Delete(): void;

        /**
		* TextFileTabDelimiter
		**/
        TextFileTabDelimiter: boolean;

        Refresh(BackgroundQuery?: any, RHS?: boolean): void;

        /**
		* RobustConnect
		**/
        RobustConnect: EtXlRobustConnect;

        /**
		* Parameters
		**/
        readonly Parameters: EtParameters;

        /**
		* Recordset
		**/
        readonly Recordset: any;

        /**
		* SaveData
		**/
        SaveData: boolean;

        /**
		* TablesOnlyFromHTML
		**/
        TablesOnlyFromHTML: boolean;

        /**
		* TextFilePlatform
		**/
        TextFilePlatform: number;

        /**
		* TextFileStartRow
		**/
        TextFileStartRow: number;

        /**
		* TextFileConsecutiveDelimiter
		**/
        TextFileConsecutiveDelimiter: boolean;

        /**
		* TextFileTextQualifier
		**/
        TextFileTextQualifier: EtXlTextQualifier;

        /**
		* TextFileSemicolonDelimiter
		**/
        TextFileSemicolonDelimiter: boolean;

        /**
		* MaintainConnection
		**/
        MaintainConnection: boolean;

        /**
		* AdjustColumnWidth
		**/
        AdjustColumnWidth: boolean;

        /**
		* TextFileCommaDelimiter
		**/
        TextFileCommaDelimiter: boolean;

        /**
		* TextFileOtherDelimiter
		**/
        TextFileOtherDelimiter: string;

        /**
		* TextFileColumnDataTypes
		**/
        TextFileColumnDataTypes: any;

        /**
		* PreserveFormatting
		**/
        PreserveFormatting: boolean;

        /**
		* WebDisableDateRecognition
		**/
        WebDisableDateRecognition: boolean;

        /**
		* SourceConnectionFile
		**/
        SourceConnectionFile: string;

        /**
		* CommandType
		**/
        CommandType: EtXlCmdType;

        /**
		* TextFilePromptOnRefresh
		**/
        TextFilePromptOnRefresh: boolean;

        /**
		* TextFileTrailingMinusNumbers
		**/
        TextFileTrailingMinusNumbers: boolean;

        /**
		* QueryType
		**/
        readonly QueryType: EtXlQueryType;

        /**
		* TextFileDecimalSeparator
		**/
        TextFileDecimalSeparator: string;

        /**
		* TextFileThousandsSeparator
		**/
        TextFileThousandsSeparator: string;

        /**
		* WebSelectionType
		**/
        WebSelectionType: EtXlWebSelectionType;

        ResetTimer(): void;

        /**
		* WebFormatting
		**/
        WebFormatting: EtXlWebFormatting;

        /**
		* EditWebPage
		**/
        EditWebPage: any;

        /**
		* WebSingleBlockTextImport
		**/
        WebSingleBlockTextImport: boolean;

        SaveAsODC(ODCFileName?: string, Description?: any, Keywords?: any): void;

        /**
		* WebConsecutiveDelimitersAsOne
		**/
        WebConsecutiveDelimitersAsOne: boolean;

        /**
		* WebDisableRedirections
		**/
        WebDisableRedirections: boolean;

        /**
		* ListObject
		**/
        readonly ListObject: EtListObject;

        /**
		* TextFileVisualLayout
		**/
        TextFileVisualLayout: EtXlTextVisualLayoutType;

        /**
		* WorkbookConnection
		**/
        readonly WorkbookConnection: EtWorkbookConnection;

        /**
		* Sort
		**/
        readonly Sort: EtSort;

    }

    interface EtListBoxes {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        Add(Left?: number, Top?: number, Width?: number, Height?: number, RHS?: EtListBox): void;

        _Dummy22(): void;

        /**
		* Visible
		**/
        Visible: boolean;

        RemoveAllItems(RHS?: any): void;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        AddItem(Text?: any, Index?: any, RHS?: any): void;

        /**
		* Display3DShading
		**/
        Display3DShading: boolean;

        /**
		* _Default
		**/
        _Default: number;

        /**
		* Value
		**/
        Value: number;

        /**
		* LinkedCell
		**/
        LinkedCell: string;

        _Dummy33(): void;

        _Dummy31(): void;

        List(Index?: any, RHS?: any): void;

        /**
		* ListFillRange
		**/
        ListFillRange: string;

        /**
		* ListIndex
		**/
        ListIndex: number;

        /**
		* MultiSelect
		**/
        MultiSelect: number;

        RemoveItem(Index?: number, Count?: any, RHS?: any): void;

        Selected(Index?: any, RHS?: any): void;

        /**
		* Count
		**/
        readonly Count: number;

        Group(RHS?: EtGroupObject): void;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtParameter {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        Name: string;

        /**
		* Value
		**/
        readonly Value: any;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* SourceRange
		**/
        readonly SourceRange: EtRange;

        /**
		* Type
		**/
        readonly Type: EtXlParameterType;

        /**
		* DataType
		**/
        DataType: EtXlParameterDataType;

        /**
		* PromptString
		**/
        readonly PromptString: string;

        SetParam(Type?: EtXlParameterType, Value?: any): void;

        /**
		* RefreshOnChange
		**/
        RefreshOnChange: boolean;

    }

    interface EtParameters {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtParameter): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add(Name?: string, iDataType?: any, RHS?: EtParameter): void;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtParameter): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtSparkColor {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Color
		**/
        readonly Color: EtFormatColor;

    }

    interface EtSort {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* MatchCase
		**/
        MatchCase: boolean;

        /**
		* Orientation
		**/
        Orientation: EtXlSortOrientation;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* SortMethod
		**/
        SortMethod: EtXlSortMethod;

        /**
		* SortFields
		**/
        readonly SortFields: EtSortFields;

        /**
		* Rng
		**/
        readonly Rng: EtRange;

        /**
		* Header
		**/
        Header: EtXlYesNoGuess;

        SetRange(Rng?: EtRange): void;

        Apply(): void;

    }

    interface EtSortField {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* CustomOrder
		**/
        CustomOrder: any;

        /**
		* SortOnValue
		**/
        readonly SortOnValue: any;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Order
		**/
        Order: EtXlSortOrder;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* SortOn
		**/
        SortOn: EtXlSortOn;

        /**
		* Key
		**/
        readonly Key: EtRange;

        /**
		* DataOption
		**/
        DataOption: EtXlSortDataOption;

        /**
		* Priority
		**/
        Priority: number;

        Delete(): void;

        ModifyKey(Key?: EtRange): void;

        SetIcon(Icon?: EtIcon): void;

    }

    interface EtSortFields {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtSortField): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Clear(): void;

        Add(Key?: EtRange, SortOn?: any, Order?: any, CustomOrder?: any, DataOption?: any, RHS?: EtSortField): void;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtSortField): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtTableStyles {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtTableStyle): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        Add(TableStyleName?: string, RHS?: EtTableStyle): void;

        _Default(Index?: any, RHS?: EtTableStyle): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtIcon {
        /**
		* Index
		**/
        readonly Index: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: EtIconSet;

    }

    interface EtIconSets {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: any): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtIconSet {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtIcon): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* ID
		**/
        readonly ID: EtXlIconSet;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtIcon): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtRefreshEvents {
        BeforeRefresh(Cancel?: boolean): void;

        AfterRefresh(Success?: boolean): void;

    }

    interface EtAutoFilter {
        ShowAllData(): void;

        /**
		* FilterMode
		**/
        readonly FilterMode: boolean;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Filters
		**/
        readonly Filters: EtFilters;

        /**
		* Sort
		**/
        readonly Sort: EtSort;

        /**
		* Range
		**/
        readonly Range: EtRange;

        /**
		* Parent
		**/
        readonly Parent: any;

        ApplyFilter(): void;

    }

    interface EtXmlNamespaces {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtXmlNamespace): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Value
		**/
        readonly Value: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        InstallManifest(Path?: string, InstallForAllUsers?: any): void;

        _Default(Index?: any, RHS?: EtXmlNamespace): void;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtListObjects {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtListObject): void;

        _Add(SourceType?: EtXlListObjectSourceType, Source?: any, LinkSource?: any, XlListObjectHasHeaders?: EtXlYesNoGuess, Destination?: any, RHS?: EtListObject): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Default(Index?: any, RHS?: EtListObject): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        /**
		* Count
		**/
        readonly Count: number;

        Add(SourceType?: EtXlListObjectSourceType, Source?: any, LinkSource?: any, XlListObjectHasHeaders?: EtXlYesNoGuess, Destination?: any, TableStyleName?: any, RHS?: EtListObject): void;

    }

    interface EtFilters {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: number, RHS?: EtFilter): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: number, RHS?: EtFilter): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtFreeformBuilder extends Kso.KsoFreeformBuilder {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

    }

    interface EtFilter {
        /**
		* Operator
		**/
        Operator: EtXlAutoFilterOperator;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* On
		**/
        readonly On: boolean;

        /**
		* Criteria1
		**/
        readonly Criteria1: any;

        /**
		* _Operator
		**/
        readonly _Operator: EtXlAutoFilterOperator;

        /**
		* Criteria2
		**/
        readonly Criteria2: any;

        /**
		* Count
		**/
        readonly Count: number;

    }

    interface EtTableObject {
        /**
		* Destination
		**/
        readonly Destination: EtRange;

        /**
		* RowNumbers
		**/
        RowNumbers: boolean;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* FetchedRowOverflow
		**/
        readonly FetchedRowOverflow: boolean;

        /**
		* ResultRange
		**/
        readonly ResultRange: EtRange;

        /**
		* RefreshStyle
		**/
        RefreshStyle: EtXlCellInsertionMode;

        /**
		* EnableRefresh
		**/
        EnableRefresh: boolean;

        Delete(): void;

        Refresh(RHS?: boolean): void;

        /**
		* EnableEditing
		**/
        EnableEditing: boolean;

        /**
		* PreserveColumnInfo
		**/
        PreserveColumnInfo: boolean;

        /**
		* PreserveFormatting
		**/
        PreserveFormatting: boolean;

        /**
		* AdjustColumnWidth
		**/
        AdjustColumnWidth: boolean;

        /**
		* ListObject
		**/
        readonly ListObject: EtListObject;

        /**
		* WorkbookConnection
		**/
        readonly WorkbookConnection: EtWorkbookConnection;

    }

    interface EtTimelineViewState {
        /**
		* ShowSelectionLabel
		**/
        ShowSelectionLabel: boolean;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Level
		**/
        Level: EtXlTimelineLevel;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* ShowHorizontalScrollbar
		**/
        ShowHorizontalScrollbar: boolean;

        /**
		* ShowHeader
		**/
        ShowHeader: boolean;

        /**
		* ShowTimeLevel
		**/
        ShowTimeLevel: boolean;

    }

    interface EtAddIns {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtAddIn): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add(Filename?: string, CopyFile?: any, RHS?: EtAddIn): void;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        _Default(Index?: any, RHS?: EtAddIn): void;

    }

    interface EtWindow {
        /**
		* DisplayFormulas
		**/
        DisplayFormulas: boolean;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* ActiveCell
		**/
        readonly ActiveCell: EtRange;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Caption
		**/
        Caption: any;

        Activate(RHS?: any): void;

        /**
		* SplitVertical
		**/
        SplitVertical: number;

        NewWindow(RHS?: EtWindow): void;

        ActivatePrevious(RHS?: any): void;

        ActivateNext(RHS?: any): void;

        /**
		* ActivePane
		**/
        readonly ActivePane: EtPane;

        /**
		* ActiveChart
		**/
        readonly ActiveChart: EtChart;

        /**
		* VisibleRange
		**/
        readonly VisibleRange: EtRange;

        /**
		* ActiveSheet
		**/
        readonly ActiveSheet: any;

        /**
		* DisplayWorkbookTabs
		**/
        DisplayWorkbookTabs: boolean;

        /**
		* WindowNumber
		**/
        readonly WindowNumber: number;

        Close(SaveChanges?: any, Filename?: any, RouteWorkbook?: any, RHS?: boolean): void;

        /**
		* DisplayGridlines
		**/
        DisplayGridlines: boolean;

        /**
		* SplitRow
		**/
        SplitRow: number;

        /**
		* DisplayHeadings
		**/
        DisplayHeadings: boolean;

        /**
		* GridlineColorIndex
		**/
        GridlineColorIndex: Kso.KsoXlColorIndex;

        /**
		* ActiveSheetView
		**/
        readonly ActiveSheetView: any;

        /**
		* DisplayHorizontalScrollBar
		**/
        DisplayHorizontalScrollBar: boolean;

        /**
		* DisplayOutline
		**/
        DisplayOutline: boolean;

        /**
		* DisplayRightToLeft
		**/
        DisplayRightToLeft: boolean;

        /**
		* RangeSelection
		**/
        readonly RangeSelection: EtRange;

        /**
		* ScrollRow
		**/
        ScrollRow: number;

        /**
		* Panes
		**/
        readonly Panes: EtPanes;

        /**
		* _DisplayRightToLeft
		**/
        _DisplayRightToLeft: boolean;

        /**
		* DisplayVerticalScrollBar
		**/
        DisplayVerticalScrollBar: boolean;

        /**
		* TabRatio
		**/
        TabRatio: number;

        /**
		* EnableResize
		**/
        EnableResize: boolean;

        /**
		* DisplayZeros
		**/
        DisplayZeros: boolean;

        /**
		* Top
		**/
        Top: number;

        /**
		* FreezePanes
		**/
        FreezePanes: boolean;

        /**
		* Left
		**/
        Left: number;

        /**
		* GridlineColor
		**/
        GridlineColor: number;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        LargeScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any, RHS?: any): void;

        /**
		* ScrollColumn
		**/
        ScrollColumn: number;

        /**
		* OnWindow
		**/
        OnWindow: string;

        /**
		* WindowState
		**/
        WindowState: EtXlWindowState;

        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, RHS?: any): void;

        /**
		* Type
		**/
        readonly Type: EtXlWindowType;

        /**
		* UsableWidth
		**/
        readonly UsableWidth: number;

        /**
		* UsableHeight
		**/
        readonly UsableHeight: number;

        /**
		* Hwnd
		**/
        readonly Hwnd: number;

        PrintPreview(EnableChanges?: any, RHS?: any): void;

        /**
		* Visible
		**/
        Visible: boolean;

        ScrollWorkbookTabs(Sheets?: any, Position?: any, RHS?: any): void;

        /**
		* SelectedSheets
		**/
        readonly SelectedSheets: EtSheets;

        /**
		* Selection
		**/
        readonly Selection: any;

        /**
		* Width
		**/
        Width: number;

        SmallScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any, RHS?: any): void;

        /**
		* Split
		**/
        Split: boolean;

        /**
		* SplitColumn
		**/
        SplitColumn: number;

        /**
		* SplitHorizontal
		**/
        SplitHorizontal: number;

        /**
		* Zoom
		**/
        Zoom: any;

        /**
		* View
		**/
        View: EtXlWindowView;

        PointsToScreenPixelsX(Points?: number, RHS?: number): void;

        PointsToScreenPixelsY(Points?: number, RHS?: number): void;

        RangeFromPoint(x?: number, y?: number, RHS?: any): void;

        ScrollIntoView(Left?: number, Top?: number, Width?: number, Height?: number, Start?: any): void;

        /**
		* SheetViews
		**/
        readonly SheetViews: EtSheetViews;

        PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, RHS?: any): void;

        /**
		* DisplayRuler
		**/
        DisplayRuler: boolean;

        /**
		* AutoFilterDateGrouping
		**/
        AutoFilterDateGrouping: boolean;

        /**
		* DisplayWhitespace
		**/
        DisplayWhitespace: boolean;

    }

    interface EtPivotValueCell {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* ServerActions
		**/
        readonly ServerActions: EtActions;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        ShowDetail(): void;

        /**
		* Value
		**/
        readonly Value: any;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* PivotCell
		**/
        readonly PivotCell: EtPivotCell;

    }

    interface EtSoundNote {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Record(RHS?: any): void;

        Play(RHS?: any): void;

        Import(Filename?: string, RHS?: any): void;

    }

    interface EtValidation {
        /**
		* Formula2
		**/
        readonly Formula2: string;

        /**
		* Formula1
		**/
        readonly Formula1: string;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* AlertStyle
		**/
        readonly AlertStyle: number;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add(Type?: EtXlDVType, AlertStyle?: any, Operator?: any, Formula1?: any, Formula2?: any): void;

        /**
		* IgnoreBlank
		**/
        IgnoreBlank: boolean;

        /**
		* IMEMode
		**/
        IMEMode: number;

        /**
		* InCellDropdown
		**/
        InCellDropdown: boolean;

        /**
		* ErrorMessage
		**/
        ErrorMessage: string;

        /**
		* ErrorTitle
		**/
        ErrorTitle: string;

        /**
		* InputMessage
		**/
        InputMessage: string;

        /**
		* InputTitle
		**/
        InputTitle: string;

        Modify(Type?: any, AlertStyle?: any, Operator?: any, Formula1?: any, Formula2?: any): void;

        /**
		* Operator
		**/
        readonly Operator: number;

        /**
		* ShowError
		**/
        ShowError: boolean;

        /**
		* ShowInput
		**/
        ShowInput: boolean;

        /**
		* Type
		**/
        readonly Type: number;

        /**
		* Value
		**/
        readonly Value: boolean;

    }

    interface EtWorksheets {
        FillAcrossSheets(Range?: EtRange, Type?: EtXlFillWith, lcid?: number): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(lcid?: number): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add2(Before?: any, After?: any, Count?: any, NewLayout?: any, RHS?: any): void;

        PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, IgnorePrintAreas?: any, lcid?: number): void;

        Add(Before?: any, After?: any, Count?: any, Type?: any, lcid?: number, RHS?: any): void;

        Copy(Before?: any, After?: any, lcid?: number): void;

        /**
		* Count
		**/
        readonly Count: number;

        Move(Before?: any, After?: any, lcid?: number): void;

        /**
		* VPageBreaks
		**/
        readonly VPageBreaks: EtVPageBreaks;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, lcid?: number): void;

        PrintPreview(EnableChanges?: any, lcid?: number): void;

        Select(Replace?: any, lcid?: number): void;

        /**
		* HPageBreaks
		**/
        readonly HPageBreaks: EtHPageBreaks;

        /**
		* Visible
		**/
        Visible: number;

        _Default(Index?: any, RHS?: any): void;

        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, lcid?: number): void;

    }

    interface EtRoutingSlip {
        /**
		* Message
		**/
        Message: any;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Delivery
		**/
        Delivery: EtXlRoutingSlipDelivery;

        /**
		* ReturnWhenDone
		**/
        ReturnWhenDone: boolean;

        Recipients(Index?: any, RHS?: any): void;

        Reset(RHS?: any): void;

        /**
		* Status
		**/
        readonly Status: EtXlRoutingSlipStatus;

        /**
		* Subject
		**/
        Subject: any;

        /**
		* TrackStatus
		**/
        TrackStatus: boolean;

    }

    interface EtWorksheet {
        _CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, IgnoreFinalYaa?: any, SpellScript?: any, lcid?: number): void;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* _CodeName
		**/
        _CodeName: string;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, lcid?: number): void;

        /**
		* ProtectionMode
		**/
        readonly ProtectionMode: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        DrawingObjects(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(lcid?: number): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any, lcid?: number): void;

        Drawings(Index?: any, lcid?: number, RHS?: any): void;

        Copy(Before?: any, After?: any, lcid?: number): void;

        Activate(lcid?: number): void;

        /**
		* CodeName
		**/
        readonly CodeName: string;

        /**
		* PrintedCommentPages
		**/
        readonly PrintedCommentPages: number;

        Move(Before?: any, After?: any, lcid?: number): void;

        SetBackgroundPicture(Filename?: string): void;

        Unprotect(Password?: any, lcid?: number): void;

        /**
		* Name
		**/
        Name: string;

        /**
		* ProtectContents
		**/
        readonly ProtectContents: number;

        /**
		* Next
		**/
        readonly Next: any;

        /**
		* OnDoubleClick
		**/
        OnDoubleClick: number;

        Arcs(Index?: any, lcid?: number, RHS?: any): void;

        Select(Replace?: any, lcid?: number): void;

        /**
		* Cells
		**/
        readonly Cells: EtRange;

        /**
		* OnSheetActivate
		**/
        OnSheetActivate: number;

        /**
		* OnSheetDeactivate
		**/
        OnSheetDeactivate: number;

        /**
		* PageSetup
		**/
        readonly PageSetup: EtPageSetup;

        /**
		* Previous
		**/
        readonly Previous: any;

        /**
		* EnableCalculation
		**/
        EnableCalculation: boolean;

        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, lcid?: number): void;

        ScrollBars(Index?: any, lcid?: number, RHS?: any): void;

        PrintPreview(EnableChanges?: any, lcid?: number): void;

        /**
		* EnableSelection
		**/
        EnableSelection: EtXlEnableSelection;

        _SaveAs(Filename?: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any, lcid?: number): void;

        /**
		* ProtectDrawingObjects
		**/
        readonly ProtectDrawingObjects: number;

        /**
		* ProtectScenarios
		**/
        readonly ProtectScenarios: number;

        ResetAllPageBreaks(): void;

        /**
		* CircularReference
		**/
        readonly CircularReference: number;

        _Evaluate(Name?: any, lcid?: number, RHS?: any): void;

        /**
		* EnableAutoFilter
		**/
        EnableAutoFilter: number;

        /**
		* UsedRange
		**/
        readonly UsedRange: number;

        ChartObjects(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Visible
		**/
        Visible: number;

        /**
		* Shapes
		**/
        readonly Shapes: Kso.KsoShapes;

        /**
		* TransitionExpEval
		**/
        TransitionExpEval: number;

        /**
		* AutoFilterMode
		**/
        AutoFilterMode: number;

        /**
		* DisplayAutomaticPageBreaks
		**/
        DisplayAutomaticPageBreaks: number;

        PivotTableWizard(SourceType?: any, SourceData?: any, TableDestination?: any, TableName?: any, RowGrand?: any, ColumnGrand?: any, SaveData?: any, HasAutoFormat?: any, AutoPage?: any, Reserved?: any, BackgroundQuery?: any, OptimizeCache?: any, PageFieldOrder?: any, PageFieldWrapCount?: any, ReadData?: any, Connection?: any, lcid?: number, RHS?: EtPivotTable): void;

        Buttons(Index?: any, lcid?: number, RHS?: any): void;

        Calculate(lcid?: number): void;

        Evaluate(Name?: any, lcid?: number, RHS?: any): void;

        CheckBoxes(Index?: any, lcid?: number, RHS?: any): void;

        ClearArrows(lcid?: number): void;

        /**
		* EnableFormatConditionsCalculation
		**/
        EnableFormatConditionsCalculation: boolean;

        /**
		* Columns
		**/
        readonly Columns: EtRange;

        /**
		* Names
		**/
        readonly Names: EtNames;

        Spinners(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* ConsolidationFunction
		**/
        readonly ConsolidationFunction: number;

        /**
		* ConsolidationOptions
		**/
        readonly ConsolidationOptions: number;

        Lines(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* ConsolidationSources
		**/
        readonly ConsolidationSources: number;

        /**
		* EnablePivotTable
		**/
        EnablePivotTable: number;

        DropDowns(Index?: any, lcid?: number, RHS?: any): void;

        OLEObjects(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* EnableOutlining
		**/
        EnableOutlining: number;

        ListBoxes(Index?: any, lcid?: number, RHS?: any): void;

        Labels(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* FilterMode
		**/
        readonly FilterMode: number;

        GroupBoxes(Index?: any, lcid?: number, RHS?: any): void;

        GroupObjects(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* OnCalculate
		**/
        OnCalculate: number;

        /**
		* OnData
		**/
        OnData: number;

        /**
		* OnEntry
		**/
        OnEntry: number;

        OptionButtons(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Outline
		**/
        readonly Outline: EtOutline;

        Ovals(Index?: any, lcid?: number, RHS?: any): void;

        Paste(Destination?: any, Link?: any, lcid?: number): void;

        _PasteSpecial(Format?: any, Link?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, lcid?: number): void;

        Pictures(Index?: any, lcid?: number, RHS?: any): void;

        PivotTables(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* TransitionFormEntry
		**/
        TransitionFormEntry: number;

        Range(Cell1?: any, Cell2?: any, RHS?: EtRange): void;

        Rectangles(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Rows
		**/
        readonly Rows: EtRange;

        Scenarios(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* ScrollArea
		**/
        ScrollArea: string;

        ShowAllData(lcid?: number): void;

        ShowDataForm(lcid?: number): void;

        /**
		* StandardHeight
		**/
        readonly StandardHeight: number;

        /**
		* StandardWidth
		**/
        StandardWidth: number;

        TextBoxes(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Type
		**/
        readonly Type: number;

        /**
		* DisplayPageBreaks
		**/
        DisplayPageBreaks: boolean;

        /**
		* HPageBreaks
		**/
        readonly HPageBreaks: EtHPageBreaks;

        /**
		* VPageBreaks
		**/
        readonly VPageBreaks: EtVPageBreaks;

        /**
		* QueryTables
		**/
        readonly QueryTables: EtQueryTables;

        XmlDataQuery(XPath?: string, SelectionNamespaces?: any, Map?: any, RHS?: EtRange): void;

        /**
		* Comments
		**/
        readonly Comments: EtComments;

        /**
		* Hyperlinks
		**/
        readonly Hyperlinks: EtHyperlinks;

        ClearCircles(): void;

        CircleInvalid(): void;

        /**
		* _DisplayRightToLeft
		**/
        _DisplayRightToLeft: number;

        /**
		* AutoFilter
		**/
        readonly AutoFilter: EtAutoFilter;

        /**
		* DisplayRightToLeft
		**/
        DisplayRightToLeft: number;

        /**
		* ListObjects
		**/
        readonly ListObjects: EtListObjects;

        /**
		* Scripts
		**/
        readonly Scripts: Kso.KsoScripts;

        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, lcid?: number): void;

        /**
		* Tab
		**/
        readonly Tab: EtTab;

        /**
		* MailEnvelope
		**/
        readonly MailEnvelope: Kso.KsoMsoEnvelopeVB;

        SaveAs(Filename?: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any, Local?: any): void;

        /**
		* CustomProperties
		**/
        readonly CustomProperties: EtCustomProperties;

        /**
		* SmartTags
		**/
        readonly SmartTags: EtSmartTags;

        /**
		* Protection
		**/
        readonly Protection: EtProtection;

        PasteSpecial(Format?: any, Link?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, NoHTMLFormatting?: any, lcid?: number): void;

        Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any, AllowFormattingCells?: any, AllowFormattingColumns?: any, AllowFormattingRows?: any, AllowInsertingColumns?: any, AllowInsertingRows?: any, AllowInsertingHyperlinks?: any, AllowDeletingColumns?: any, AllowDeletingRows?: any, AllowSorting?: any, AllowFiltering?: any, AllowUsingPivotTables?: any): void;

        XmlMapQuery(XPath?: string, SelectionNamespaces?: any, Map?: any, RHS?: EtRange): void;

        PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, IgnorePrintAreas?: any, lcid?: number): void;

        /**
		* Sort
		**/
        readonly Sort: EtSort;

        ExportAsFixedFormat(Type?: EtXlFixedFormatType, Filename?: any, Quality?: any, IncludeDocProperties?: any, IgnorePrintAreas?: any, From?: any, To?: any, OpenAfterPublish?: any, FixedFormatExtClassPtr?: any): void;

        ExportToPNG(FilePath?: any): void;

    }

    interface EtUsedObjects {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        _Default(Index?: any, RHS?: any): void;

    }

    interface EtVPageBreak {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Extent
		**/
        readonly Extent: EtXlPageBreakExtent;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: EtWorksheet;

        /**
		* Type
		**/
        Type: EtXlPageBreak;

        DragOff(Direction?: EtXlDirection, RegionIndex?: number): void;

        /**
		* Location
		**/
        readonly Location: EtRange;

    }

    interface EtPageSetup {
        /**
		* CenterVertically
		**/
        CenterVertically: boolean;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* BottomMargin
		**/
        BottomMargin: number;

        /**
		* EvenPage
		**/
        readonly EvenPage: EtPage;

        /**
		* PrintNotes
		**/
        PrintNotes: boolean;

        /**
		* PrintHeadings
		**/
        PrintHeadings: boolean;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* AlignMarginsHeaderFooter
		**/
        AlignMarginsHeaderFooter: boolean;

        PrintQuality(Index?: any, RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BlackAndWhite
		**/
        BlackAndWhite: boolean;

        /**
		* CenterHeader
		**/
        CenterHeader: string;

        /**
		* CenterFooter
		**/
        CenterFooter: string;

        /**
		* CenterHorizontally
		**/
        CenterHorizontally: boolean;

        /**
		* Zoom
		**/
        Zoom: any;

        /**
		* ChartSize
		**/
        ChartSize: EtXlObjectSize;

        /**
		* Draft
		**/
        Draft: boolean;

        /**
		* RightMargin
		**/
        RightMargin: number;

        /**
		* PrintArea
		**/
        PrintArea: string;

        /**
		* FooterMargin
		**/
        FooterMargin: number;

        /**
		* FirstPageNumber
		**/
        FirstPageNumber: number;

        /**
		* FitToPagesTall
		**/
        FitToPagesTall: any;

        /**
		* PrintGridlines
		**/
        PrintGridlines: boolean;

        /**
		* FitToPagesWide
		**/
        FitToPagesWide: any;

        /**
		* HeaderMargin
		**/
        HeaderMargin: number;

        /**
		* LeftHeader
		**/
        LeftHeader: string;

        /**
		* LeftFooter
		**/
        LeftFooter: string;

        /**
		* LeftMargin
		**/
        LeftMargin: number;

        /**
		* Order
		**/
        Order: EtXlOrder;

        /**
		* Orientation
		**/
        Orientation: EtXlPageOrientation;

        /**
		* PaperSize
		**/
        PaperSize: EtXlPaperSize;

        /**
		* DifferentFirstPageHeaderFooter
		**/
        DifferentFirstPageHeaderFooter: boolean;

        /**
		* RightHeader
		**/
        RightHeader: string;

        /**
		* PrintTitleRows
		**/
        PrintTitleRows: string;

        /**
		* PrintTitleColumns
		**/
        PrintTitleColumns: string;

        /**
		* RightFooter
		**/
        RightFooter: string;

        /**
		* TopMargin
		**/
        TopMargin: number;

        /**
		* PrintComments
		**/
        PrintComments: EtXlPrintLocation;

        /**
		* PrintErrors
		**/
        PrintErrors: EtXlPrintErrors;

        /**
		* CenterHeaderPicture
		**/
        readonly CenterHeaderPicture: EtGraphic;

        /**
		* CenterFooterPicture
		**/
        readonly CenterFooterPicture: EtGraphic;

        /**
		* LeftFooterPicture
		**/
        readonly LeftFooterPicture: EtGraphic;

        /**
		* LeftHeaderPicture
		**/
        readonly LeftHeaderPicture: EtGraphic;

        /**
		* RightHeaderPicture
		**/
        readonly RightHeaderPicture: EtGraphic;

        /**
		* RightFooterPicture
		**/
        readonly RightFooterPicture: EtGraphic;

        /**
		* OddAndEvenPagesHeaderFooter
		**/
        OddAndEvenPagesHeaderFooter: boolean;

        /**
		* ScaleWithDocHeaderFooter
		**/
        ScaleWithDocHeaderFooter: boolean;

        /**
		* Pages
		**/
        readonly Pages: EtPages;

        /**
		* FirstPage
		**/
        readonly FirstPage: EtPage;

    }

    interface EtGraphic {
        /**
		* CropBottom
		**/
        CropBottom: number;

        /**
		* Contrast
		**/
        Contrast: number;

        /**
		* ColorType
		**/
        ColorType: Kso.KsoMsoPictureColorType;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Brightness
		**/
        Brightness: number;

        /**
		* CropTop
		**/
        CropTop: number;

        /**
		* CropLeft
		**/
        CropLeft: number;

        /**
		* Width
		**/
        Width: number;

        /**
		* CropRight
		**/
        CropRight: number;

        /**
		* Filename
		**/
        Filename: string;

        /**
		* Height
		**/
        Height: number;

        /**
		* LockAspectRatio
		**/
        LockAspectRatio: Kso.KsoMsoTriState;

    }

    interface EtPages {
        Item(Index?: any, RHS?: EtPage): void;

        _Default(Index?: any, RHS?: EtPage): void;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtPage {
        /**
		* LeftFooter
		**/
        readonly LeftFooter: EtHeaderFooter;

        /**
		* LeftHeader
		**/
        readonly LeftHeader: EtHeaderFooter;

        /**
		* CenterFooter
		**/
        readonly CenterFooter: EtHeaderFooter;

        /**
		* CenterHeader
		**/
        readonly CenterHeader: EtHeaderFooter;

        /**
		* RightHeader
		**/
        readonly RightHeader: EtHeaderFooter;

        /**
		* RightFooter
		**/
        readonly RightFooter: EtHeaderFooter;

    }

    interface EtMenus {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtMenu): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add(Caption?: string, Before?: any, Restore?: any, RHS?: EtMenu): void;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtMenu): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtHeaderFooter {
        /**
		* Text
		**/
        Text: string;

        /**
		* Picture
		**/
        readonly Picture: EtGraphic;

    }

    interface EtShapes extends Kso.KsoShapes {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        _Default(Index?: any, RHS?: Kso.KsoShape): void;

        AddOLEObject(ClassType?: any, Filename?: any, Link?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, Left?: any, Top?: any, Width?: any, Height?: any, RHS?: Kso.KsoShape): void;

        AddFormControl(Type?: EtXlFormControl, Left?: number, Top?: number, Width?: number, Height?: number, RHS?: Kso.KsoShape): void;

    }

    interface EtShapeRange extends Kso.KsoShapeRange {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        _Default(Index?: any, RHS?: Kso.KsoShape): void;

        /**
		* ID
		**/
        readonly ID: number;

    }

    interface EtDiagram {
        /**
		* Nodes
		**/
        readonly Nodes: Kso.KsoDiagramNodes;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* AutoLayout
		**/
        AutoLayout: Kso.KsoMsoTriState;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Type
		**/
        readonly Type: Kso.KsoMsoDiagramType;

        /**
		* Reverse
		**/
        Reverse: Kso.KsoMsoTriState;

        Convert(Type?: Kso.KsoMsoDiagramType): void;

        /**
		* AutoFormat
		**/
        AutoFormat: Kso.KsoMsoTriState;

        FitText(): void;

    }

    interface EtChart {
        /**
		* Index
		**/
        readonly Index: number;

        /**
		* _CodeName
		**/
        _CodeName: string;

        GetChartElement(x?: number, y?: number, ElementID?: number, Arg1?: number, Arg2?: number): void;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, lcid?: number): void;

        /**
		* ProtectionMode
		**/
        readonly ProtectionMode: number;

        /**
		* Perspective
		**/
        Perspective: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        DrawingObjects(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        DoughnutGroups(Index?: any, lcid?: number, RHS?: any): void;

        Delete(lcid?: number): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any, lcid?: number): void;

        Drawings(Index?: any, lcid?: number, RHS?: any): void;

        BarGroups(Index?: any, lcid?: number, RHS?: any): void;

        AreaGroups(Index?: any, lcid?: number, RHS?: any): void;

        Copy(Before?: any, After?: any, lcid?: number): void;

        Activate(lcid?: number): void;

        _Dummy23(): void;

        /**
		* CodeName
		**/
        readonly CodeName: string;

        /**
		* PrintedCommentPages
		**/
        readonly PrintedCommentPages: number;

        Move(Before?: any, After?: any, lcid?: number): void;

        SetBackgroundPicture(Filename?: string): void;

        Unprotect(Password?: any, lcid?: number): void;

        /**
		* Name
		**/
        Name: string;

        /**
		* ProtectContents
		**/
        readonly ProtectContents: number;

        /**
		* Next
		**/
        readonly Next: any;

        /**
		* ChartArea
		**/
        readonly ChartArea: number;

        /**
		* OnDoubleClick
		**/
        OnDoubleClick: number;

        Arcs(Index?: any, lcid?: number, RHS?: any): void;

        Select(Replace?: any, lcid?: number): void;

        /**
		* OnSheetActivate
		**/
        OnSheetActivate: number;

        /**
		* OnSheetDeactivate
		**/
        OnSheetDeactivate: number;

        ChartWizard(Source?: any, Gallery?: any, Format?: any, PlotBy?: any, CategoryLabels?: any, SeriesLabels?: any, HasLegend?: any, Title?: any, CategoryTitle?: any, ValueTitle?: any, ExtraTitle?: any, lcid?: number): void;

        /**
		* PageSetup
		**/
        readonly PageSetup: EtPageSetup;

        ColumnGroups(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* AutoScaling
		**/
        AutoScaling: number;

        /**
		* Previous
		**/
        readonly Previous: any;

        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, lcid?: number): void;

        ScrollBars(Index?: any, lcid?: number, RHS?: any): void;

        PrintPreview(EnableChanges?: any, lcid?: number): void;

        /**
		* Area3DGroup
		**/
        readonly Area3DGroup: number;

        _SaveAs(Filename?: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any, lcid?: number): void;

        /**
		* DisplayBlanksAs
		**/
        DisplayBlanksAs: number;

        /**
		* ProtectDrawingObjects
		**/
        readonly ProtectDrawingObjects: number;

        _Evaluate(Name?: any, lcid?: number, RHS?: any): void;

        ChartObjects(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Visible
		**/
        Visible: number;

        ChartGroups(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Shapes
		**/
        readonly Shapes: Kso.KsoShapes;

        /**
		* DataTable
		**/
        readonly DataTable: EtDataTable;

        _ApplyDataLabels(Type?: Kso.KsoXlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, lcid?: number): void;

        /**
		* Column3DGroup
		**/
        readonly Column3DGroup: number;

        AutoFormat(Gallery?: number, Format?: any): void;

        Axes(Type?: any, AxisGroup?: Kso.KsoXlAxisGroup, lcid?: number, RHS?: any): void;

        /**
		* Bar3DGroup
		**/
        readonly Bar3DGroup: number;

        Buttons(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* ChartTitle
		**/
        readonly ChartTitle: number;

        Evaluate(Name?: any, lcid?: number, RHS?: any): void;

        CheckBoxes(Index?: any, lcid?: number, RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, Size?: EtXlPictureAppearance, lcid?: number): void;

        /**
		* Corners
		**/
        readonly Corners: number;

        CreatePublisher(Edition?: any, Appearance?: EtXlPictureAppearance, Size?: EtXlPictureAppearance, ContainsPICT?: any, ContainsBIFF?: any, ContainsRTF?: any, ContainsVALU?: any, lcid?: number): void;

        /**
		* DepthPercent
		**/
        DepthPercent: number;

        /**
		* BackWall
		**/
        readonly BackWall: EtWalls;

        Deselect(lcid?: number): void;

        DropDowns(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Elevation
		**/
        Elevation: number;

        /**
		* Floor
		**/
        readonly Floor: number;

        /**
		* GapDepth
		**/
        GapDepth: number;

        GroupBoxes(Index?: any, lcid?: number, RHS?: any): void;

        GroupObjects(Index?: any, lcid?: number, RHS?: any): void;

        HasAxis(Index1?: any, Index2?: any, lcid?: number, RHS?: any): void;

        /**
		* HasDataTable
		**/
        HasDataTable: boolean;

        /**
		* HasLegend
		**/
        HasLegend: number;

        /**
		* HasTitle
		**/
        HasTitle: number;

        /**
		* HeightPercent
		**/
        HeightPercent: number;

        /**
		* Hyperlinks
		**/
        readonly Hyperlinks: EtHyperlinks;

        Labels(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Legend
		**/
        readonly Legend: number;

        /**
		* HasHiddenContent
		**/
        readonly HasHiddenContent: boolean;

        /**
		* Line3DGroup
		**/
        readonly Line3DGroup: number;

        LineGroups(Index?: any, lcid?: number, RHS?: any): void;

        Lines(Index?: any, lcid?: number, RHS?: any): void;

        ListBoxes(Index?: any, lcid?: number, RHS?: any): void;

        Location(Where?: EtXlChartLocation, Name?: any, RHS?: EtChart): void;

        OLEObjects(Index?: any, lcid?: number, RHS?: any): void;

        OptionButtons(Index?: any, lcid?: number, RHS?: any): void;

        Ovals(Index?: any, lcid?: number, RHS?: any): void;

        Paste(Type?: any, lcid?: number): void;

        Pictures(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Pie3DGroup
		**/
        readonly Pie3DGroup: number;

        PieGroups(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* PlotArea
		**/
        readonly PlotArea: number;

        /**
		* PlotVisibleOnly
		**/
        PlotVisibleOnly: number;

        RadarGroups(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* WallsAndGridlines2D
		**/
        WallsAndGridlines2D: number;

        Rectangles(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* RightAngleAxes
		**/
        RightAngleAxes: number;

        /**
		* Rotation
		**/
        Rotation: number;

        SeriesCollection(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* SizeWithWindow
		**/
        SizeWithWindow: number;

        /**
		* ShowWindow
		**/
        ShowWindow: boolean;

        Spinners(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* SubType
		**/
        SubType: number;

        /**
		* SurfaceGroup
		**/
        readonly SurfaceGroup: number;

        TextBoxes(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Type
		**/
        Type: number;

        /**
		* ChartType
		**/
        ChartType: Kso.KsoXlChartType;

        ApplyCustomType(ChartType?: Kso.KsoXlChartType, TypeName?: any): void;

        /**
		* Walls
		**/
        readonly Walls: number;

        XYGroups(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* BarShape
		**/
        BarShape: Kso.KsoXlBarShape;

        /**
		* PlotBy
		**/
        PlotBy: Kso.KsoXlRowCol;

        CopyChartBuild(): void;

        /**
		* ShowAllFieldButtons
		**/
        ShowAllFieldButtons: boolean;

        /**
		* ProtectFormatting
		**/
        ProtectFormatting: boolean;

        /**
		* ProtectData
		**/
        ProtectData: boolean;

        SetElement(Element?: Kso.KsoMsoChartElementType): void;

        /**
		* ProtectGoalSeek
		**/
        ProtectGoalSeek: boolean;

        /**
		* ProtectSelection
		**/
        ProtectSelection: boolean;

        SetSourceData(Source?: EtRange, PlotBy?: any): void;

        Export(Filename?: string, FilterName?: any, Interactive?: any, RHS?: boolean): void;

        Refresh(): void;

        /**
		* PivotLayout
		**/
        readonly PivotLayout: EtPivotLayout;

        /**
		* HasPivotFields
		**/
        HasPivotFields: boolean;

        /**
		* Scripts
		**/
        readonly Scripts: Kso.KsoScripts;

        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, lcid?: number): void;

        /**
		* Tab
		**/
        readonly Tab: EtTab;

        /**
		* MailEnvelope
		**/
        readonly MailEnvelope: Kso.KsoMsoEnvelopeVB;

        ApplyDataLabels(Type?: Kso.KsoXlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any, lcid?: number): void;

        SaveAs(Filename?: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any, Local?: any): void;

        Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any): void;

        ApplyLayout(Layout?: number, ChartType?: any): void;

        /**
		* ShowDataLabelsOverMaximum
		**/
        ShowDataLabelsOverMaximum: boolean;

        /**
		* SideWall
		**/
        readonly SideWall: EtWalls;

        PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, lcid?: number): void;

        ApplyChartTemplate(Filename?: string): void;

        SaveChartTemplate(Filename?: string): void;

        SetDefaultChart(Name?: any): void;

        ExportAsFixedFormat(Type?: EtXlFixedFormatType, Filename?: any, Quality?: any, IncludeDocProperties?: any, IgnorePrintAreas?: any, From?: any, To?: any, OpenAfterPublish?: any, FixedFormatExtClassPtr?: any): void;

        /**
		* ChartStyle
		**/
        ChartStyle: any;

        ClearToMatchStyle(): void;

        /**
		* Dummy25
		**/
        Dummy25: boolean;

        /**
		* Dummy24
		**/
        Dummy24: boolean;

        /**
		* ShowReportFilterFieldButtons
		**/
        ShowReportFilterFieldButtons: boolean;

        /**
		* ShowLegendFieldButtons
		**/
        ShowLegendFieldButtons: boolean;

        /**
		* ShowAxisFieldButtons
		**/
        ShowAxisFieldButtons: boolean;

        /**
		* ShowValueFieldButtons
		**/
        ShowValueFieldButtons: boolean;

        FullSeriesCollection(Index?: any, lcid?: number, RHS?: any): void;

        DeleteHiddenContent(): void;

        /**
		* CategoryLabelLevel
		**/
        CategoryLabelLevel: Kso.KsoXlCategoryLabelLevel;

        /**
		* SeriesNameLevel
		**/
        SeriesNameLevel: Kso.KsoXlSeriesNameLevel;

        /**
		* ChartColor
		**/
        ChartColor: any;

        ClearToMatchColorStyle(): void;

        ExportToPNG(FilePath?: any): void;

    }

    interface EtChartArea {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Top
		**/
        Top: number;

        ClearContents(RHS?: any): void;

        Clear(RHS?: any): void;

        Copy(RHS?: any): void;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* Shadow
		**/
        Shadow: boolean;

        ClearFormats(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* RoundedCorners
		**/
        RoundedCorners: boolean;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
		* Left
		**/
        Left: number;

        /**
		* Width
		**/
        Width: number;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtChartGroup {
        /**
		* SeriesLines
		**/
        readonly SeriesLines: EtSeriesLines;

        /**
		* AxisGroup
		**/
        AxisGroup: Kso.KsoXlAxisGroup;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* GapWidth
		**/
        GapWidth: number;

        /**
		* VaryByCategories
		**/
        VaryByCategories: boolean;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* SubType
		**/
        SubType: number;

        /**
		* DropLines
		**/
        readonly DropLines: EtDropLines;

        /**
		* FirstSliceAngle
		**/
        FirstSliceAngle: number;

        /**
		* HasRadarAxisLabels
		**/
        HasRadarAxisLabels: boolean;

        /**
		* DownBars
		**/
        readonly DownBars: EtDownBars;

        /**
		* DoughnutHoleSize
		**/
        DoughnutHoleSize: number;

        SeriesCollection(Index?: any, RHS?: any): void;

        /**
		* HasDropLines
		**/
        HasDropLines: boolean;

        /**
		* HasHiLoLines
		**/
        HasHiLoLines: boolean;

        /**
		* HasSeriesLines
		**/
        HasSeriesLines: boolean;

        /**
		* HasUpDownBars
		**/
        HasUpDownBars: boolean;

        /**
		* HiLoLines
		**/
        readonly HiLoLines: EtHiLoLines;

        /**
		* SplitValue
		**/
        SplitValue: any;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* Overlap
		**/
        Overlap: number;

        /**
		* RadarAxisLabels
		**/
        readonly RadarAxisLabels: EtTickLabels;

        /**
		* Type
		**/
        Type: number;

        CategoryCollection(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* UpBars
		**/
        readonly UpBars: EtUpBars;

        /**
		* SizeRepresents
		**/
        SizeRepresents: Kso.KsoXlSizeRepresents;

        /**
		* BubbleScale
		**/
        BubbleScale: number;

        /**
		* ShowNegativeBubbles
		**/
        ShowNegativeBubbles: boolean;

        /**
		* SplitType
		**/
        SplitType: Kso.KsoXlChartSplitType;

        /**
		* SecondPlotSize
		**/
        SecondPlotSize: number;

        /**
		* Has3DShading
		**/
        Has3DShading: boolean;

        FullCategoryCollection(Index?: any, lcid?: number, RHS?: any): void;

    }

    interface EtChartFillFormat extends Kso.KsoChartFillFormat {}

    interface EtChartColorFormat extends Kso.KsoChartColorFormat {}

    interface EtChartFormat {
        /**
		* SoftEdge
		**/
        readonly SoftEdge: Kso.KsoSoftEdgeFormat;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Glow
		**/
        readonly Glow: Kso.KsoGlowFormat;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoFillFormat;

        /**
		* Shadow
		**/
        readonly Shadow: Kso.KsoShadowFormat;

        /**
		* Line
		**/
        readonly Line: Kso.KsoLineFormat;

        /**
		* AutoShapeType
		**/
        AutoShapeType: Kso.KsoMsoAutoShapeType;

        /**
		* PictureFormat
		**/
        readonly PictureFormat: Kso.KsoPictureFormat;

        /**
		* TextFrame2
		**/
        readonly TextFrame2: Kso.KsoTextFrame2;

        /**
		* ThreeD
		**/
        readonly ThreeD: Kso.KsoThreeDFormat;

        /**
		* Adjustments
		**/
        readonly Adjustments: Kso.KsoAdjustments;

    }

    interface EtDropLines {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtTickLabels {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* NumberFormatLocal
		**/
        NumberFormatLocal: any;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* NumberFormat
		**/
        NumberFormat: string;

        /**
		* Name
		**/
        readonly Name: string;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* NumberFormatLinked
		**/
        NumberFormatLinked: boolean;

        /**
		* Orientation
		**/
        Orientation: Kso.KsoXlTickLabelOrientation;

        Select(RHS?: any): void;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        /**
		* Depth
		**/
        readonly Depth: number;

        /**
		* Offset
		**/
        Offset: number;

        /**
		* Alignment
		**/
        Alignment: number;

        /**
		* MultiLevel
		**/
        MultiLevel: boolean;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtSpellingOptions {
        /**
		* DictLang
		**/
        DictLang: number;

        /**
		* UserDict
		**/
        UserDict: string;

        /**
		* SpanishModes
		**/
        SpanishModes: EtXlSpanishModes;

        /**
		* IgnoreMixedDigits
		**/
        IgnoreMixedDigits: boolean;

        /**
		* SuggestMainOnly
		**/
        SuggestMainOnly: boolean;

        /**
		* IgnoreCaps
		**/
        IgnoreCaps: boolean;

        /**
		* IgnoreFileNames
		**/
        IgnoreFileNames: boolean;

        /**
		* KoreanUseAutoChangeList
		**/
        KoreanUseAutoChangeList: boolean;

        /**
		* RussianStrictE
		**/
        RussianStrictE: boolean;

        /**
		* GermanPostReform
		**/
        GermanPostReform: boolean;

        /**
		* ArabicStrictAlefHamza
		**/
        ArabicStrictAlefHamza: boolean;

        /**
		* KoreanCombineAux
		**/
        KoreanCombineAux: boolean;

        /**
		* KoreanProcessCompound
		**/
        KoreanProcessCompound: boolean;

        /**
		* HebrewModes
		**/
        HebrewModes: EtXlHebrewModes;

        /**
		* ArabicModes
		**/
        ArabicModes: EtXlArabicModes;

        /**
		* ArabicStrictFinalYaa
		**/
        ArabicStrictFinalYaa: boolean;

        /**
		* ArabicStrictTaaMarboota
		**/
        ArabicStrictTaaMarboota: boolean;

        /**
		* PortugalReform
		**/
        PortugalReform: EtXlPortugueseReform;

        /**
		* BrazilReform
		**/
        BrazilReform: EtXlPortugueseReform;

    }

    interface EtSeriesLines {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtUpBars {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtChartView {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Sheet
		**/
        readonly Sheet: any;

    }

    interface EtRecentFile {
        Open(RHS?: EtWorkbook): void;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Path
		**/
        readonly Path: string;

    }

    interface EtChartTitle {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Top
		**/
        Top: number;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Left
		**/
        Left: number;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* FormulaLocal
		**/
        FormulaLocal: string;

        /**
		* Shadow
		**/
        Shadow: boolean;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

        /**
		* Text
		**/
        Text: string;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* Position
		**/
        Position: Kso.KsoXlChartElementPosition;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        /**
		* IncludeInLayout
		**/
        IncludeInLayout: boolean;

        /**
		* Height
		**/
        readonly Height: number;

        /**
		* Width
		**/
        readonly Width: number;

        /**
		* FormulaR1C1Local
		**/
        FormulaR1C1Local: string;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* FormulaR1C1
		**/
        FormulaR1C1: string;

    }

    interface EtTop10 {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* CalcFor
		**/
        CalcFor: EtXlCalcFor;

        SetLastPriority(): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Priority
		**/
        Priority: number;

        /**
		* Rank
		**/
        Rank: number;

        /**
		* StopIfTrue
		**/
        StopIfTrue: boolean;

        /**
		* AppliesTo
		**/
        readonly AppliesTo: EtRange;

        /**
		* TopBottom
		**/
        TopBottom: EtXlTopBottom;

        /**
		* Percent
		**/
        Percent: boolean;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        ModifyAppliesToRange(Range?: EtRange): void;

        /**
		* Borders
		**/
        readonly Borders: EtBorders;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* Type
		**/
        readonly Type: number;

        /**
		* NumberFormat
		**/
        NumberFormat: any;

        SetFirstPriority(): void;

        Delete(): void;

        /**
		* ScopeType
		**/
        ScopeType: EtXlPivotConditionScope;

        /**
		* PTCondition
		**/
        readonly PTCondition: boolean;

    }

    interface EtEditBox {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* LinkedObject
		**/
        readonly LinkedObject: string;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* DisplayVerticalScrollBar
		**/
        DisplayVerticalScrollBar: boolean;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Text
		**/
        Text: string;

        /**
		* InputType
		**/
        InputType: number;

        /**
		* MultiLine
		**/
        MultiLine: boolean;

        /**
		* PasswordEdit
		**/
        PasswordEdit: boolean;

    }

    interface EtCorners {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Select(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

    }

    interface EtDataTable {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* HasBorderVertical
		**/
        HasBorderVertical: boolean;

        /**
		* ShowLegendKey
		**/
        ShowLegendKey: boolean;

        /**
		* HasBorderHorizontal
		**/
        HasBorderHorizontal: boolean;

        /**
		* HasBorderOutline
		**/
        HasBorderOutline: boolean;

        /**
		* Font
		**/
        readonly Font: EtFont;

        Select(): void;

        Delete(): void;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtModelMeasureName {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* TableName
		**/
        readonly TableName: string;

        /**
		* MeasureName
		**/
        readonly MeasureName: string;

    }

    interface EtModelMeasureNames {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtModelMeasureName): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtModelMeasureName): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtFloor {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        ClearFormats(RHS?: any): void;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        Paste(): void;

        /**
		* PictureType
		**/
        PictureType: any;

        /**
		* Thickness
		**/
        Thickness: number;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtHyperlink {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Shape
		**/
        readonly Shape: Kso.KsoShape;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        CreateNewDocument(Filename?: string, EditNow?: boolean, Overwrite?: boolean): void;

        /**
		* Range
		**/
        readonly Range: EtRange;

        /**
		* Name
		**/
        readonly Name: string;

        Follow(NewWindow?: any, AddHistory?: any, ExtraInfo?: any, Method?: any, HeaderInfo?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* EmailSubject
		**/
        EmailSubject: string;

        /**
		* Type
		**/
        readonly Type: number;

        /**
		* SubAddress
		**/
        SubAddress: string;

        /**
		* Address
		**/
        Address: string;

        AddToFavorites(): void;

        Delete(): void;

        /**
		* ScreenTip
		**/
        ScreenTip: string;

        /**
		* TextToDisplay
		**/
        TextToDisplay: string;

    }

    interface EtHyperlinks {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtHyperlink): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add(Anchor?: any, Address?: string, SubAddress?: any, ScreenTip?: any, TextToDisplay?: any, RHS?: any): void;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtHyperlink): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtLegend {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Font
		**/
        readonly Font: EtFont;

        LegendEntries(Index?: any, RHS?: any): void;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        /**
		* Position
		**/
        Position: Kso.KsoXlLegendPosition;

        /**
		* Shadow
		**/
        Shadow: boolean;

        Clear(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
		* Left
		**/
        Left: number;

        /**
		* Top
		**/
        Top: number;

        /**
		* Width
		**/
        Width: number;

        /**
		* IncludeInLayout
		**/
        IncludeInLayout: boolean;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtPlotArea {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* InsideLeft
		**/
        InsideLeft: number;

        ClearFormats(RHS?: any): void;

        /**
		* _InsideTop
		**/
        readonly _InsideTop: number;

        /**
		* Height
		**/
        Height: number;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
		* Left
		**/
        Left: number;

        /**
		* InsideHeight
		**/
        InsideHeight: number;

        /**
		* Top
		**/
        Top: number;

        /**
		* _InsideLeft
		**/
        readonly _InsideLeft: number;

        /**
		* Width
		**/
        Width: number;

        /**
		* _InsideWidth
		**/
        readonly _InsideWidth: number;

        /**
		* _InsideHeight
		**/
        readonly _InsideHeight: number;

        /**
		* InsideTop
		**/
        InsideTop: number;

        /**
		* InsideWidth
		**/
        InsideWidth: number;

        /**
		* Position
		**/
        Position: Kso.KsoXlChartElementPosition;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtWalls {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        ClearFormats(RHS?: any): void;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        Paste(): void;

        /**
		* PictureType
		**/
        PictureType: any;

        /**
		* PictureUnit
		**/
        PictureUnit: any;

        /**
		* Thickness
		**/
        Thickness: number;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtPivotLayout {
        RowFields(Index?: any, RHS?: any): void;

        PageFields(Index?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        PivotFields(Index?: any, RHS?: any): void;

        DataFields(Index?: any, RHS?: any): void;

        /**
		* PivotTable
		**/
        readonly PivotTable: EtPivotTable;

        /**
		* PivotCache
		**/
        readonly PivotCache: EtPivotCache;

        ColumnFields(Index?: any, RHS?: any): void;

        HiddenFields(Index?: any, RHS?: any): void;

        VisibleFields(Index?: any, RHS?: any): void;

        /**
		* CubeFields
		**/
        readonly CubeFields: EtCubeFields;

        /**
		* InnerDetail
		**/
        InnerDetail: string;

        AddFields(RowFields?: any, ColumnFields?: any, PageFields?: any, AppendField?: any): void;

    }

    interface EtTab {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* TintAndShade
		**/
        TintAndShade: any;

        /**
		* ColorIndex
		**/
        ColorIndex: Kso.KsoXlColorIndex;

        /**
		* Color
		**/
        Color: any;

        /**
		* ThemeColor
		**/
        ThemeColor: EtXlThemeColor;

    }

    interface EtChartEvents {
        Activate(): void;

        Deactivate(): void;

        MouseMove(Button?: number, Shift?: number, x?: number, y?: number): void;

        Resize(): void;

        MouseDown(Button?: number, Shift?: number, x?: number, y?: number): void;

        MouseUp(Button?: number, Shift?: number, x?: number, y?: number): void;

        BeforeRightClick(Cancel?: boolean): void;

        DragPlot(): void;

        DragOver(): void;

        BeforeDoubleClick(ElementID?: number, Arg1?: number, Arg2?: number, Cancel?: boolean): void;

        Select(ElementID?: number, Arg1?: number, Arg2?: number): void;

        SeriesChange(SeriesIndex?: number, PointIndex?: number): void;

        Calculate(): void;

    }

    interface EtNames {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, IndexLocal?: any, RefersTo?: any, lcid?: number, RHS?: EtName): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add(Name?: any, RefersTo?: any, Visible?: any, MacroType?: any, ShortcutKey?: any, Category?: any, NameLocal?: any, RefersToLocal?: any, CategoryLocal?: any, RefersToR1C1?: any, RefersToR1C1Local?: any, RHS?: EtName): void;

        _Default(Index?: any, IndexLocal?: any, RefersTo?: any, lcid?: number, RHS?: EtName): void;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtWorkbooks {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtWorkbook): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        _OpenText(Filename?: string, Origin?: any, StartRow?: any, DataType?: any, TextQualifier?: EtXlTextQualifier, ConsecutiveDelimiter?: any, Tab?: any, Semicolon?: any, Comma?: any, Space?: any, Other?: any, OtherChar?: any, FieldInfo?: any, TextVisualLayout?: any, DecimalSeparator?: any, ThousandsSeparator?: any, lcid?: number): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Close(lcid?: number): void;

        Add(Template?: any, lcid?: number, RHS?: EtWorkbook): void;

        _Open(Filename?: string, UpdateLinks?: any, ReadOnly?: any, Format?: any, Password?: any, WriteResPassword?: any, IgnoreReadOnlyRecommended?: any, Origin?: any, Delimiter?: any, Editable?: any, Notify?: any, Converter?: any, AddToMru?: any, lcid?: number, RHS?: EtWorkbook): void;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        __OpenText(Filename?: string, Origin?: any, StartRow?: any, DataType?: any, TextQualifier?: EtXlTextQualifier, ConsecutiveDelimiter?: any, Tab?: any, Semicolon?: any, Comma?: any, Space?: any, Other?: any, OtherChar?: any, FieldInfo?: any, TextVisualLayout?: any, lcid?: number): void;

        _Default(Index?: any, RHS?: EtWorkbook): void;

        Open(Filename?: string, UpdateLinks?: any, ReadOnly?: any, Format?: any, Password?: any, WriteResPassword?: any, IgnoreReadOnlyRecommended?: any, Origin?: any, Delimiter?: any, Editable?: any, Notify?: any, Converter?: any, AddToMru?: any, Local?: any, CorruptLoad?: any, lcid?: number, RHS?: EtWorkbook): void;

        OpenText(Filename?: string, Origin?: any, StartRow?: any, DataType?: any, TextQualifier?: EtXlTextQualifier, ConsecutiveDelimiter?: any, Tab?: any, Semicolon?: any, Comma?: any, Space?: any, Other?: any, OtherChar?: any, FieldInfo?: any, TextVisualLayout?: any, DecimalSeparator?: any, ThousandsSeparator?: any, TrailingMinusNumbers?: any, Local?: any, lcid?: number): void;

        OpenDatabase(Filename?: string, CommandText?: any, CommandType?: any, BackgroundQuery?: any, ImportDataAs?: any, RHS?: EtWorkbook): void;

        CheckOut(Filename?: string): void;

        CanCheckOut(Filename?: string, RHS?: boolean): void;

        _OpenXML(Filename?: string, Stylesheets?: any, RHS?: EtWorkbook): void;

        OpenXML(Filename?: string, Stylesheets?: any, LoadOption?: any, RHS?: EtWorkbook): void;

    }

    interface EtName {
        /**
		* Index
		**/
        readonly Index: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* RefersToR1C1Local
		**/
        RefersToR1C1Local: any;

        /**
		* _Default
		**/
        readonly _Default: string;

        /**
		* RefersToLocal
		**/
        RefersToLocal: any;

        /**
		* CategoryLocal
		**/
        CategoryLocal: string;

        /**
		* RefersTo
		**/
        RefersTo: number;

        /**
		* Category
		**/
        Category: number;

        /**
		* MacroType
		**/
        MacroType: EtXlXLMMacroType;

        /**
		* RefersToRange
		**/
        readonly RefersToRange: EtRange;

        /**
		* NameLocal
		**/
        NameLocal: string;

        /**
		* Name
		**/
        Name: number;

        /**
		* ShortcutKey
		**/
        ShortcutKey: string;

        /**
		* Value
		**/
        Value: string;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* RefersToR1C1
		**/
        RefersToR1C1: number;

        /**
		* Comment
		**/
        Comment: string;

        /**
		* WorkbookParameter
		**/
        WorkbookParameter: boolean;

        /**
		* ValidWorkbookParameter
		**/
        readonly ValidWorkbookParameter: boolean;

    }

    interface EtCustomViews {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(ViewName?: any, RHS?: EtCustomView): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        Add(ViewName?: string, PrintSettings?: any, RowColSettings?: any, RHS?: EtCustomView): void;

        _Default(ViewName?: any, RHS?: EtCustomView): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtOutline {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* SummaryRow
		**/
        SummaryRow: EtXlSummaryRow;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* SummaryColumn
		**/
        SummaryColumn: EtXlSummaryColumn;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* AutomaticStyles
		**/
        AutomaticStyles: boolean;

        ShowLevels(RowLevels?: any, ColumnLevels?: any, RHS?: any): void;

    }

    interface EtHPageBreaks {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: number, RHS?: EtHPageBreak): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: number, RHS?: EtHPageBreak): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        Add(Before?: any, RHS?: EtHPageBreak): void;

    }

    interface EtHPageBreak {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Extent
		**/
        readonly Extent: EtXlPageBreakExtent;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: EtWorksheet;

        /**
		* Type
		**/
        Type: EtXlPageBreak;

        DragOff(Direction?: EtXlDirection, RegionIndex?: number): void;

        /**
		* Location
		**/
        readonly Location: EtRange;

    }

    interface EtPanes {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: number, RHS?: EtPane): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: number, RHS?: EtPane): void;

    }

    interface EtQueryTables {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtQueryTable): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        Add(Connection?: any, Destination?: EtRange, Sql?: any, RHS?: EtQueryTable): void;

        _Default(Index?: any, RHS?: EtQueryTable): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtCustomProperties {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtCustomProperty): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add(Name?: string, Value?: any, RHS?: EtCustomProperty): void;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtCustomProperty): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtCustomProperty {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Value
		**/
        Value: any;

        /**
		* Name
		**/
        Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* _Default
		**/
        readonly _Default: any;

    }

    interface EtSmartTags {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add(SmartTagType?: string, RHS?: EtSmartTag): void;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtSmartTag): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtSmartTag {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Range
		**/
        readonly Range: EtRange;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* DownloadURL
		**/
        readonly DownloadURL: string;

        /**
		* _Default
		**/
        readonly _Default: string;

        /**
		* XML
		**/
        readonly XML: string;

        /**
		* SmartTagActions
		**/
        readonly SmartTagActions: EtSmartTagActions;

        /**
		* Properties
		**/
        readonly Properties: EtCustomProperties;

    }

    interface EtSmartTagActions {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtSmartTagAction): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtSmartTagAction): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtProtection {
        /**
		* AllowFormattingCells
		**/
        readonly AllowFormattingCells: boolean;

        /**
		* AllowFormattingColumns
		**/
        readonly AllowFormattingColumns: boolean;

        /**
		* AllowDeletingRows
		**/
        readonly AllowDeletingRows: boolean;

        /**
		* AllowFormattingRows
		**/
        readonly AllowFormattingRows: boolean;

        /**
		* AllowInsertingColumns
		**/
        readonly AllowInsertingColumns: boolean;

        /**
		* AllowInsertingHyperlinks
		**/
        readonly AllowInsertingHyperlinks: boolean;

        /**
		* AllowInsertingRows
		**/
        readonly AllowInsertingRows: boolean;

        /**
		* AllowDeletingColumns
		**/
        readonly AllowDeletingColumns: boolean;

        /**
		* AllowSorting
		**/
        readonly AllowSorting: boolean;

        /**
		* AllowFiltering
		**/
        readonly AllowFiltering: boolean;

        /**
		* AllowUsingPivotTables
		**/
        readonly AllowUsingPivotTables: boolean;

        /**
		* AllowEditRanges
		**/
        readonly AllowEditRanges: EtAllowEditRanges;

    }

    interface EtAllowEditRanges {
        /**
		* Count
		**/
        readonly Count: number;

        Item(Index?: any, RHS?: EtAllowEditRange): void;

        Add(Title?: string, Range?: EtRange, Password?: any, RHS?: EtAllowEditRange): void;

        _Default(Index?: any, RHS?: EtAllowEditRange): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtAllowEditRange {
        /**
		* Title
		**/
        Title: string;

        Unprotect(Password?: any): void;

        Delete(): void;

        /**
		* Range
		**/
        readonly Range: EtRange;

        ChangePassword(Password?: string): void;

        /**
		* Users
		**/
        readonly Users: EtUserAccessList;

    }

    interface EtUserAccessList {
        /**
		* Count
		**/
        readonly Count: number;

        Item(Index?: any, RHS?: EtUserAccess): void;

        Add(Name?: string, AllowEdit?: boolean, RHS?: EtUserAccess): void;

        DeleteAll(): void;

        _Default(Index?: any, RHS?: EtUserAccess): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtUserAccess {
        Delete(): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* AllowEdit
		**/
        AllowEdit: boolean;

    }

    interface EtDocEvents {
        SelectionChange(Target?: EtRange): void;

        Change(Target?: EtRange): void;

        BeforeRightClick(Target?: EtRange, Cancel?: boolean): void;

        BeforeDoubleClick(Target?: EtRange, Cancel?: boolean): void;

        PivotTableUpdate(Target?: EtPivotTable): void;

        BeforeDelete(): void;

        Activate(): void;

        Deactivate(): void;

        Calculate(): void;

        FollowHyperlink(Target?: EtHyperlink): void;

        PivotTableAfterValueChange(TargetPivotTable?: EtPivotTable, TargetRange?: EtRange): void;

        PivotTableBeforeAllocateChanges(TargetPivotTable?: EtPivotTable, ValueChangeStart?: number, ValueChangeEnd?: number, Cancel?: boolean): void;

        PivotTableBeforeCommitChanges(TargetPivotTable?: EtPivotTable, ValueChangeStart?: number, ValueChangeEnd?: number, Cancel?: boolean): void;

        PivotTableBeforeDiscardChanges(TargetPivotTable?: EtPivotTable, ValueChangeStart?: number, ValueChangeEnd?: number): void;

        PivotTableChangeSync(Target?: EtPivotTable): void;

        LensGalleryRenderComplete(): void;

        TableUpdate(Target?: EtTableObject): void;

    }

    interface EtErrorBars {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        ClearFormats(RHS?: any): void;

        /**
		* EndStyle
		**/
        EndStyle: Kso.KsoXlEndStyleCap;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtODBCError {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* ErrorString
		**/
        readonly ErrorString: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* SqlState
		**/
        readonly SqlState: string;

    }

    interface EtODBCErrors {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: number, RHS?: EtODBCError): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: number, RHS?: EtODBCError): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtPhonetic {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Text
		**/
        Text: string;

        /**
		* Alignment
		**/
        Alignment: number;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* CharacterType
		**/
        CharacterType: number;

        /**
		* Font
		**/
        readonly Font: EtFont;

    }

    interface EtFormatConditions {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        Add(Type?: EtXlFormatConditionType, Operator?: any, Formula1?: any, Formula2?: any, String?: any, TextOperator?: any, DateOperator?: any, ScopeType?: any, RHS?: any): void;

        _Default(Index?: any, RHS?: any): void;

        AddColorScale(ColorScaleType?: number, RHS?: any): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        AddUniqueValues(RHS?: any): void;

        AddDatabar(RHS?: any): void;

        AddIconSetCondition(RHS?: any): void;

        AddTop10(RHS?: any): void;

        AddAboveAverage(RHS?: any): void;

    }

    interface EtPhonetics {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Length
		**/
        readonly Length: number;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* CharacterType
		**/
        CharacterType: number;

        /**
		* Start
		**/
        readonly Start: number;

        /**
		* Alignment
		**/
        Alignment: number;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Font
		**/
        readonly Font: EtFont;

        Item(Index?: number, RHS?: any): void;

        Delete(): void;

        Add(Start?: number, Length?: number, Text?: string): void;

        /**
		* Text
		**/
        Text: string;

        _Default(Index?: number, RHS?: any): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtErrors {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtError): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Default(Index?: any, RHS?: EtError): void;

    }

    interface EtError {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Value
		**/
        readonly Value: boolean;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Ignore
		**/
        Ignore: boolean;

    }

    interface EtTrendline {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* DisplayRSquared
		**/
        DisplayRSquared: boolean;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* DataLabel
		**/
        readonly DataLabel: EtDataLabel;

        /**
		* Name
		**/
        Name: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Intercept
		**/
        Intercept: number;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* DisplayEquation
		**/
        DisplayEquation: boolean;

        /**
		* Backward
		**/
        Backward: number;

        ClearFormats(RHS?: any): void;

        /**
		* Forward
		**/
        Forward: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* InterceptIsAuto
		**/
        InterceptIsAuto: boolean;

        /**
		* NameIsAuto
		**/
        NameIsAuto: boolean;

        /**
		* Order
		**/
        Order: number;

        /**
		* Period
		**/
        Period: number;

        Select(RHS?: any): void;

        /**
		* Type
		**/
        Type: Kso.KsoXlTrendlineType;

        /**
		* Backward2
		**/
        Backward2: number;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

        /**
		* Forward2
		**/
        Forward2: number;

    }

    interface EtTrendlines extends Kso.KsoTrendlines {}

    interface EtSparklineGroups {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtSparklineGroup): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        ClearGroups(): void;

        Clear(): void;

        Add(Type?: EtXlSparkType, SourceData?: string, RHS?: EtSparklineGroup): void;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        _Default(Index?: any, RHS?: EtSparklineGroup): void;

        Group(Location?: EtRange): void;

        Ungroup(): void;

    }

    interface EtSparklineGroup {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* DateRange
		**/
        DateRange: string;

        Item(Index?: any, RHS?: EtSparkline): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Location
		**/
        readonly Location: EtRange;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        /**
		* SourceData
		**/
        SourceData: string;

        ModifyLocation(Location?: EtRange): void;

        ModifySourceData(SourceData?: string): void;

        Modify(Location?: EtRange, SourceData?: string): void;

        /**
		* DisplayHidden
		**/
        DisplayHidden: boolean;

        ModifyDateRange(DateRange?: string): void;

        Delete(): void;

        /**
		* Type
		**/
        Type: EtXlSparkType;

        /**
		* SeriesColor
		**/
        readonly SeriesColor: EtFormatColor;

        /**
		* Points
		**/
        readonly Points: EtSparkPoints;

        /**
		* Axes
		**/
        readonly Axes: EtSparkAxes;

        /**
		* DisplayBlanksAs
		**/
        DisplayBlanksAs: Kso.KsoXlDisplayBlanksAs;

        /**
		* LineWeight
		**/
        LineWeight: any;

        /**
		* PlotBy
		**/
        PlotBy: EtXlSparklineRowCol;

    }

    interface EtFormatColor {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* TintAndShade
		**/
        TintAndShade: any;

        /**
		* ColorIndex
		**/
        ColorIndex: Kso.KsoXlColorIndex;

        /**
		* Color
		**/
        Color: any;

        /**
		* ThemeColor
		**/
        ThemeColor: any;

    }

    interface EtSparkPoints {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Negative
		**/
        readonly Negative: EtSparkColor;

        /**
		* Highpoint
		**/
        readonly Highpoint: EtSparkColor;

        /**
		* Markers
		**/
        readonly Markers: EtSparkColor;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Lowpoint
		**/
        readonly Lowpoint: EtSparkColor;

        /**
		* Lastpoint
		**/
        readonly Lastpoint: EtSparkColor;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Firstpoint
		**/
        readonly Firstpoint: EtSparkColor;

    }

    interface EtSparkAxes {
        /**
		* Vertical
		**/
        readonly Vertical: EtSparkVerticalAxis;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Horizontal
		**/
        readonly Horizontal: EtSparkHorizontalAxis;

        /**
		* Parent
		**/
        readonly Parent: any;

    }

    interface EtSparkVerticalAxis {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* MinScaleType
		**/
        MinScaleType: EtXlSparkScale;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* CustomMinScaleValue
		**/
        CustomMinScaleValue: any;

        /**
		* MaxScaleType
		**/
        MaxScaleType: EtXlSparkScale;

        /**
		* CustomMaxScaleValue
		**/
        CustomMaxScaleValue: any;

    }

    interface EtLabel {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* PhoneticAccelerator
		**/
        PhoneticAccelerator: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        /**
		* Accelerator
		**/
        Accelerator: any;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Text
		**/
        Text: string;

        _Dummy33(): void;

    }

    interface EtDisplayFormat {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Style
		**/
        readonly Style: any;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Borders
		**/
        readonly Borders: EtBorders;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* IndentLevel
		**/
        readonly IndentLevel: any;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* WrapText
		**/
        readonly WrapText: any;

        /**
		* FormulaHidden
		**/
        readonly FormulaHidden: any;

        /**
		* AddIndent
		**/
        readonly AddIndent: any;

        /**
		* HorizontalAlignment
		**/
        readonly HorizontalAlignment: any;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Locked
		**/
        readonly Locked: any;

        /**
		* MergeCells
		**/
        readonly MergeCells: any;

        /**
		* NumberFormat
		**/
        readonly NumberFormat: number;

        /**
		* NumberFormatLocal
		**/
        readonly NumberFormatLocal: any;

        /**
		* Orientation
		**/
        readonly Orientation: any;

        /**
		* ReadingOrder
		**/
        readonly ReadingOrder: number;

        /**
		* ShrinkToFit
		**/
        readonly ShrinkToFit: any;

        /**
		* VerticalAlignment
		**/
        readonly VerticalAlignment: any;

    }

    interface EtDialogSheets {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(lcid?: number): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add2(Before?: any, After?: any, Count?: any, NewLayout?: any, RHS?: any): void;

        PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;

        Add(Before?: any, After?: any, Count?: any, RHS?: EtDialogSheet): void;

        Copy(Before?: any, After?: any, lcid?: number): void;

        /**
		* Count
		**/
        readonly Count: number;

        _Dummy7(): void;

        Move(Before?: any, After?: any, lcid?: number): void;

        /**
		* VPageBreaks
		**/
        readonly VPageBreaks: EtVPageBreaks;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, lcid?: number): void;

        PrintPreview(EnableChanges?: any, lcid?: number): void;

        Select(Replace?: any, lcid?: number): void;

        /**
		* HPageBreaks
		**/
        readonly HPageBreaks: EtHPageBreaks;

        /**
		* Visible
		**/
        Visible: number;

        _Default(Index?: any, RHS?: any): void;

        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, lcid?: number): void;

    }

    interface EtDialogSheet {
        _CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, IgnoreFinalYaa?: any, SpellScript?: any, lcid?: number): void;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* _CodeName
		**/
        _CodeName: string;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, lcid?: number): void;

        _Dummy90(): void;

        /**
		* ProtectionMode
		**/
        readonly ProtectionMode: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        DrawingObjects(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(lcid?: number): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any, lcid?: number): void;

        Drawings(Index?: any, lcid?: number, RHS?: any): void;

        Copy(Before?: any, After?: any, lcid?: number): void;

        Activate(lcid?: number): void;

        _Dummy29(): void;

        /**
		* CodeName
		**/
        readonly CodeName: string;

        /**
		* PrintedCommentPages
		**/
        readonly PrintedCommentPages: number;

        Move(Before?: any, After?: any, lcid?: number): void;

        Unprotect(Password?: any, lcid?: number): void;

        /**
		* Name
		**/
        Name: string;

        /**
		* ProtectContents
		**/
        readonly ProtectContents: number;

        /**
		* Next
		**/
        readonly Next: any;

        /**
		* OnDoubleClick
		**/
        OnDoubleClick: number;

        Arcs(Index?: any, lcid?: number, RHS?: any): void;

        Select(Replace?: any, lcid?: number): void;

        /**
		* OnSheetActivate
		**/
        OnSheetActivate: number;

        /**
		* OnSheetDeactivate
		**/
        OnSheetDeactivate: number;

        _Dummy56(): void;

        /**
		* PageSetup
		**/
        readonly PageSetup: EtPageSetup;

        /**
		* Previous
		**/
        readonly Previous: any;

        /**
		* EnableCalculation
		**/
        EnableCalculation: boolean;

        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, lcid?: number): void;

        ScrollBars(Index?: any, lcid?: number, RHS?: any): void;

        PrintPreview(EnableChanges?: any, lcid?: number): void;

        /**
		* EnableSelection
		**/
        EnableSelection: EtXlEnableSelection;

        _SaveAs(Filename?: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any, lcid?: number): void;

        /**
		* ProtectDrawingObjects
		**/
        readonly ProtectDrawingObjects: number;

        /**
		* ProtectScenarios
		**/
        readonly ProtectScenarios: number;

        ResetAllPageBreaks(): void;

        _Evaluate(Name?: any, lcid?: number, RHS?: any): void;

        /**
		* EnableAutoFilter
		**/
        EnableAutoFilter: number;

        ChartObjects(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Visible
		**/
        Visible: number;

        _Dummy40(): void;

        _Dummy41(): void;

        _Dummy42(): void;

        _Dummy43(): void;

        _Dummy44(): void;

        _Dummy45(): void;

        /**
		* Shapes
		**/
        readonly Shapes: Kso.KsoShapes;

        _Dummy31(): void;

        _Dummy32(): void;

        _Dummy34(): void;

        _Dummy36(): void;

        /**
		* DisplayAutomaticPageBreaks
		**/
        DisplayAutomaticPageBreaks: number;

        Buttons(Index?: any, lcid?: number, RHS?: any): void;

        Evaluate(Name?: any, lcid?: number, RHS?: any): void;

        CheckBoxes(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* EnablePivotTable
		**/
        EnablePivotTable: number;

        DropDowns(Index?: any, lcid?: number, RHS?: any): void;

        OLEObjects(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* EnableOutlining
		**/
        EnableOutlining: number;

        GroupBoxes(Index?: any, lcid?: number, RHS?: any): void;

        GroupObjects(Index?: any, lcid?: number, RHS?: any): void;

        ListBoxes(Index?: any, lcid?: number, RHS?: any): void;

        Labels(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* DefaultButton
		**/
        DefaultButton: any;

        Lines(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* Names
		**/
        readonly Names: EtNames;

        _Dummy69(): void;

        _Dummy67(): void;

        _Dummy66(): void;

        _Dummy65(): void;

        OptionButtons(Index?: any, lcid?: number, RHS?: any): void;

        Ovals(Index?: any, lcid?: number, RHS?: any): void;

        Paste(Destination?: any, Link?: any, lcid?: number): void;

        _PasteSpecial(Format?: any, Link?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, lcid?: number): void;

        Pictures(Index?: any, lcid?: number, RHS?: any): void;

        _Dummy79(): void;

        _Dummy78(): void;

        _Dummy76(): void;

        _Dummy75(): void;

        _Dummy74(): void;

        Rectangles(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* ScrollArea
		**/
        ScrollArea: string;

        _Dummy89(): void;

        _Dummy88(): void;

        _Dummy86(): void;

        _Dummy85(): void;

        _Dummy83(): void;

        _Dummy82(): void;

        Spinners(Index?: any, lcid?: number, RHS?: any): void;

        TextBoxes(Index?: any, lcid?: number, RHS?: any): void;

        /**
		* DisplayPageBreaks
		**/
        DisplayPageBreaks: boolean;

        /**
		* HPageBreaks
		**/
        readonly HPageBreaks: EtHPageBreaks;

        /**
		* VPageBreaks
		**/
        readonly VPageBreaks: EtVPageBreaks;

        /**
		* QueryTables
		**/
        readonly QueryTables: EtQueryTables;

        /**
		* Comments
		**/
        readonly Comments: EtComments;

        /**
		* Hyperlinks
		**/
        readonly Hyperlinks: EtHyperlinks;

        ClearCircles(): void;

        CircleInvalid(): void;

        /**
		* _DisplayRightToLeft
		**/
        _DisplayRightToLeft: number;

        /**
		* AutoFilter
		**/
        readonly AutoFilter: EtAutoFilter;

        /**
		* DisplayRightToLeft
		**/
        DisplayRightToLeft: number;

        /**
		* Scripts
		**/
        readonly Scripts: Kso.KsoScripts;

        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, lcid?: number): void;

        /**
		* Tab
		**/
        readonly Tab: EtTab;

        /**
		* MailEnvelope
		**/
        readonly MailEnvelope: Kso.KsoMsoEnvelopeVB;

        SaveAs(Filename?: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any, Local?: any): void;

        /**
		* CustomProperties
		**/
        readonly CustomProperties: EtCustomProperties;

        /**
		* SmartTags
		**/
        readonly SmartTags: EtSmartTags;

        /**
		* Protection
		**/
        readonly Protection: EtProtection;

        PasteSpecial(Format?: any, Link?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, NoHTMLFormatting?: any, lcid?: number): void;

        Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any, AllowFormattingCells?: any, AllowFormattingColumns?: any, AllowFormattingRows?: any, AllowInsertingColumns?: any, AllowInsertingRows?: any, AllowInsertingHyperlinks?: any, AllowDeletingColumns?: any, AllowDeletingRows?: any, AllowSorting?: any, AllowFiltering?: any, AllowUsingPivotTables?: any): void;

        _Dummy115(): void;

        _Dummy114(): void;

        _Dummy113(): void;

        PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;

        /**
		* EnableFormatConditionsCalculation
		**/
        EnableFormatConditionsCalculation: boolean;

        /**
		* Sort
		**/
        readonly Sort: EtSort;

        ExportAsFixedFormat(Type?: EtXlFixedFormatType, Filename?: any, Quality?: any, IncludeDocProperties?: any, IgnorePrintAreas?: any, From?: any, To?: any, OpenAfterPublish?: any, FixedFormatExtClassPtr?: any): void;

        /**
		* DialogFrame
		**/
        readonly DialogFrame: EtDialogFrame;

        EditBoxes(Index?: any, RHS?: any): void;

        /**
		* Focus
		**/
        Focus: any;

        Hide(Cancel?: any, RHS?: boolean): void;

        Show(RHS?: boolean): void;

    }

    interface EtMenu {
        /**
		* MenuItems
		**/
        readonly MenuItems: EtMenuItems;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Enabled
		**/
        Enabled: boolean;

    }

    interface EtMenuItems {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        AddMenu(Caption?: string, Before?: any, Restore?: any, RHS?: EtMenu): void;

        Add(Caption?: string, OnAction?: any, ShortcutKey?: any, Before?: any, Restore?: any, StatusBar?: any, HelpFile?: any, HelpContextID?: any, RHS?: EtMenuItem): void;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: any): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtMenuItem {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* HelpFile
		**/
        HelpFile: string;

        /**
		* HelpContextID
		**/
        HelpContextID: number;

        /**
		* Checked
		**/
        Checked: boolean;

        /**
		* Enabled
		**/
        Enabled: boolean;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* StatusBar
		**/
        StatusBar: string;

    }

    interface EtPane {
        /**
		* Index
		**/
        readonly Index: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* ScrollColumn
		**/
        ScrollColumn: number;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* ScrollRow
		**/
        ScrollRow: number;

        /**
		* Parent
		**/
        readonly Parent: any;

        SmallScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any, RHS?: any): void;

        Activate(RHS?: boolean): void;

        LargeScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any, RHS?: any): void;

        /**
		* VisibleRange
		**/
        readonly VisibleRange: EtRange;

        ScrollIntoView(Left?: number, Top?: number, Width?: number, Height?: number, Start?: any): void;

        PointsToScreenPixelsY(Points?: number, RHS?: number): void;

        PointsToScreenPixelsX(Points?: number, RHS?: number): void;

    }

    interface EtSpeech {
        /**
		* Direction
		**/
        Direction: EtXlSpeakDirection;

        Speak(Text?: string, SpeakAsync?: any, SpeakXML?: any, Purge?: any): void;

        /**
		* SpeakCellOnEnter
		**/
        SpeakCellOnEnter: boolean;

    }

    interface EtSheets {
        FillAcrossSheets(Range?: EtRange, Type?: EtXlFillWith, lcid?: number): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(lcid?: number): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add2(Before?: any, After?: any, Count?: any, NewLayout?: any, RHS?: any): void;

        PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, IgnorePrintAreas?: any, lcid?: number): void;

        Add(Before?: any, After?: any, Count?: any, Type?: any, lcid?: number, RHS?: any): void;

        Copy(Before?: any, After?: any, lcid?: number): void;

        /**
		* Count
		**/
        readonly Count: number;

        Move(Before?: any, After?: any, lcid?: number): void;

        /**
		* VPageBreaks
		**/
        readonly VPageBreaks: EtVPageBreaks;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, lcid?: number): void;

        PrintPreview(EnableChanges?: any, lcid?: number): void;

        Select(Replace?: any, lcid?: number): void;

        /**
		* HPageBreaks
		**/
        readonly HPageBreaks: EtHPageBreaks;

        /**
		* Visible
		**/
        Visible: number;

        _Default(Index?: any, RHS?: any): void;

        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, lcid?: number): void;

    }

    interface EtSheetViews {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _NewEnum(RHS?: any): void;

        _Default(Index?: any, RHS?: any): void;

    }

    interface EtWorkbook {
        /**
		* Windows
		**/
        readonly Windows: EtWindows;

        Post(DestName?: any, lcid?: number): void;

        /**
		* AutoUpdateFrequency
		**/
        AutoUpdateFrequency: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Date1904
		**/
        Date1904: number;

        ProtectSharing(Filename?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, SharingPassword?: any, FileFormat?: any): void;

        /**
		* AcceptLabelsInFormulas
		**/
        AcceptLabelsInFormulas: boolean;

        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, lcid?: number): void;

        /**
		* DialogSheets
		**/
        readonly DialogSheets: EtSheets;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Protect(Password?: any, Structure?: any, Windows?: any): void;

        /**
		* FileFormat
		**/
        readonly FileFormat: number;

        Activate(lcid?: number): void;

        ExclusiveAccess(lcid?: number, RHS?: boolean): void;

        /**
		* ConflictResolution
		**/
        ConflictResolution: EtXlSaveConflictResolution;

        /**
		* ActiveChart
		**/
        readonly ActiveChart: EtChart;

        /**
		* Path
		**/
        readonly Path: number;

        /**
		* ActiveSheet
		**/
        readonly ActiveSheet: any;

        /**
		* PivotTables
		**/
        readonly PivotTables: any;

        _ProtectSharing(Filename?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, SharingPassword?: any): void;

        /**
		* CreateBackup
		**/
        readonly CreateBackup: number;

        Close(SaveChanges?: any, Filename?: any, RouteWorkbook?: any, lcid?: number): void;

        /**
		* Author
		**/
        Author: number;

        LinkSources(Type?: any, lcid?: number, RHS?: any): void;

        /**
		* HasRoutingSlip
		**/
        HasRoutingSlip: number;

        /**
		* AutoUpdateSaveChanges
		**/
        AutoUpdateSaveChanges: boolean;

        /**
		* ChangeHistoryDuration
		**/
        ChangeHistoryDuration: number;

        ForwardMailer(lcid?: number): void;

        /**
		* BuiltinDocumentProperties
		**/
        readonly BuiltinDocumentProperties: any;

        Colors(Index?: any, lcid?: number, RHS?: any): void;

        Protect(Password?: any, Structure?: any, Windows?: any): void;

        ChangeFileAccess(Mode?: EtXlFileAccess, WritePassword?: any, Notify?: any, lcid?: number): void;

        /**
		* Names
		**/
        readonly Names: EtNames;

        ChangeLink(Name?: string, NewName?: string, Type?: EtXlLinkType, lcid?: number): void;

        XmlImportXml(Data?: string, ImportMap?: EtXmlMap, Overwrite?: any, Destination?: any, RHS?: EtXlXmlImportResult): void;

        Route(lcid?: number): void;

        /**
		* Charts
		**/
        readonly Charts: EtSheets;

        /**
		* CodeName
		**/
        readonly CodeName: string;

        ApplyTheme(Filename?: string): void;

        /**
		* Mailer
		**/
        readonly Mailer: EtMailer;

        /**
		* _CodeName
		**/
        _CodeName: string;

        /**
		* CommandBars
		**/
        readonly CommandBars: Kso.KsoCommandBars;

        /**
		* Comments
		**/
        Comments: number;

        /**
		* Container
		**/
        readonly Container: any;

        /**
		* CustomDocumentProperties
		**/
        readonly CustomDocumentProperties: any;

        /**
		* OnSheetActivate
		**/
        OnSheetActivate: number;

        DeleteNumberFormat(NumberFormat?: string, lcid?: number): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* DisplayDrawingObjects
		**/
        DisplayDrawingObjects: number;

        /**
		* FullName
		**/
        readonly FullName: number;

        /**
		* HasMailer
		**/
        HasMailer: number;

        /**
		* HasPassword
		**/
        readonly HasPassword: number;

        /**
		* ConnectionsDisabled
		**/
        readonly ConnectionsDisabled: boolean;

        /**
		* PrecisionAsDisplayed
		**/
        PrecisionAsDisplayed: number;

        /**
		* EncryptionProvider
		**/
        EncryptionProvider: string;

        /**
		* IsAddin
		**/
        IsAddin: boolean;

        /**
		* Keywords
		**/
        Keywords: number;

        /**
		* OnSheetDeactivate
		**/
        OnSheetDeactivate: number;

        /**
		* FullNameURLEncoded
		**/
        readonly FullNameURLEncoded: number;

        NewWindow(lcid?: number, RHS?: EtWindow): void;

        LinkInfo(Name?: string, LinkInfo?: EtXlLinkInfo, Type?: any, EditionRef?: any, lcid?: number, RHS?: any): void;

        MergeWorkbook(Filename?: any): void;

        /**
		* Modules
		**/
        readonly Modules: EtSheets;

        PrintPreview(EnableChanges?: any, lcid?: number): void;

        /**
		* MultiUserEditing
		**/
        readonly MultiUserEditing: number;

        LockServerFile(): void;

        /**
		* OnSave
		**/
        OnSave: number;

        OpenLinks(Name?: string, ReadOnly?: any, Type?: any, lcid?: number): void;

        /**
		* RemovePersonalInformation
		**/
        RemovePersonalInformation: boolean;

        /**
		* PersonalViewListSettings
		**/
        PersonalViewListSettings: boolean;

        /**
		* PersonalViewPrintSettings
		**/
        PersonalViewPrintSettings: boolean;

        /**
		* ReadOnly
		**/
        readonly ReadOnly: number;

        PivotCaches(RHS?: EtPivotCaches): void;

        /**
		* ProtectStructure
		**/
        readonly ProtectStructure: boolean;

        /**
		* ProtectWindows
		**/
        readonly ProtectWindows: boolean;

        /**
		* DefaultSlicerStyle
		**/
        DefaultSlicerStyle: any;

        /**
		* _ReadOnlyRecommended
		**/
        readonly _ReadOnlyRecommended: number;

        AcceptAllChanges(When?: any, Who?: any, Where?: any): void;

        RefreshAll(): void;

        sblt(s?: string): void;

        Reply(lcid?: number): void;

        ReplyAll(lcid?: number): void;

        RemoveUser(Index?: number): void;

        /**
		* RevisionNumber
		**/
        readonly RevisionNumber: number;

        /**
		* HasVBProject
		**/
        readonly HasVBProject: boolean;

        /**
		* DocumentInspectors
		**/
        readonly DocumentInspectors: Kso.KsoDocumentInspectors;

        /**
		* Routed
		**/
        readonly Routed: number;

        /**
		* RoutingSlip
		**/
        readonly RoutingSlip: EtRoutingSlip;

        /**
		* Model
		**/
        readonly Model: EtModel;

        RunAutoMacros(Which?: EtXlRunAutoMacro, lcid?: number): void;

        Save(lcid?: number): void;

        _SaveAs(Filename?: any, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AccessMode?: EtXlSaveAsAccessMode, ConflictResolution?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any, lcid?: number): void;

        SaveCopyAs(Filename?: any, lcid?: number): void;

        /**
		* Saved
		**/
        Saved: number;

        /**
		* SaveLinkValues
		**/
        SaveLinkValues: number;

        /**
		* Excel4IntlMacroSheets
		**/
        readonly Excel4IntlMacroSheets: EtSheets;

        SendMail(Recipients?: any, Subject?: any, ReturnReceipt?: any, lcid?: number): void;

        /**
		* XmlNamespaces
		**/
        readonly XmlNamespaces: EtXmlNamespaces;

        /**
		* Styles
		**/
        readonly Styles: EtStyles;

        SendMailer(FileFormat?: any, Priority?: EtXlPriority, lcid?: number): void;

        SetLinkOnData(Name?: string, Procedure?: any, lcid?: number): void;

        /**
		* Sheets
		**/
        readonly Sheets: EtSheets;

        /**
		* ShowConflictHistory
		**/
        ShowConflictHistory: number;

        /**
		* Subject
		**/
        Subject: number;

        /**
		* Title
		**/
        Title: number;

        Unprotect(Password?: any, lcid?: number): void;

        UnprotectSharing(SharingPassword?: any): void;

        /**
		* WebOptions
		**/
        readonly WebOptions: EtWebOptions;

        UpdateFromFile(lcid?: number): void;

        UpdateLink(Name?: any, Type?: any, lcid?: number): void;

        /**
		* UpdateRemoteReferences
		**/
        UpdateRemoteReferences: number;

        /**
		* UserControl
		**/
        UserControl: boolean;

        /**
		* UserStatus
		**/
        readonly UserStatus: number;

        /**
		* CustomViews
		**/
        readonly CustomViews: EtCustomViews;

        /**
		* Worksheets
		**/
        readonly Worksheets: EtSheets;

        /**
		* WriteReserved
		**/
        readonly WriteReserved: number;

        /**
		* WriteReservedBy
		**/
        readonly WriteReservedBy: number;

        /**
		* Excel4MacroSheets
		**/
        readonly Excel4MacroSheets: EtSheets;

        /**
		* TemplateRemoveExtData
		**/
        TemplateRemoveExtData: boolean;

        HighlightChangesOptions(When?: any, Who?: any, Where?: any): void;

        /**
		* HighlightChangesOnScreen
		**/
        HighlightChangesOnScreen: boolean;

        /**
		* KeepChangeHistory
		**/
        KeepChangeHistory: boolean;

        /**
		* ListChangesOnNewSheet
		**/
        ListChangesOnNewSheet: boolean;

        PurgeChangeHistoryNow(Days?: number, SharingPassword?: any): void;

        /**
		* CheckCompatibility
		**/
        CheckCompatibility: boolean;

        /**
		* ServerViewableItems
		**/
        readonly ServerViewableItems: EtServerViewableItems;

        RejectAllChanges(When?: any, Who?: any, Where?: any): void;

        /**
		* UseWildcards
		**/
        readonly UseWildcards: boolean;

        SetPasswordEncryptionOptions(PasswordEncryptionProvider?: any, PasswordEncryptionAlgorithm?: any, PasswordEncryptionKeyLength?: any, PasswordEncryptionFileProperties?: any): void;

        PivotTableWizard(SourceType?: any, SourceData?: any, TableDestination?: any, TableName?: any, RowGrand?: any, ColumnGrand?: any, SaveData?: any, HasAutoFormat?: any, AutoPage?: any, Reserved?: any, BackgroundQuery?: any, OptimizeCache?: any, PageFieldOrder?: any, PageFieldWrapCount?: any, ReadData?: any, Connection?: any, lcid?: number): void;

        GetWorkflowTemplates(RHS?: Kso.KsoWorkflowTemplates): void;

        ResetColors(): void;

        FollowHyperlink(Address?: string, SubAddress?: any, NewWindow?: any, AddHistory?: any, ExtraInfo?: any, Method?: any, HeaderInfo?: any): void;

        AddToFavorites(): void;

        /**
		* IsInplace
		**/
        readonly IsInplace: boolean;

        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, lcid?: number): void;

        WebPagePreview(): void;

        /**
		* PublishObjects
		**/
        readonly PublishObjects: EtPublishObjects;

        ReloadAs(Encoding?: Kso.KsoMsoEncoding): void;

        /**
		* HTMLProject
		**/
        readonly HTMLProject: Kso.KsoHTMLProject;

        /**
		* EnvelopeVisible
		**/
        EnvelopeVisible: boolean;

        Dummy27(): void;

        Dummy26(): void;

        /**
		* CalculationVersion
		**/
        readonly CalculationVersion: number;

        SendForReview(Recipients?: any, Subject?: any, ShowMessage?: any, IncludeAttachment?: any): void;

        Dummy16(): void;

        Dummy17(calcid?: number): void;

        /**
		* VBASigned
		**/
        readonly VBASigned: boolean;

        /**
		* ShowPivotTableFieldList
		**/
        ShowPivotTableFieldList: boolean;

        /**
		* UpdateLinks
		**/
        UpdateLinks: EtXlUpdateLinks;

        BreakLink(Name?: string, Type?: EtXlLinkType): void;

        SaveAs(Filename?: any, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AccessMode?: EtXlSaveAsAccessMode, ConflictResolution?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any, Local?: any, lcid?: number): void;

        /**
		* EnableAutoRecover
		**/
        EnableAutoRecover: boolean;

        CheckIn(SaveChanges?: any, Comments?: any, MakePublic?: any): void;

        CanCheckIn(RHS?: boolean): void;

        ReplyWithChanges(ShowMessage?: any): void;

        EndReview(): void;

        /**
		* Password
		**/
        Password: string;

        /**
		* WritePassword
		**/
        WritePassword: string;

        /**
		* PasswordEncryptionProvider
		**/
        readonly PasswordEncryptionProvider: string;

        /**
		* PasswordEncryptionAlgorithm
		**/
        readonly PasswordEncryptionAlgorithm: string;

        /**
		* PasswordEncryptionKeyLength
		**/
        readonly PasswordEncryptionKeyLength: number;

        /**
		* PasswordEncryptionFileProperties
		**/
        readonly PasswordEncryptionFileProperties: boolean;

        SaveAsXMLData(Filename?: string, Map?: EtXmlMap): void;

        /**
		* ReadOnlyRecommended
		**/
        ReadOnlyRecommended: boolean;

        /**
		* DisplayInkComments
		**/
        DisplayInkComments: boolean;

        /**
		* SmartTagOptions
		**/
        readonly SmartTagOptions: EtSmartTagOptions;

        RecheckSmartTags(): void;

        /**
		* Permission
		**/
        readonly Permission: Kso.KsoPermission;

        /**
		* SharedWorkspace
		**/
        readonly SharedWorkspace: Kso.KsoSharedWorkspace;

        /**
		* Sync
		**/
        readonly Sync: Kso.KsoSync;

        SendFaxOverInternet(Recipients?: any, Subject?: any, ShowMessage?: any): void;

        /**
		* XmlMaps
		**/
        readonly XmlMaps: EtXmlMaps;

        XmlImport(Url?: string, ImportMap?: EtXmlMap, Overwrite?: any, Destination?: any, RHS?: EtXlXmlImportResult): void;

        /**
		* SmartDocument
		**/
        readonly SmartDocument: Kso.KsoSmartDocument;

        /**
		* DocumentLibraryVersions
		**/
        readonly DocumentLibraryVersions: Kso.KsoDocumentLibraryVersions;

        /**
		* InactiveListBorderVisible
		**/
        InactiveListBorderVisible: boolean;

        /**
		* CustomXMLParts
		**/
        readonly CustomXMLParts: Kso.KsoCustomXMLParts;

        ToggleFormsDesign(): void;

        /**
		* ContentTypeProperties
		**/
        readonly ContentTypeProperties: Kso.KsoMetaProperties;

        /**
		* Connections
		**/
        readonly Connections: EtConnections;

        RemoveDocumentInformation(RemoveDocInfoType?: EtXlRemoveDocInfoType): void;

        /**
		* Signatures
		**/
        readonly Signatures: Kso.KsoSignatureSet;

        CheckInWithVersion(SaveChanges?: any, Comments?: any, MakePublic?: any, VersionType?: any): void;

        /**
		* ServerPolicy
		**/
        readonly ServerPolicy: Kso.KsoServerPolicy;

        /**
		* IconSets
		**/
        readonly IconSets: EtIconSets;

        GetWorkflowTasks(RHS?: Kso.KsoWorkflowTasks): void;

        PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, IgnorePrintAreas?: any, lcid?: number): void;

        /**
		* TableStyles
		**/
        readonly TableStyles: EtTableStyles;

        /**
		* DefaultTableStyle
		**/
        DefaultTableStyle: any;

        /**
		* DefaultPivotTableStyle
		**/
        DefaultPivotTableStyle: any;

        /**
		* Final
		**/
        Final: boolean;

        /**
		* Research
		**/
        readonly Research: EtResearch;

        /**
		* Theme
		**/
        readonly Theme: Kso.KsoOfficeTheme;

        /**
		* Excel8CompatibilityMode
		**/
        readonly Excel8CompatibilityMode: boolean;

        EnableConnections(): void;

        /**
		* ShowPivotChartActiveFields
		**/
        ShowPivotChartActiveFields: boolean;

        ExportAsFixedFormat(Type?: EtXlFixedFormatType, Filename?: any, Quality?: any, IncludeDocProperties?: any, IgnorePrintAreas?: any, From?: any, To?: any, OpenAfterPublish?: any, FixedFormatExtClassPtr?: any): void;

        /**
		* DoNotPromptForConvert
		**/
        DoNotPromptForConvert: boolean;

        /**
		* ForceFullCalculation
		**/
        ForceFullCalculation: boolean;

        /**
		* SlicerCaches
		**/
        readonly SlicerCaches: EtSlicerCaches;

        /**
		* ActiveSlicer
		**/
        readonly ActiveSlicer: EtSlicer;

        /**
		* AccuracyVersion
		**/
        AccuracyVersion: number;

        /**
		* CaseSensitive
		**/
        readonly CaseSensitive: boolean;

        /**
		* DefaultTimelineStyle
		**/
        DefaultTimelineStyle: any;

        /**
		* UseWholeCellCriteria
		**/
        readonly UseWholeCellCriteria: boolean;

        /**
		* ChartDataPointTrack
		**/
        ChartDataPointTrack: boolean;

    }

    interface EtMailer {
        /**
		* Enclosures
		**/
        Enclosures: any;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* BCCRecipients
		**/
        BCCRecipients: any;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Sender
		**/
        readonly Sender: string;

        /**
		* Received
		**/
        readonly Received: boolean;

        /**
		* CCRecipients
		**/
        CCRecipients: any;

        /**
		* SendDateTime
		**/
        readonly SendDateTime: string;

        /**
		* Subject
		**/
        Subject: string;

        /**
		* ToRecipients
		**/
        ToRecipients: any;

        /**
		* WhichAddress
		**/
        WhichAddress: any;

    }

    interface EtPivotCaches {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtPivotCache): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtPivotCache): void;

        _NewEnum(RHS?: any): void;

        Create(SourceType?: EtXlPivotTableSourceType, SourceData?: any, Version?: any, RHS?: EtPivotCache): void;

        Add(SourceType?: EtXlPivotTableSourceType, SourceData?: any, RHS?: EtPivotCache): void;

    }

    interface EtStyles {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, lcid?: number, RHS?: EtStyle): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Merge(Workbook?: any, RHS?: any): void;

        Add(Name?: string, BasedOn?: any, RHS?: EtStyle): void;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        _Default(Index?: any, lcid?: number, RHS?: EtStyle): void;

    }

    interface EtStyle {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Borders
		**/
        readonly Borders: EtBorders;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* WrapText
		**/
        WrapText: boolean;

        /**
		* FormulaHidden
		**/
        FormulaHidden: boolean;

        /**
		* AddIndent
		**/
        AddIndent: boolean;

        /**
		* BuiltIn
		**/
        readonly BuiltIn: boolean;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: Kso.KsoXlHAlign;

        /**
		* _Default
		**/
        readonly _Default: number;

        /**
		* IncludeAlignment
		**/
        IncludeAlignment: boolean;

        /**
		* IncludeBorder
		**/
        IncludeBorder: boolean;

        /**
		* IncludeFont
		**/
        IncludeFont: boolean;

        /**
		* IncludeNumber
		**/
        IncludeNumber: boolean;

        /**
		* IncludePatterns
		**/
        IncludePatterns: boolean;

        /**
		* IncludeProtection
		**/
        IncludeProtection: boolean;

        /**
		* IndentLevel
		**/
        IndentLevel: number;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* MergeCells
		**/
        MergeCells: any;

        /**
		* NameLocal
		**/
        readonly NameLocal: string;

        /**
		* Name
		**/
        readonly Name: number;

        /**
		* NumberFormat
		**/
        NumberFormat: string;

        /**
		* NumberFormatLocal
		**/
        NumberFormatLocal: string;

        /**
		* Value
		**/
        readonly Value: number;

        /**
		* Orientation
		**/
        Orientation: EtXlOrientation;

        /**
		* ShrinkToFit
		**/
        ShrinkToFit: boolean;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: Kso.KsoXlVAlign;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

    }

    interface EtCustomView {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* PrintSettings
		**/
        readonly PrintSettings: boolean;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        Show(): void;

        /**
		* RowColSettings
		**/
        readonly RowColSettings: boolean;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

    }

    interface EtDropDowns {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Text
		**/
        Text: string;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        Add(Left?: number, Top?: number, Width?: number, Height?: number, Editable?: any, RHS?: EtDropDown): void;

        _Dummy22(): void;

        /**
		* Visible
		**/
        Visible: boolean;

        RemoveAllItems(RHS?: any): void;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        AddItem(Text?: any, Index?: any, RHS?: any): void;

        /**
		* Display3DShading
		**/
        Display3DShading: boolean;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* _Default
		**/
        _Default: number;

        /**
		* Value
		**/
        Value: number;

        /**
		* LinkedCell
		**/
        LinkedCell: string;

        /**
		* DropDownLines
		**/
        DropDownLines: number;

        _Dummy36(): void;

        _Dummy33(): void;

        _Dummy31(): void;

        List(Index?: any, RHS?: any): void;

        /**
		* ListFillRange
		**/
        ListFillRange: string;

        /**
		* ListIndex
		**/
        ListIndex: number;

        RemoveItem(Index?: number, Count?: any, RHS?: any): void;

        Selected(Index?: any, RHS?: any): void;

        /**
		* Count
		**/
        readonly Count: number;

        Group(RHS?: EtGroupObject): void;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtWindows {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtWindow): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Arrange(ArrangeStyle?: EtXlArrangeStyle, ActiveWorkbook?: any, SyncHorizontal?: any, SyncVertical?: any, RHS?: any): void;

        /**
		* Count
		**/
        readonly Count: number;

        CompareSideBySideWith(WindowName?: any, RHS?: boolean): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        _Default(Index?: any, RHS?: EtWindow): void;

        BreakSideBySide(RHS?: boolean): void;

        /**
		* SyncScrollingSideBySide
		**/
        SyncScrollingSideBySide: boolean;

        ResetPositionsSideBySide(): void;

    }

    interface EtWebOptions {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* DownloadComponents
		**/
        DownloadComponents: boolean;

        /**
		* RelyOnVML
		**/
        RelyOnVML: boolean;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* RelyOnCSS
		**/
        RelyOnCSS: boolean;

        /**
		* ScreenSize
		**/
        ScreenSize: Kso.KsoMsoScreenSize;

        /**
		* AllowPNG
		**/
        AllowPNG: boolean;

        /**
		* OrganizeInFolder
		**/
        OrganizeInFolder: boolean;

        /**
		* UseLongFileNames
		**/
        UseLongFileNames: boolean;

        /**
		* PixelsPerInch
		**/
        PixelsPerInch: number;

        /**
		* LocationOfComponents
		**/
        LocationOfComponents: string;

        /**
		* Encoding
		**/
        Encoding: Kso.KsoMsoEncoding;

        /**
		* FolderSuffix
		**/
        readonly FolderSuffix: string;

        UseDefaultFolderSuffix(): void;

        /**
		* TargetBrowser
		**/
        TargetBrowser: Kso.KsoMsoTargetBrowser;

    }

    interface EtSmartTagOptions {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* EmbedSmartTags
		**/
        EmbedSmartTags: boolean;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* DisplaySmartTags
		**/
        DisplaySmartTags: EtXlSmartTagDisplayMode;

    }

    interface EtRectangles {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Text
		**/
        Text: string;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        Add(Left?: number, Top?: number, Width?: number, Height?: number, RHS?: EtRectangle): void;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        _Dummy22(): void;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* AddIndent
		**/
        AddIndent: boolean;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* AutoSize
		**/
        AutoSize: boolean;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* RoundedCorners
		**/
        RoundedCorners: boolean;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Shadow
		**/
        Shadow: boolean;

        /**
		* Count
		**/
        readonly Count: number;

        Group(RHS?: EtGroupObject): void;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtRectangle {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* AddIndent
		**/
        AddIndent: boolean;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* AutoSize
		**/
        AutoSize: boolean;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* Text
		**/
        Text: string;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* RoundedCorners
		**/
        RoundedCorners: boolean;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Shadow
		**/
        Shadow: boolean;

    }

    interface EtProtectedViewWindow {
        /**
		* Width
		**/
        Width: number;

        Activate(): void;

        /**
		* _Default
		**/
        readonly _Default: string;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* EnableResize
		**/
        EnableResize: boolean;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Height
		**/
        Height: number;

        /**
		* Left
		**/
        Left: number;

        /**
		* SourceName
		**/
        readonly SourceName: string;

        /**
		* Top
		**/
        Top: number;

        /**
		* SourcePath
		**/
        readonly SourcePath: string;

        /**
		* WindowState
		**/
        WindowState: EtXlProtectedViewWindowState;

        /**
		* Workbook
		**/
        readonly Workbook: EtWorkbook;

        Close(RHS?: boolean): void;

        Edit(WriteResPassword?: any, UpdateLinks?: any, RHS?: EtWorkbook): void;

    }

    interface EtProtectedViewWindows {
        Open(Filename?: string, Password?: any, AddToMru?: any, RepairMode?: any, RHS?: EtProtectedViewWindow): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtProtectedViewWindow): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        _Default(Index?: any, RHS?: EtProtectedViewWindow): void;

    }

    interface EtConnections {
        _AddFromFile(Filename?: string, RHS?: EtWorkbookConnection): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtWorkbookConnection): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        Add2(Name?: string, Description?: string, ConnectionString?: any, CommandText?: any, lCmdtype?: any, CreateModelConnection?: any, ImportRelationships?: any, RHS?: EtWorkbookConnection): void;

        Add(Name?: string, Description?: string, ConnectionString?: any, CommandText?: any, lCmdtype?: any, RHS?: EtWorkbookConnection): void;

        _Default(Index?: any, RHS?: EtWorkbookConnection): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        AddFromFile(Filename?: string, CreateModelConnection?: any, ImportRelationships?: any, RHS?: EtWorkbookConnection): void;

    }

    interface EtServerViewableItems {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(Index?: any): void;

        DeleteAll(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        Add(Obj?: any, RHS?: any): void;

        _Default(Index?: any, RHS?: any): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtNegativeBarFormat {
        /**
		* ColorType
		**/
        ColorType: EtXlDataBarNegativeColorType;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* BorderColor
		**/
        readonly BorderColor: any;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Color
		**/
        readonly Color: any;

        /**
		* BorderColorType
		**/
        BorderColorType: EtXlDataBarNegativeColorType;

    }

    interface EtTableStyle {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* ShowAsAvailableTableStyle
		**/
        ShowAsAvailableTableStyle: boolean;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* TableStyleElements
		**/
        readonly TableStyleElements: EtTableStyleElements;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* NameLocal
		**/
        readonly NameLocal: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* _Default
		**/
        readonly _Default: string;

        /**
		* BuiltIn
		**/
        readonly BuiltIn: boolean;

        /**
		* ShowAsAvailablePivotTableStyle
		**/
        ShowAsAvailablePivotTableStyle: boolean;

        Delete(): void;

        /**
		* ShowAsAvailableSlicerStyle
		**/
        ShowAsAvailableSlicerStyle: boolean;

        /**
		* ShowAsAvailableTimelineStyle
		**/
        ShowAsAvailableTimelineStyle: boolean;

    }

    interface EtTableStyleElements {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: EtXlTableStyleElementType, RHS?: EtTableStyleElement): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: EtXlTableStyleElementType, RHS?: EtTableStyleElement): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtTableStyleElement {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* StripeSize
		**/
        StripeSize: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Borders
		**/
        readonly Borders: EtBorders;

        /**
		* Parent
		**/
        readonly Parent: any;

        Clear(): void;

        /**
		* HasFormat
		**/
        readonly HasFormat: boolean;

        /**
		* Font
		**/
        readonly Font: EtFont;

    }

    interface EtResearch {
        IsResearchService(ServiceID?: string, RHS?: boolean): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        SetLanguagePair(LanguageFrom?: number, LanguageTo?: number, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Query(ServiceID?: string, QueryString?: any, QueryLanguage?: any, UseSelection?: any, LaunchQuery?: any, RHS?: any): void;

    }

    interface EtModelRelationships {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtModelRelationship): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtModelRelationship): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        Add(ForeignKeyColumn?: EtModelTableColumn, PrimaryKeyColumn?: EtModelTableColumn, RHS?: EtModelRelationship): void;

    }

    interface EtModelRelationship {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* ForeignKeyTable
		**/
        readonly ForeignKeyTable: EtModelTable;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* ForeignKeyColumn
		**/
        readonly ForeignKeyColumn: EtModelTableColumn;

        /**
		* PrimaryKeyTable
		**/
        readonly PrimaryKeyTable: EtModelTable;

        /**
		* PrimaryKeyColumn
		**/
        readonly PrimaryKeyColumn: EtModelTableColumn;

        /**
		* Active
		**/
        Active: boolean;

    }

    interface EtWorkbookEvents {
        Open(): void;

        Activate(): void;

        SheetPivotTableChangeSync(Sh?: any, Target?: EtPivotTable): void;

        BeforeXmlExport(Map?: EtXmlMap, Url?: string, Cancel?: boolean): void;

        AddinInstall(): void;

        Deactivate(): void;

        SheetBeforeDoubleClick(Sh?: any, Target?: EtRange, Cancel?: boolean): void;

        BeforeClose(Cancel?: boolean): void;

        BeforePrint(Cancel?: boolean): void;

        SheetActivate(Sh?: any): void;

        BeforeSave(SaveAsUI?: boolean, Cancel?: boolean): void;

        NewSheet(Sh?: any): void;

        ModelChange(Changes?: EtModelChanges): void;

        AddinUninstall(): void;

        WindowResize(Wn?: EtWindow): void;

        WindowActivate(Wn?: EtWindow): void;

        SheetBeforeDelete(Sh?: any): void;

        WindowDeactivate(Wn?: EtWindow): void;

        SheetSelectionChange(Sh?: any, Target?: EtRange): void;

        SheetBeforeRightClick(Sh?: any, Target?: EtRange, Cancel?: boolean): void;

        SheetDeactivate(Sh?: any): void;

        BeforeXmlImport(Map?: EtXmlMap, Url?: string, IsRefresh?: boolean, Cancel?: boolean): void;

        SheetPivotTableUpdate(Sh?: any, Target?: EtPivotTable): void;

        SheetCalculate(Sh?: any): void;

        SheetChange(Sh?: any, Target?: EtRange): void;

        SheetFollowHyperlink(Sh?: any, Target?: EtHyperlink): void;

        PivotTableCloseConnection(Target?: EtPivotTable): void;

        PivotTableOpenConnection(Target?: EtPivotTable): void;

        Sync(SyncEventType?: Kso.KsoMsoSyncEventType): void;

        AfterXmlImport(Map?: EtXmlMap, IsRefresh?: boolean, Result?: EtXlXmlImportResult): void;

        AfterXmlExport(Map?: EtXmlMap, Url?: string, Result?: EtXlXmlExportResult): void;

        RowsetComplete(Description?: string, Sheet?: string, Success?: boolean): void;

        SheetPivotTableAfterValueChange(Sh?: any, TargetPivotTable?: EtPivotTable, TargetRange?: EtRange): void;

        SheetPivotTableBeforeAllocateChanges(Sh?: any, TargetPivotTable?: EtPivotTable, ValueChangeStart?: number, ValueChangeEnd?: number, Cancel?: boolean): void;

        SheetPivotTableBeforeCommitChanges(Sh?: any, TargetPivotTable?: EtPivotTable, ValueChangeStart?: number, ValueChangeEnd?: number, Cancel?: boolean): void;

        SheetPivotTableBeforeDiscardChanges(Sh?: any, TargetPivotTable?: EtPivotTable, ValueChangeStart?: number, ValueChangeEnd?: number): void;

        AfterSave(Success?: boolean): void;

        NewChart(Ch?: EtChart): void;

        SheetTableUpdate(Sh?: any, Target?: EtTableObject): void;

        SheetLensGalleryRenderComplete(Sh?: any): void;

    }

    interface EtModelChanges {
        /**
		* TableNamesChanged
		**/
        readonly TableNamesChanged: EtModelTableNameChanges;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* TablesAdded
		**/
        readonly TablesAdded: EtModelTableNames;

        /**
		* TablesModified
		**/
        readonly TablesModified: EtModelTableNames;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* ColumnsAdded
		**/
        readonly ColumnsAdded: EtModelColumnNames;

        /**
		* RelationshipChange
		**/
        readonly RelationshipChange: boolean;

        /**
		* TablesDeleted
		**/
        readonly TablesDeleted: EtModelTableNames;

        /**
		* ColumnsDeleted
		**/
        readonly ColumnsDeleted: EtModelColumnNames;

        /**
		* ColumnsChanged
		**/
        readonly ColumnsChanged: EtModelColumnChanges;

        /**
		* MeasuresAdded
		**/
        readonly MeasuresAdded: EtModelMeasureNames;

        /**
		* UnknownChange
		**/
        readonly UnknownChange: boolean;

        /**
		* Source
		**/
        readonly Source: EtXlModelChangeSource;

    }

    interface EtIconCriteria {
        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtIconCriterion): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        Item(Index?: any, RHS?: EtIconCriterion): void;

    }

    interface EtModelTableNames {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: string): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: string): void;

    }

    interface EtModelTableNameChanges {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtModelTableNameChange): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtModelTableNameChange): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtModelTableNameChange {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* TableNameNew
		**/
        readonly TableNameNew: string;

        /**
		* TableNameOld
		**/
        readonly TableNameOld: string;

    }

    interface EtModelColumnNames {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtModelColumnName): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtModelColumnName): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtModelColumnName {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* ColumnName
		**/
        readonly ColumnName: string;

        /**
		* TableName
		**/
        readonly TableName: string;

    }

    interface EtOval {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* AddIndent
		**/
        AddIndent: boolean;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* AutoSize
		**/
        AutoSize: boolean;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* Text
		**/
        Text: string;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Shadow
		**/
        Shadow: boolean;

    }

    interface EtModelColumnChanges {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtModelColumnChange): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtModelColumnChange): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtPictures {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        Insert(Filename?: string, Converter?: any, RHS?: EtPicture): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        Add(Left?: number, Top?: number, Width?: number, Height?: number, RHS?: EtPicture): void;

        _Dummy22(): void;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* Visible
		**/
        Visible: boolean;

        Paste(Link?: any, RHS?: EtPicture): void;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Shadow
		**/
        Shadow: boolean;

        /**
		* Count
		**/
        readonly Count: number;

        Group(RHS?: EtGroupObject): void;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtPicture {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Shadow
		**/
        Shadow: boolean;

    }

    interface EtModelColumnChange {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* ColumnName
		**/
        readonly ColumnName: string;

        /**
		* TableName
		**/
        readonly TableName: string;

    }

    interface EtAddIn {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Installed
		**/
        Installed: boolean;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Keywords
		**/
        readonly Keywords: string;

        /**
		* Author
		**/
        readonly Author: string;

        /**
		* Comments
		**/
        readonly Comments: string;

        /**
		* FullName
		**/
        readonly FullName: string;

        /**
		* Path
		**/
        readonly Path: string;

        /**
		* Subject
		**/
        readonly Subject: string;

        /**
		* Title
		**/
        readonly Title: string;

        /**
		* progID
		**/
        readonly progID: string;

        /**
		* CLSID
		**/
        readonly CLSID: string;

        /**
		* IsOpen
		**/
        readonly IsOpen: boolean;

    }

    interface EtModules {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(lcid?: number): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add2(Before?: any, After?: any, Count?: any, NewLayout?: any, RHS?: any): void;

        PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, IgnorePrintAreas?: any, lcid?: number): void;

        Add(Before?: any, After?: any, Count?: any, RHS?: EtModule): void;

        Copy(Before?: any, After?: any, lcid?: number): void;

        /**
		* Count
		**/
        readonly Count: number;

        _Dummy7(): void;

        Move(Before?: any, After?: any, lcid?: number): void;

        /**
		* VPageBreaks
		**/
        readonly VPageBreaks: EtVPageBreaks;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, lcid?: number): void;

        _Dummy12(): void;

        Select(Replace?: any, lcid?: number): void;

        /**
		* HPageBreaks
		**/
        readonly HPageBreaks: EtHPageBreaks;

        /**
		* Visible
		**/
        Visible: number;

        _Default(Index?: any, RHS?: any): void;

        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, lcid?: number): void;

    }

    interface EtModule {
        InsertFile(Filename?: any, Merge?: any, RHS?: any): void;

        /**
		* Index
		**/
        readonly Index: number;

        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;

        /**
		* _CodeName
		**/
        _CodeName: string;

        /**
		* ProtectionMode
		**/
        readonly ProtectionMode: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(lcid?: number): void;

        _Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any, lcid?: number): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Copy(Before?: any, After?: any, lcid?: number): void;

        Activate(lcid?: number): void;

        PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;

        _Dummy23(): void;

        _Dummy21(): void;

        /**
		* CodeName
		**/
        readonly CodeName: string;

        Move(Before?: any, After?: any, lcid?: number): void;

        SaveAs(Filename?: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any): void;

        Unprotect(Password?: any, lcid?: number): void;

        /**
		* Name
		**/
        Name: string;

        /**
		* ProtectContents
		**/
        readonly ProtectContents: number;

        /**
		* Next
		**/
        readonly Next: any;

        Select(Replace?: any, lcid?: number): void;

        /**
		* OnDoubleClick
		**/
        OnDoubleClick: number;

        /**
		* OnSheetActivate
		**/
        OnSheetActivate: number;

        /**
		* OnSheetDeactivate
		**/
        OnSheetDeactivate: number;

        /**
		* PageSetup
		**/
        readonly PageSetup: EtPageSetup;

        /**
		* Previous
		**/
        readonly Previous: any;

        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, lcid?: number): void;

        _Dummy18(): void;

        _SaveAs(Filename?: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any, lcid?: number): void;

        /**
		* Visible
		**/
        Visible: number;

        /**
		* Shapes
		**/
        readonly Shapes: Kso.KsoShapes;

        Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any): void;

    }

    interface EtToolbar {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        readonly Name: string;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Height
		**/
        Height: number;

        /**
		* BuiltIn
		**/
        readonly BuiltIn: boolean;

        /**
		* Left
		**/
        Left: number;

        /**
		* Position
		**/
        Position: number;

        /**
		* Protection
		**/
        Protection: EtXlToolbarProtection;

        Reset(): void;

        /**
		* ToolbarButtons
		**/
        readonly ToolbarButtons: EtToolbarButtons;

        /**
		* Top
		**/
        Top: number;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

    }

    interface EtToolbars {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtToolbar): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add(Name?: any, RHS?: EtToolbar): void;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtToolbar): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtToolbarButton {
        /**
		* BuiltInFace
		**/
        BuiltInFace: boolean;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Edit(): void;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BuiltIn
		**/
        readonly BuiltIn: boolean;

        Copy(Toolbar?: EtToolbar, Before?: number): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        CopyFace(): void;

        /**
		* HelpContextID
		**/
        HelpContextID: number;

        /**
		* HelpFile
		**/
        HelpFile: string;

        /**
		* ID
		**/
        readonly ID: number;

        /**
		* IsGap
		**/
        readonly IsGap: boolean;

        Move(Toolbar?: EtToolbar, Before?: number): void;

        /**
		* Name
		**/
        Name: string;

        /**
		* OnAction
		**/
        OnAction: string;

        PasteFace(): void;

        /**
		* Pushed
		**/
        Pushed: boolean;

        Reset(): void;

        /**
		* StatusBar
		**/
        StatusBar: string;

        /**
		* Width
		**/
        Width: number;

    }

    interface EtToolbarButtons {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: number, RHS?: EtToolbarButton): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add(Button?: any, Before?: any, OnAction?: any, Pushed?: any, Enabled?: any, StatusBar?: any, HelpFile?: any, HelpContextID?: any, RHS?: EtToolbarButton): void;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        _Default(Index?: number, RHS?: EtToolbarButton): void;

    }

    interface EtAutoCorrect {
        AddReplacement(What?: string, Replacement?: string, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        ReplacementList(Index?: any, RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* TwoInitialCapitals
		**/
        TwoInitialCapitals: boolean;

        DeleteReplacement(What?: string, RHS?: any): void;

        /**
		* CapitalizeNamesOfDays
		**/
        CapitalizeNamesOfDays: boolean;

        /**
		* ReplaceText
		**/
        ReplaceText: boolean;

        /**
		* CorrectSentenceCap
		**/
        CorrectSentenceCap: boolean;

        /**
		* CorrectCapsLock
		**/
        CorrectCapsLock: boolean;

        /**
		* AutoFillFormulasInLists
		**/
        AutoFillFormulasInLists: boolean;

        /**
		* DisplayAutoCorrectOptions
		**/
        DisplayAutoCorrectOptions: boolean;

        /**
		* AutoExpandListRange
		**/
        AutoExpandListRange: boolean;

    }

    interface EtDialogs {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: EtXlBuiltInDialog, RHS?: EtDialog): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: EtXlBuiltInDialog, RHS?: EtDialog): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtDialog {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Show(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: boolean): void;

        /**
		* Parent
		**/
        readonly Parent: any;

    }

    interface EtRecentFiles {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: number, RHS?: EtRecentFile): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        /**
		* Maximum
		**/
        Maximum: number;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: number, RHS?: EtRecentFile): void;

        Add(Name?: string, RHS?: EtRecentFile): void;

    }

    interface EtOLEDBError {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Native
		**/
        readonly Native: number;

        /**
		* ErrorString
		**/
        readonly ErrorString: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* SqlState
		**/
        readonly SqlState: string;

        /**
		* Number
		**/
        readonly Number: number;

        /**
		* Stage
		**/
        readonly Stage: number;

    }

    interface EtDefaultWebOptions {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* RelyOnCSS
		**/
        RelyOnCSS: boolean;

        /**
		* SaveHiddenData
		**/
        SaveHiddenData: boolean;

        /**
		* UseLongFileNames
		**/
        UseLongFileNames: boolean;

        /**
		* UpdateLinksOnSave
		**/
        UpdateLinksOnSave: boolean;

        /**
		* LoadPictures
		**/
        LoadPictures: boolean;

        /**
		* OrganizeInFolder
		**/
        OrganizeInFolder: boolean;

        /**
		* CheckIfOfficeIsHTMLEditor
		**/
        CheckIfOfficeIsHTMLEditor: boolean;

        /**
		* RelyOnVML
		**/
        RelyOnVML: boolean;

        /**
		* DownloadComponents
		**/
        DownloadComponents: boolean;

        /**
		* ScreenSize
		**/
        ScreenSize: Kso.KsoMsoScreenSize;

        /**
		* AllowPNG
		**/
        AllowPNG: boolean;

        /**
		* PixelsPerInch
		**/
        PixelsPerInch: number;

        /**
		* Fonts
		**/
        readonly Fonts: Kso.KsoWebPageFonts;

        /**
		* LocationOfComponents
		**/
        LocationOfComponents: string;

        /**
		* Encoding
		**/
        Encoding: Kso.KsoMsoEncoding;

        /**
		* AlwaysSaveInDefaultEncoding
		**/
        AlwaysSaveInDefaultEncoding: boolean;

        /**
		* FolderSuffix
		**/
        readonly FolderSuffix: string;

        /**
		* TargetBrowser
		**/
        TargetBrowser: Kso.KsoMsoTargetBrowser;

        /**
		* SaveNewWebPagesAsWebArchives
		**/
        SaveNewWebPagesAsWebArchives: boolean;

    }

    interface EtGroupBoxes {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Text
		**/
        Text: string;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        /**
		* Accelerator
		**/
        Accelerator: any;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        Add(Left?: number, Top?: number, Width?: number, Height?: number, RHS?: EtGroupBox): void;

        _Dummy22(): void;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Display3DShading
		**/
        Display3DShading: boolean;

        Group(RHS?: EtGroupObject): void;

        /**
		* PhoneticAccelerator
		**/
        PhoneticAccelerator: any;

        /**
		* Count
		**/
        readonly Count: number;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtCellFormat {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* NumberFormatLocal
		**/
        NumberFormatLocal: any;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* NumberFormat
		**/
        NumberFormat: number;

        /**
		* Borders
		**/
        readonly Borders: EtBorders;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* AddIndent
		**/
        AddIndent: any;

        /**
		* IndentLevel
		**/
        IndentLevel: any;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* Orientation
		**/
        Orientation: any;

        Clear(): void;

        /**
		* ShrinkToFit
		**/
        ShrinkToFit: any;

        /**
		* FormulaHidden
		**/
        FormulaHidden: any;

        /**
		* WrapText
		**/
        WrapText: any;

        /**
		* Locked
		**/
        Locked: any;

        /**
		* MergeCells
		**/
        MergeCells: any;

    }

    interface EtWatches {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtWatch): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add(Source?: any, RHS?: EtWatch): void;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtWatch): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtEXCELCtrlExtender {
        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Name
		**/
        Name: string;

        /**
		* Object
		**/
        readonly Object: any;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        Cut(RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        Update(RHS?: any): void;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* AutoLoad
		**/
        AutoLoad: boolean;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Shadow
		**/
        Shadow: boolean;

        Activate(RHS?: any): void;

        /**
		* AutoUpdate
		**/
        AutoUpdate: boolean;

        /**
		* OLEType
		**/
        readonly OLEType: any;

        /**
		* SourceName
		**/
        SourceName: string;

        Verb(Verb?: EtXlOLEVerb, RHS?: any): void;

        /**
		* LinkedCell
		**/
        LinkedCell: string;

        /**
		* ListFillRange
		**/
        ListFillRange: string;

        /**
		* progID
		**/
        readonly progID: string;

        /**
		* AltHTML
		**/
        AltHTML: string;

    }

    interface EtWatch {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Source
		**/
        readonly Source: any;

    }

    interface EtAutoRecover {
        /**
		* Time
		**/
        Time: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Path
		**/
        Path: string;

        /**
		* Enabled
		**/
        Enabled: boolean;

    }

    interface EtGroupObjects {
        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Dummy3(): void;

        _Dummy68(): void;

        _Dummy67(): void;

        _Dummy66(): void;

        _Dummy65(): void;

        _Dummy60(): void;

        _Dummy61(): void;

        _Dummy62(): void;

        _Dummy63(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        _Dummy41(): void;

        _Dummy42(): void;

        _Dummy43(): void;

        _Dummy44(): void;

        _Dummy45(): void;

        _Dummy47(): void;

        _Dummy48(): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        /**
		* Height
		**/
        Height: number;

        SendToBack(RHS?: any): void;

        _Dummy12(): void;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        _Dummy22(): void;

        _Dummy27(): void;

        _Dummy28(): void;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* AddIndent
		**/
        AddIndent: boolean;

        _Dummy30(): void;

        _Dummy36(): void;

        _Dummy37(): void;

        _Dummy38(): void;

        /**
		* ArrowHeadLength
		**/
        ArrowHeadLength: any;

        /**
		* ArrowHeadStyle
		**/
        ArrowHeadStyle: any;

        /**
		* ArrowHeadWidth
		**/
        ArrowHeadWidth: any;

        /**
		* AutoSize
		**/
        AutoSize: boolean;

        Ungroup(RHS?: any): void;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* _Default
		**/
        _Default: number;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        _Dummy50(): void;

        _Dummy52(): void;

        _Dummy53(): void;

        _Dummy54(): void;

        _Dummy55(): void;

        _Dummy56(): void;

        _Dummy57(): void;

        _Dummy58(): void;

        _Dummy59(): void;

        /**
		* RoundedCorners
		**/
        RoundedCorners: boolean;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Orientation
		**/
        Orientation: any;

        _Dummy77(): void;

        _Dummy75(): void;

        _Dummy73(): void;

        _Dummy72(): void;

        _Dummy70(): void;

        /**
		* Shadow
		**/
        Shadow: boolean;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* Count
		**/
        readonly Count: number;

        Group(RHS?: EtGroupObject): void;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtGroupObject {
        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        _Dummy68(): void;

        _Dummy67(): void;

        _Dummy66(): void;

        _Dummy65(): void;

        _Dummy60(): void;

        _Dummy61(): void;

        _Dummy62(): void;

        _Dummy63(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        _Dummy41(): void;

        _Dummy42(): void;

        _Dummy43(): void;

        _Dummy44(): void;

        _Dummy45(): void;

        _Dummy47(): void;

        _Dummy48(): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        /**
		* Height
		**/
        Height: number;

        SendToBack(RHS?: any): void;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        Ungroup(RHS?: any): void;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        _Dummy27(): void;

        _Dummy28(): void;

        /**
		* AddIndent
		**/
        AddIndent: boolean;

        _Dummy30(): void;

        _Dummy36(): void;

        _Dummy37(): void;

        _Dummy38(): void;

        /**
		* ArrowHeadLength
		**/
        ArrowHeadLength: any;

        /**
		* ArrowHeadStyle
		**/
        ArrowHeadStyle: any;

        /**
		* ArrowHeadWidth
		**/
        ArrowHeadWidth: any;

        /**
		* AutoSize
		**/
        AutoSize: boolean;

        /**
		* _Default
		**/
        _Default: number;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        _Dummy50(): void;

        _Dummy52(): void;

        _Dummy53(): void;

        _Dummy54(): void;

        _Dummy55(): void;

        _Dummy56(): void;

        _Dummy57(): void;

        _Dummy58(): void;

        _Dummy59(): void;

        /**
		* RoundedCorners
		**/
        RoundedCorners: boolean;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Orientation
		**/
        Orientation: any;

        _Dummy77(): void;

        _Dummy75(): void;

        _Dummy73(): void;

        _Dummy72(): void;

        _Dummy70(): void;

        /**
		* Shadow
		**/
        Shadow: boolean;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

    }

    interface EtErrorCheckingOptions {
        /**
		* EvaluateToError
		**/
        EvaluateToError: boolean;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* TextDate
		**/
        TextDate: boolean;

        /**
		* BackgroundChecking
		**/
        BackgroundChecking: boolean;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* IndicatorColorIndex
		**/
        IndicatorColorIndex: Kso.KsoXlColorIndex;

        /**
		* NumberAsText
		**/
        NumberAsText: boolean;

        /**
		* InconsistentFormula
		**/
        InconsistentFormula: boolean;

        /**
		* OmittedCells
		**/
        OmittedCells: boolean;

        /**
		* UnlockedFormulaCells
		**/
        UnlockedFormulaCells: boolean;

        /**
		* EmptyCellReferences
		**/
        EmptyCellReferences: boolean;

        /**
		* ListDataValidation
		**/
        ListDataValidation: boolean;

        /**
		* InconsistentTableFormula
		**/
        InconsistentTableFormula: boolean;

    }

    interface EtGridlines {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtSmartTagRecognizer {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Enabled
		**/
        Enabled: boolean;

        /**
		* FullName
		**/
        readonly FullName: string;

        /**
		* progID
		**/
        readonly progID: string;

        /**
		* _Default
		**/
        readonly _Default: string;

    }

    interface EtSmartTagRecognizers {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtSmartTagRecognizer): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Recognize
		**/
        Recognize: boolean;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtSmartTagRecognizer): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtRTD {
        /**
		* ThrottleInterval
		**/
        ThrottleInterval: number;

        RefreshData(): void;

        RestartServers(): void;

    }

    interface EtMultiThreadedCalculation {
        /**
		* ThreadMode
		**/
        ThreadMode: EtXlThreadMode;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Enabled
		**/
        Enabled: boolean;

        /**
		* ThreadCount
		**/
        ThreadCount: number;

    }

    interface EtAppEvents {
        SheetChange(Sh?: any, Target?: EtRange): void;

        SheetPivotTableUpdate(Sh?: any, Target?: EtPivotTable): void;

        SheetCalculate(Sh?: any): void;

        ProtectedViewWindowDeactivate(Pvw?: EtProtectedViewWindow): void;

        SheetDeactivate(Sh?: any): void;

        NewWorkbook(Wb?: EtWorkbook): void;

        SheetSelectionChange(Sh?: any, Target?: EtRange): void;

        SheetBeforeRightClick(Sh?: any, Target?: EtRange, Cancel?: boolean): void;

        SheetBeforeDoubleClick(Sh?: any, Target?: EtRange, Cancel?: boolean): void;

        WorkbookBeforeXmlExport(Wb?: EtWorkbook, Map?: EtXmlMap, Url?: string, Cancel?: boolean): void;

        SheetActivate(Sh?: any): void;

        WorkbookOpen(Wb?: EtWorkbook): void;

        WorkbookModelChange(Wb?: EtWorkbook, Changes?: EtModelChanges): void;

        WorkbookActivate(Wb?: EtWorkbook): void;

        WorkbookDeactivate(Wb?: EtWorkbook): void;

        WorkbookBeforeClose(Wb?: EtWorkbook, Cancel?: boolean): void;

        WorkbookBeforeSave(Wb?: EtWorkbook, SaveAsUI?: boolean, Cancel?: boolean): void;

        WorkbookBeforePrint(Wb?: EtWorkbook, Cancel?: boolean): void;

        WorkbookNewChart(Wb?: EtWorkbook, Ch?: EtChart): void;

        WorkbookNewSheet(Wb?: EtWorkbook, Sh?: any): void;

        WorkbookAddinInstall(Wb?: EtWorkbook): void;

        WorkbookAddinUninstall(Wb?: EtWorkbook): void;

        WindowResize(Wb?: EtWorkbook, Wn?: EtWindow): void;

        WindowActivate(Wb?: EtWorkbook, Wn?: EtWindow): void;

        SheetBeforeDelete(Sh?: any): void;

        WindowDeactivate(Wb?: EtWorkbook, Wn?: EtWindow): void;

        ProtectedViewWindowResize(Pvw?: EtProtectedViewWindow): void;

        SheetFollowHyperlink(Sh?: any, Target?: EtHyperlink): void;

        WorkbookPivotTableCloseConnection(Wb?: EtWorkbook, Target?: EtPivotTable): void;

        WorkbookPivotTableOpenConnection(Wb?: EtWorkbook, Target?: EtPivotTable): void;

        WorkbookSync(Wb?: EtWorkbook, SyncEventType?: Kso.KsoMsoSyncEventType): void;

        WorkbookBeforeXmlImport(Wb?: EtWorkbook, Map?: EtXmlMap, Url?: string, IsRefresh?: boolean, Cancel?: boolean): void;

        WorkbookAfterXmlExport(Wb?: EtWorkbook, Map?: EtXmlMap, Url?: string, Result?: EtXlXmlExportResult): void;

        WorkbookAfterXmlImport(Wb?: EtWorkbook, Map?: EtXmlMap, IsRefresh?: boolean, Result?: EtXlXmlImportResult): void;

        WorkbookRowsetComplete(Wb?: EtWorkbook, Description?: string, Sheet?: string, Success?: boolean): void;

        AfterCalculate(): void;

        SheetPivotTableAfterValueChange(Sh?: any, TargetPivotTable?: EtPivotTable, TargetRange?: EtRange): void;

        SheetPivotTableBeforeAllocateChanges(Sh?: any, TargetPivotTable?: EtPivotTable, ValueChangeStart?: number, ValueChangeEnd?: number, Cancel?: boolean): void;

        SheetPivotTableBeforeCommitChanges(Sh?: any, TargetPivotTable?: EtPivotTable, ValueChangeStart?: number, ValueChangeEnd?: number, Cancel?: boolean): void;

        SheetPivotTableBeforeDiscardChanges(Sh?: any, TargetPivotTable?: EtPivotTable, ValueChangeStart?: number, ValueChangeEnd?: number): void;

        ProtectedViewWindowOpen(Pvw?: EtProtectedViewWindow): void;

        ProtectedViewWindowBeforeEdit(Pvw?: EtProtectedViewWindow, Cancel?: boolean): void;

        ProtectedViewWindowBeforeClose(Pvw?: EtProtectedViewWindow, Reason?: EtXlProtectedViewCloseReason, Cancel?: boolean): void;

        ProtectedViewWindowActivate(Pvw?: EtProtectedViewWindow): void;

        SheetTableUpdate(Sh?: any, Target?: EtTableObject): void;

        SheetLensGalleryRenderComplete(Sh?: any): void;

        WorkbookAfterSave(Wb?: EtWorkbook, Success?: boolean): void;

    }

    interface EtFileExportConverter {
        /**
		* Description
		**/
        readonly Description: string;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* FileFormat
		**/
        readonly FileFormat: number;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Extensions
		**/
        readonly Extensions: string;

    }

    interface EtFileExportConverters {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtFileExportConverter): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _Default(Index?: any, RHS?: EtFileExportConverter): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtAddIns2 {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtAddIn): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add(Filename?: string, CopyFile?: any, RHS?: EtAddIn): void;

        /**
		* Count
		**/
        readonly Count: number;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        _Default(Index?: any, RHS?: EtAddIn): void;

    }

    interface EtQuickAnalysis {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Show(XlQuickAnalysisMode?: EtXlQuickAnalysisMode): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Hide(XlQuickAnalysisMode?: EtXlQuickAnalysisMode): void;

    }

    interface EtSolver {
        SolverOk(SetCell?: any, MaxMinVal?: any, ValueOf?: any, ByChange?: any, Engine?: any, EngineDesc?: any, errorParam?: number): void;

        SolverAdd(CellRef?: any, Relation?: number, FormulaText?: any, errorParam?: number): void;

        SolverFinish(KeepFinal?: any, ReportArry?: any, OutlineReports?: any, errorParam?: number): void;

        SolverDelete(CellRef?: any, Relation?: number, FormulaText?: any, errorParam?: number): void;

        SolverChange(CellRef?: any, Relation?: number, FormulaText?: any, errorParam?: number): void;

        SolverOptions(MaxTime?: any, Iterations?: any, Precision?: any, AssumeLinear?: any, StepThru?: any, Estimates?: any, Derivatives?: any, SearchOption?: any, IntTolerance?: any, Scaling?: any, Convergence?: any, AssumeNonNeg?: any, PopulationSize?: any, randomSeed?: any, MultiStart?: any, RequireBounds?: any, MutationRate?: any, MaxSubproblems?: any, MaxIntegerSols?: any, SolveWithout?: any, MaxTimeNoImp?: any, errorParam?: number): void;

        SolverReset(): void;

        SolverSolve(UserFinish?: any, ShowRef?: any, SolverResult?: number): void;

    }

    interface EtCheckBox {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* PhoneticAccelerator
		**/
        PhoneticAccelerator: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        /**
		* Accelerator
		**/
        Accelerator: any;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* _Default
		**/
        _Default: number;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Text
		**/
        Text: string;

        /**
		* Display3DShading
		**/
        Display3DShading: boolean;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Value
		**/
        Value: any;

        /**
		* LinkedCell
		**/
        LinkedCell: string;

    }

    interface EtControlFormat {
        /**
		* LockedText
		**/
        LockedText: boolean;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* DropDownLines
		**/
        DropDownLines: number;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        AddItem(Text?: string, Index?: any): void;

        /**
		* LargeChange
		**/
        LargeChange: number;

        RemoveItem(Index?: number, Count?: any): void;

        RemoveAllItems(): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        /**
		* Value
		**/
        Value: number;

        /**
		* LinkedCell
		**/
        LinkedCell: string;

        List(Index?: any, RHS?: any): void;

        /**
		* ListCount
		**/
        ListCount: number;

        /**
		* ListFillRange
		**/
        ListFillRange: string;

        /**
		* ListIndex
		**/
        ListIndex: number;

        /**
		* Max
		**/
        Max: number;

        /**
		* Min
		**/
        Min: number;

        /**
		* MultiSelect
		**/
        MultiSelect: number;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        /**
		* SmallChange
		**/
        SmallChange: number;

        /**
		* _Default
		**/
        _Default: number;

    }

    interface EtOLEFormat {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        Activate(): void;

        Verb(Verb?: any): void;

        /**
		* Object
		**/
        readonly Object: any;

        /**
		* progID
		**/
        readonly progID: string;

    }

    interface EtRTDUpdateEvent {
        UpdateNotify(): void;

        /**
		* HeartbeatInterval
		**/
        HeartbeatInterval: number;

        Disconnect(): void;

    }

    interface EtGlobal {
        /**
		* ActiveMenuBar
		**/
        readonly ActiveMenuBar: EtMenuBar;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        _Run2(Macro?: any, Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, lcid?: number, RHS?: any): void;

        Evaluate(Name?: any, lcid?: number, RHS?: any): void;

        /**
		* ActiveWindow
		**/
        readonly ActiveWindow: EtWindow;

        /**
		* ActiveCell
		**/
        readonly ActiveCell: EtRange;

        /**
		* WorksheetFunction
		**/
        readonly WorksheetFunction: EtWorksheetFunction;

        DDEInitiate(App?: string, Topic?: string, lcid?: number, RHS?: number): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* ActivePrinter
		**/
        ActivePrinter: number;

        /**
		* Parent
		**/
        readonly Parent: EtApplication;

        Union(Arg1?: EtRange, Arg2?: EtRange, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, lcid?: number, RHS?: EtRange): void;

        /**
		* ActiveChart
		**/
        readonly ActiveChart: EtChart;

        /**
		* Cells
		**/
        readonly Cells: EtRange;

        /**
		* ActiveDialog
		**/
        readonly ActiveDialog: EtDialogSheet;

        /**
		* ActiveSheet
		**/
        readonly ActiveSheet: any;

        /**
		* ActiveWorkbook
		**/
        readonly ActiveWorkbook: EtWorkbook;

        /**
		* Excel4MacroSheets
		**/
        readonly Excel4MacroSheets: EtSheets;

        ShortcutMenus(Index?: number, RHS?: EtMenu): void;

        /**
		* AddIns
		**/
        readonly AddIns: EtAddIns;

        /**
		* Modules
		**/
        readonly Modules: EtModules;

        /**
		* Assistant
		**/
        readonly Assistant: Kso.KsoAssistant;

        /**
		* Sheets
		**/
        readonly Sheets: EtSheets;

        Calculate(lcid?: number): void;

        /**
		* Charts
		**/
        readonly Charts: EtSheets;

        /**
		* Rows
		**/
        readonly Rows: EtRange;

        DDEExecute(Channel?: number, String?: string, lcid?: number): void;

        /**
		* Columns
		**/
        readonly Columns: EtRange;

        /**
		* CommandBars
		**/
        readonly CommandBars: Kso.KsoCommandBars;

        /**
		* DDEAppReturnCode
		**/
        readonly DDEAppReturnCode: number;

        DDEPoke(Channel?: number, Item?: any, Data?: any, lcid?: number): void;

        DDERequest(Channel?: number, Item?: string, lcid?: number, RHS?: any): void;

        _Evaluate(Name?: any, lcid?: number, RHS?: any): void;

        DDETerminate(Channel?: number, lcid?: number): void;

        /**
		* ThisWorkbook
		**/
        readonly ThisWorkbook: number;

        /**
		* DialogSheets
		**/
        readonly DialogSheets: EtSheets;

        ExecuteExcel4Macro(String?: string, lcid?: number, RHS?: any): void;

        Intersect(Arg1?: EtRange, Arg2?: EtRange, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, lcid?: number, RHS?: EtRange): void;

        /**
		* MenuBars
		**/
        readonly MenuBars: EtMenuBars;

        /**
		* Names
		**/
        readonly Names: EtNames;

        Range(Cell1?: any, Cell2?: any, RHS?: EtRange): void;

        Run(Macro?: any, Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any, RHS?: any): void;

        /**
		* Selection
		**/
        readonly Selection: number;

        SendKeys(Keys?: any, Wait?: any, lcid?: number): void;

        /**
		* Toolbars
		**/
        readonly Toolbars: EtToolbars;

        /**
		* Workbooks
		**/
        readonly Workbooks: EtWorkbooks;

        /**
		* Windows
		**/
        readonly Windows: EtWindows;

        /**
		* Worksheets
		**/
        readonly Worksheets: EtSheets;

        /**
		* Excel4IntlMacroSheets
		**/
        readonly Excel4IntlMacroSheets: EtSheets;

    }

    interface EtCharts {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: any): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(lcid?: number): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        Add2(Before?: any, After?: any, Count?: any, NewLayout?: any, RHS?: EtChart): void;

        PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;

        Add(Before?: any, After?: any, Count?: any, RHS?: EtChart): void;

        Copy(Before?: any, After?: any, lcid?: number): void;

        /**
		* Count
		**/
        readonly Count: number;

        _Dummy7(): void;

        Move(Before?: any, After?: any, lcid?: number): void;

        /**
		* VPageBreaks
		**/
        readonly VPageBreaks: EtVPageBreaks;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, lcid?: number): void;

        PrintPreview(EnableChanges?: any, lcid?: number): void;

        Select(Replace?: any, lcid?: number): void;

        /**
		* HPageBreaks
		**/
        readonly HPageBreaks: EtHPageBreaks;

        /**
		* Visible
		**/
        Visible: number;

        _Default(Index?: any, RHS?: any): void;

        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, lcid?: number): void;

    }

    interface EtDrawingObjects {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Text
		**/
        Text: string;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        /**
		* Accelerator
		**/
        Accelerator: any;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        _Dummy47(): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        /**
		* Height
		**/
        Height: number;

        SendToBack(RHS?: any): void;

        /**
		* SmallChange
		**/
        SmallChange: number;

        _Dummy12(): void;

        _Dummy15(): void;

        /**
		* DisplayVerticalScrollBar
		**/
        DisplayVerticalScrollBar: boolean;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        _Dummy22(): void;

        _Dummy28(): void;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* HelpButton
		**/
        HelpButton: boolean;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* AddIndent
		**/
        AddIndent: boolean;

        /**
		* LargeChange
		**/
        LargeChange: number;

        AddItem(Text?: any, Index?: any, RHS?: any): void;

        /**
		* ArrowHeadLength
		**/
        ArrowHeadLength: any;

        /**
		* ArrowHeadStyle
		**/
        ArrowHeadStyle: any;

        /**
		* ArrowHeadWidth
		**/
        ArrowHeadWidth: any;

        /**
		* InputType
		**/
        InputType: number;

        /**
		* AutoSize
		**/
        AutoSize: boolean;

        Ungroup(RHS?: any): void;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* ListIndex
		**/
        ListIndex: number;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* CancelButton
		**/
        CancelButton: boolean;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* _Default
		**/
        _Default: number;

        /**
		* DefaultButton
		**/
        DefaultButton: boolean;

        /**
		* DismissButton
		**/
        DismissButton: boolean;

        /**
		* Display3DShading
		**/
        Display3DShading: boolean;

        /**
		* DropDownLines
		**/
        DropDownLines: number;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* RoundedCorners
		**/
        RoundedCorners: boolean;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* LinkedCell
		**/
        LinkedCell: string;

        _Dummy54(): void;

        _Dummy56(): void;

        List(Index?: any, RHS?: any): void;

        /**
		* ListFillRange
		**/
        ListFillRange: string;

        /**
		* Max
		**/
        Max: number;

        /**
		* Min
		**/
        Min: number;

        /**
		* MultiLine
		**/
        MultiLine: boolean;

        /**
		* MultiSelect
		**/
        MultiSelect: boolean;

        /**
		* PhoneticAccelerator
		**/
        PhoneticAccelerator: any;

        RemoveAllItems(RHS?: any): void;

        RemoveItem(Index?: number, Count?: any, RHS?: any): void;

        Reshape(Vertex?: number, Insert?: any, Left?: any, Top?: any, RHS?: any): void;

        Selected(Index?: any, RHS?: any): void;

        /**
		* Shadow
		**/
        Shadow: boolean;

        /**
		* Value
		**/
        Value: number;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        Vertices(Index1?: any, Index2?: any, RHS?: any): void;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* Count
		**/
        readonly Count: number;

        Item(Index?: any, RHS?: any): void;

        Group(RHS?: EtGroupObject): void;

        LinkCombo(Link?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtSeries {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* AxisGroup
		**/
        AxisGroup: Kso.KsoXlAxisGroup;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* InvertColorIndex
		**/
        InvertColorIndex: number;

        Select(RHS?: any): void;

        DataLabels(Index?: any, RHS?: any): void;

        /**
		* Name
		**/
        Name: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* InvertIfNegative
		**/
        InvertIfNegative: boolean;

        _ApplyDataLabels(Type?: Kso.KsoXlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, RHS?: any): void;

        /**
		* MarkerStyle
		**/
        MarkerStyle: Kso.KsoXlMarkerStyle;

        Copy(RHS?: any): void;

        ClearFormats(RHS?: any): void;

        Delete(RHS?: any): void;

        /**
		* MarkerForegroundColorIndex
		**/
        MarkerForegroundColorIndex: Kso.KsoXlColorIndex;

        ErrorBar(Direction?: Kso.KsoXlErrorBarDirection, Include?: Kso.KsoXlErrorBarInclude, Type?: Kso.KsoXlErrorBarType, Amount?: any, MinusValues?: any, RHS?: any): void;

        /**
		* ErrorBars
		**/
        readonly ErrorBars: EtErrorBars;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

        /**
		* Explosion
		**/
        Explosion: number;

        /**
		* Values
		**/
        Values: any;

        /**
		* FormulaR1C1Local
		**/
        FormulaR1C1Local: string;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* Shadow
		**/
        Shadow: boolean;

        /**
		* FormulaLocal
		**/
        FormulaLocal: string;

        /**
		* FormulaR1C1
		**/
        FormulaR1C1: string;

        /**
		* HasDataLabels
		**/
        HasDataLabels: boolean;

        /**
		* PlotColorIndex
		**/
        readonly PlotColorIndex: number;

        /**
		* LeaderLines
		**/
        readonly LeaderLines: EtLeaderLines;

        /**
		* ApplyPictToEnd
		**/
        ApplyPictToEnd: boolean;

        /**
		* HasErrorBars
		**/
        HasErrorBars: boolean;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
		* Smooth
		**/
        Smooth: boolean;

        Points(Index?: any, RHS?: any): void;

        /**
		* MarkerBackgroundColor
		**/
        MarkerBackgroundColor: number;

        /**
		* MarkerBackgroundColorIndex
		**/
        MarkerBackgroundColorIndex: Kso.KsoXlColorIndex;

        /**
		* MarkerForegroundColor
		**/
        MarkerForegroundColor: number;

        /**
		* MarkerSize
		**/
        MarkerSize: number;

        /**
		* PictureType
		**/
        PictureType: Kso.KsoXlChartPictureType;

        Paste(RHS?: any): void;

        /**
		* PictureUnit2
		**/
        PictureUnit2: number;

        /**
		* PictureUnit
		**/
        PictureUnit: number;

        /**
		* XValues
		**/
        XValues: any;

        /**
		* PlotOrder
		**/
        PlotOrder: number;

        Trendlines(Index?: any, RHS?: any): void;

        /**
		* Type
		**/
        Type: number;

        /**
		* HasLeaderLines
		**/
        HasLeaderLines: boolean;

        /**
		* ChartType
		**/
        ChartType: Kso.KsoXlChartType;

        ApplyCustomType(ChartType?: Kso.KsoXlChartType): void;

        /**
		* BubbleSizes
		**/
        BubbleSizes: any;

        /**
		* BarShape
		**/
        BarShape: Kso.KsoXlBarShape;

        /**
		* ApplyPictToSides
		**/
        ApplyPictToSides: boolean;

        /**
		* ApplyPictToFront
		**/
        ApplyPictToFront: boolean;

        /**
		* Has3DEffect
		**/
        Has3DEffect: boolean;

        /**
		* InvertColor
		**/
        InvertColor: number;

        ApplyDataLabels(Type?: Kso.KsoXlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any, RHS?: any): void;

        /**
		* IsFiltered
		**/
        IsFiltered: boolean;

    }

    interface EtPivotTables {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtPivotTable): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        _NewEnum(RHS?: any): void;

        Add(PivotCache?: EtPivotCache, TableDestination?: any, TableName?: any, ReadData?: any, DefaultVersion?: any, RHS?: EtPivotTable): void;

    }

    interface EtButton {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* PhoneticAccelerator
		**/
        PhoneticAccelerator: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        /**
		* Accelerator
		**/
        Accelerator: any;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* HelpButton
		**/
        HelpButton: boolean;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* AddIndent
		**/
        AddIndent: boolean;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* AutoSize
		**/
        AutoSize: boolean;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* CancelButton
		**/
        CancelButton: boolean;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* Text
		**/
        Text: string;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* DefaultButton
		**/
        DefaultButton: boolean;

        /**
		* DismissButton
		**/
        DismissButton: boolean;

    }

    interface EtCheckBoxes {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Text
		**/
        Text: string;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        /**
		* Accelerator
		**/
        Accelerator: any;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        Add(Left?: number, Top?: number, Width?: number, Height?: number, RHS?: EtCheckBox): void;

        _Dummy22(): void;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* _Default
		**/
        _Default: number;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Display3DShading
		**/
        Display3DShading: boolean;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Value
		**/
        Value: any;

        /**
		* LinkedCell
		**/
        LinkedCell: string;

        Group(RHS?: EtGroupObject): void;

        /**
		* PhoneticAccelerator
		**/
        PhoneticAccelerator: any;

        /**
		* Count
		**/
        readonly Count: number;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtGroupBox {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* PhoneticAccelerator
		**/
        PhoneticAccelerator: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        /**
		* Accelerator
		**/
        Accelerator: any;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Text
		**/
        Text: string;

        /**
		* Display3DShading
		**/
        Display3DShading: boolean;

    }

    interface EtEditBoxes {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Text
		**/
        Text: string;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* DisplayVerticalScrollBar
		**/
        DisplayVerticalScrollBar: boolean;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        Add(Left?: number, Top?: number, Width?: number, Height?: number, RHS?: EtEditBox): void;

        _Dummy22(): void;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* InputType
		**/
        InputType: number;

        _Dummy34(): void;

        /**
		* MultiLine
		**/
        MultiLine: boolean;

        /**
		* PasswordEdit
		**/
        PasswordEdit: boolean;

        /**
		* Count
		**/
        readonly Count: number;

        Group(RHS?: EtGroupObject): void;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtScrollBars {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* SmallChange
		**/
        SmallChange: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        Add(Left?: number, Top?: number, Width?: number, Height?: number, RHS?: EtScrollBar): void;

        _Dummy22(): void;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* _Default
		**/
        _Default: number;

        /**
		* Display3DShading
		**/
        Display3DShading: boolean;

        /**
		* Value
		**/
        Value: number;

        /**
		* LinkedCell
		**/
        LinkedCell: string;

        /**
		* Max
		**/
        Max: number;

        /**
		* Min
		**/
        Min: number;

        /**
		* LargeChange
		**/
        LargeChange: number;

        /**
		* Count
		**/
        readonly Count: number;

        Group(RHS?: EtGroupObject): void;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtScrollBar {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* SmallChange
		**/
        SmallChange: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* _Default
		**/
        _Default: number;

        /**
		* Display3DShading
		**/
        Display3DShading: boolean;

        /**
		* Value
		**/
        Value: number;

        /**
		* LinkedCell
		**/
        LinkedCell: string;

        /**
		* Max
		**/
        Max: number;

        /**
		* Min
		**/
        Min: number;

        /**
		* LargeChange
		**/
        LargeChange: number;

    }

    interface EtListBox {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* LinkedObject
		**/
        readonly LinkedObject: any;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* MultiSelect
		**/
        MultiSelect: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Visible
		**/
        Visible: boolean;

        RemoveAllItems(RHS?: any): void;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        AddItem(Text?: any, Index?: any, RHS?: any): void;

        /**
		* Display3DShading
		**/
        Display3DShading: boolean;

        /**
		* _Default
		**/
        _Default: number;

        /**
		* Value
		**/
        Value: number;

        /**
		* LinkedCell
		**/
        LinkedCell: string;

        List(Index?: any, RHS?: any): void;

        Selected(Index?: any, RHS?: any): void;

        /**
		* ListCount
		**/
        readonly ListCount: number;

        /**
		* ListFillRange
		**/
        ListFillRange: string;

        /**
		* ListIndex
		**/
        ListIndex: number;

        RemoveItem(Index?: number, Count?: any, RHS?: any): void;

    }

    interface EtDropDown {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* LinkedObject
		**/
        readonly LinkedObject: any;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Visible
		**/
        Visible: boolean;

        RemoveAllItems(RHS?: any): void;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        AddItem(Text?: any, Index?: any, RHS?: any): void;

        /**
		* Display3DShading
		**/
        Display3DShading: boolean;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* _Default
		**/
        _Default: number;

        /**
		* Value
		**/
        Value: number;

        /**
		* LinkedCell
		**/
        LinkedCell: string;

        List(Index?: any, RHS?: any): void;

        Selected(Index?: any, RHS?: any): void;

        /**
		* ListCount
		**/
        readonly ListCount: number;

        /**
		* ListFillRange
		**/
        ListFillRange: string;

        /**
		* ListIndex
		**/
        ListIndex: number;

        /**
		* DropDownLines
		**/
        DropDownLines: number;

        _Dummy36(): void;

        RemoveItem(Index?: number, Count?: any, RHS?: any): void;

        /**
		* Text
		**/
        Text: string;

    }

    interface EtLabels {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Text
		**/
        Text: string;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        /**
		* Accelerator
		**/
        Accelerator: any;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        Add(Left?: number, Top?: number, Width?: number, Height?: number, RHS?: EtLabel): void;

        _Dummy22(): void;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* Caption
		**/
        Caption: string;

        _Dummy33(): void;

        Group(RHS?: EtGroupObject): void;

        /**
		* PhoneticAccelerator
		**/
        PhoneticAccelerator: any;

        /**
		* Count
		**/
        readonly Count: number;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtLine {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* ArrowHeadLength
		**/
        ArrowHeadLength: any;

        /**
		* ArrowHeadStyle
		**/
        ArrowHeadStyle: any;

        /**
		* ArrowHeadWidth
		**/
        ArrowHeadWidth: any;

    }

    interface EtLines {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        Add(X1?: number, Y1?: number, X2?: number, Y2?: number, RHS?: EtLine): void;

        _Dummy22(): void;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* ArrowHeadLength
		**/
        ArrowHeadLength: any;

        /**
		* ArrowHeadStyle
		**/
        ArrowHeadStyle: any;

        /**
		* ArrowHeadWidth
		**/
        ArrowHeadWidth: any;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Count
		**/
        readonly Count: number;

        Group(RHS?: EtGroupObject): void;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtOvals {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Text
		**/
        Text: string;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        Add(Left?: number, Top?: number, Width?: number, Height?: number, RHS?: EtOval): void;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        _Dummy22(): void;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* AddIndent
		**/
        AddIndent: boolean;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* AutoSize
		**/
        AutoSize: boolean;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Shadow
		**/
        Shadow: boolean;

        /**
		* Count
		**/
        readonly Count: number;

        Group(RHS?: EtGroupObject): void;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtArc {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        _Dummy43(): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* AddIndent
		**/
        AddIndent: boolean;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* AutoSize
		**/
        AutoSize: boolean;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* Text
		**/
        Text: string;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

    }

    interface EtTextBoxes {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Text
		**/
        Text: string;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        Add(Left?: number, Top?: number, Width?: number, Height?: number, RHS?: EtTextBox): void;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        _Dummy22(): void;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* AddIndent
		**/
        AddIndent: boolean;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* AutoSize
		**/
        AutoSize: boolean;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* RoundedCorners
		**/
        RoundedCorners: boolean;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Shadow
		**/
        Shadow: boolean;

        /**
		* Count
		**/
        readonly Count: number;

        Group(RHS?: EtGroupObject): void;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtArcs {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Text
		**/
        Text: string;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        _Dummy43(): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        Add(X1?: number, Y1?: number, X2?: number, Y2?: number, RHS?: EtArc): void;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        _Dummy22(): void;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* AddIndent
		**/
        AddIndent: boolean;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* AutoSize
		**/
        AutoSize: boolean;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Count
		**/
        readonly Count: number;

        Group(RHS?: EtGroupObject): void;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtOLEObjectEvents {
        GotFocus(): void;

        LostFocus(): void;

    }

    interface EtOLEObjects {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        _Dummy41(): void;

        _Dummy40(): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        Add(ClassType?: any, Filename?: any, Link?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, Left?: any, Top?: any, Width?: any, Height?: any, RHS?: EtOLEObject): void;

        _Dummy22(): void;

        /**
		* AutoLoad
		**/
        AutoLoad: boolean;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Shadow
		**/
        Shadow: boolean;

        _Dummy39(): void;

        _Dummy38(): void;

        _Dummy37(): void;

        _Dummy36(): void;

        _Dummy34(): void;

        _Dummy33(): void;

        _Dummy32(): void;

        _Dummy30(): void;

        /**
		* SourceName
		**/
        SourceName: string;

        /**
		* Count
		**/
        readonly Count: number;

        Group(RHS?: EtGroupObject): void;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtOLEObject {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        Update(RHS?: any): void;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* AutoLoad
		**/
        AutoLoad: boolean;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Shadow
		**/
        Shadow: boolean;

        Activate(RHS?: any): void;

        /**
		* AutoUpdate
		**/
        AutoUpdate: boolean;

        /**
		* Object
		**/
        readonly Object: any;

        /**
		* OLEType
		**/
        readonly OLEType: any;

        /**
		* SourceName
		**/
        SourceName: string;

        Verb(Verb?: EtXlOLEVerb, RHS?: any): void;

        /**
		* LinkedCell
		**/
        LinkedCell: string;

        /**
		* ListFillRange
		**/
        ListFillRange: string;

        /**
		* progID
		**/
        readonly progID: string;

        /**
		* AltHTML
		**/
        AltHTML: string;

    }

    interface EtTextBox {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* AddIndent
		**/
        AddIndent: boolean;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* AutoSize
		**/
        AutoSize: boolean;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* Text
		**/
        Text: string;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* RoundedCorners
		**/
        RoundedCorners: boolean;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Shadow
		**/
        Shadow: boolean;

    }

    interface EtDrawings {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Text
		**/
        Text: string;

        _Dummy3(): void;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        _Dummy46(): void;

        _Dummy44(): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        _Dummy15(): void;

        /**
		* Locked
		**/
        Locked: boolean;

        _Dummy12(): void;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        Add(X1?: number, Y1?: number, X2?: number, Y2?: number, Closed?: boolean, RHS?: EtDrawing): void;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        _Dummy22(): void;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* AddIndent
		**/
        AddIndent: boolean;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* AutoSize
		**/
        AutoSize: boolean;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Shadow
		**/
        Shadow: boolean;

        Reshape(Vertex?: number, Insert?: boolean, Left?: any, Top?: any, RHS?: any): void;

        /**
		* Count
		**/
        readonly Count: number;

        Group(RHS?: EtGroupObject): void;

        Item(Index?: any, RHS?: any): void;

        _NewEnum(RHS?: any): void;

    }

    interface EtDrawing {
        /**
		* LockedText
		**/
        LockedText: boolean;

        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, RHS?: any): void;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* PrintObject
		**/
        PrintObject: boolean;

        Delete(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* BottomRightCell
		**/
        readonly BottomRightCell: EtRange;

        /**
		* Placement
		**/
        Placement: any;

        BringToFront(RHS?: any): void;

        Cut(RHS?: any): void;

        Copy(RHS?: any): void;

        AddVertex(Left?: number, Top?: number, RHS?: any): void;

        CopyPicture(Appearance?: EtXlPictureAppearance, Format?: EtXlCopyPictureFormat, RHS?: any): void;

        /**
		* Enabled
		**/
        Enabled: boolean;

        SendToBack(RHS?: any): void;

        /**
		* Height
		**/
        Height: number;

        /**
		* Index
		**/
        readonly Index: number;

        /**
		* OnAction
		**/
        OnAction: string;

        /**
		* Left
		**/
        Left: number;

        /**
		* Locked
		**/
        Locked: boolean;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Name
		**/
        Name: string;

        Select(Replace?: any, RHS?: any): void;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Top
		**/
        Top: number;

        /**
		* TopLeftCell
		**/
        readonly TopLeftCell: EtRange;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* Visible
		**/
        Visible: boolean;

        /**
		* Width
		**/
        Width: number;

        /**
		* ZOrder
		**/
        readonly ZOrder: number;

        /**
		* ShapeRange
		**/
        readonly ShapeRange: Kso.KsoShapeRange;

        /**
		* AddIndent
		**/
        AddIndent: boolean;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* AutoSize
		**/
        AutoSize: boolean;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* Text
		**/
        Text: string;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Shadow
		**/
        Shadow: boolean;

        Reshape(Vertex?: number, Insert?: boolean, Left?: any, Top?: any, RHS?: any): void;

        Vertices(Index1?: any, Index2?: any, RHS?: any): void;

    }

    interface EtFormatCondition {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Formula1
		**/
        readonly Formula1: string;

        /**
		* Formula2
		**/
        readonly Formula2: string;

        /**
		* Operator
		**/
        readonly Operator: number;

        SetLastPriority(): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        SetFirstPriority(): void;

        _Modify(Type?: EtXlFormatConditionType, Operator?: any, Formula1?: any, Formula2?: any): void;

        /**
		* Type
		**/
        readonly Type: number;

        ModifyAppliesToRange(Range?: EtRange): void;

        /**
		* Borders
		**/
        readonly Borders: EtBorders;

        /**
		* Font
		**/
        readonly Font: EtFont;

        Delete(): void;

        Modify(Type?: EtXlFormatConditionType, Operator?: any, Formula1?: any, Formula2?: any, String?: any, Operator2?: any): void;

        /**
		* Text
		**/
        Text: string;

        /**
		* TextOperator
		**/
        TextOperator: EtXlContainsOperator;

        /**
		* DateOperator
		**/
        DateOperator: EtXlTimePeriods;

        /**
		* NumberFormat
		**/
        NumberFormat: any;

        /**
		* Priority
		**/
        Priority: number;

        /**
		* StopIfTrue
		**/
        StopIfTrue: boolean;

        /**
		* AppliesTo
		**/
        readonly AppliesTo: EtRange;

        /**
		* ScopeType
		**/
        ScopeType: EtXlPivotConditionScope;

        /**
		* PTCondition
		**/
        readonly PTCondition: boolean;

    }

    interface EtAxis {
        /**
		* MajorGridlines
		**/
        readonly MajorGridlines: EtGridlines;

        /**
		* AxisGroup
		**/
        readonly AxisGroup: Kso.KsoXlAxisGroup;

        /**
		* MinimumScale
		**/
        MinimumScale: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* AxisTitle
		**/
        readonly AxisTitle: EtAxisTitle;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* DisplayUnit
		**/
        DisplayUnit: Kso.KsoXlDisplayUnit;

        /**
		* MaximumScale
		**/
        MaximumScale: number;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* TickLabels
		**/
        readonly TickLabels: EtTickLabels;

        /**
		* HasMinorGridlines
		**/
        HasMinorGridlines: boolean;

        /**
		* CategoryNames
		**/
        CategoryNames: any;

        /**
		* AxisBetweenCategories
		**/
        AxisBetweenCategories: boolean;

        /**
		* Crosses
		**/
        Crosses: Kso.KsoXlAxisCrosses;

        /**
		* CrossesAt
		**/
        CrossesAt: number;

        /**
		* MinorTickMark
		**/
        MinorTickMark: Kso.KsoXlTickMark;

        Delete(RHS?: any): void;

        /**
		* TickMarkSpacing
		**/
        TickMarkSpacing: number;

        /**
		* HasMajorGridlines
		**/
        HasMajorGridlines: boolean;

        /**
		* HasTitle
		**/
        HasTitle: boolean;

        /**
		* MinorUnitScale
		**/
        MinorUnitScale: Kso.KsoXlTimeUnit;

        /**
		* MajorTickMark
		**/
        MajorTickMark: Kso.KsoXlTickMark;

        /**
		* MajorUnit
		**/
        MajorUnit: number;

        /**
		* Height
		**/
        readonly Height: number;

        /**
		* BaseUnitIsAuto
		**/
        BaseUnitIsAuto: boolean;

        /**
		* MajorUnitIsAuto
		**/
        MajorUnitIsAuto: boolean;

        /**
		* TickLabelSpacing
		**/
        TickLabelSpacing: number;

        Select(RHS?: any): void;

        /**
		* MaximumScaleIsAuto
		**/
        MaximumScaleIsAuto: boolean;

        /**
		* Width
		**/
        readonly Width: number;

        /**
		* MinimumScaleIsAuto
		**/
        MinimumScaleIsAuto: boolean;

        /**
		* MinorGridlines
		**/
        readonly MinorGridlines: EtGridlines;

        /**
		* MinorUnit
		**/
        MinorUnit: number;

        /**
		* Type
		**/
        Type: Kso.KsoXlAxisType;

        /**
		* MinorUnitIsAuto
		**/
        MinorUnitIsAuto: boolean;

        /**
		* BaseUnit
		**/
        BaseUnit: Kso.KsoXlTimeUnit;

        /**
		* ScaleType
		**/
        ScaleType: Kso.KsoXlScaleType;

        /**
		* ReversePlotOrder
		**/
        ReversePlotOrder: boolean;

        /**
		* TickLabelPosition
		**/
        TickLabelPosition: Kso.KsoXlTickLabelPosition;

        /**
		* MajorUnitScale
		**/
        MajorUnitScale: Kso.KsoXlTimeUnit;

        /**
		* CategoryType
		**/
        CategoryType: Kso.KsoXlCategoryType;

        /**
		* Left
		**/
        readonly Left: number;

        /**
		* Top
		**/
        readonly Top: number;

        /**
		* DisplayUnitCustom
		**/
        DisplayUnitCustom: number;

        /**
		* HasDisplayUnitLabel
		**/
        HasDisplayUnitLabel: boolean;

        /**
		* DisplayUnitLabel
		**/
        readonly DisplayUnitLabel: EtDisplayUnitLabel;

        /**
		* LogBase
		**/
        LogBase: number;

        /**
		* TickLabelSpacingIsAuto
		**/
        TickLabelSpacingIsAuto: boolean;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtDisplayUnitLabel {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Top
		**/
        Top: number;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Left
		**/
        Left: number;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* FormulaLocal
		**/
        FormulaLocal: string;

        /**
		* Shadow
		**/
        Shadow: boolean;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

        /**
		* Text
		**/
        Text: string;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* Position
		**/
        Position: Kso.KsoXlChartElementPosition;

        _Dummy21(): void;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        /**
		* Height
		**/
        readonly Height: number;

        /**
		* Width
		**/
        readonly Width: number;

        /**
		* FormulaR1C1Local
		**/
        FormulaR1C1Local: string;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* FormulaR1C1
		**/
        FormulaR1C1: string;

    }

    interface EtChartGroups extends Kso.KsoChartGroups {}

    interface EtAxes extends Kso.KsoAxes {}

    interface EtPoints extends Kso.KsoPoints {}

    interface EtPoint {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* MarkerForegroundColor
		**/
        MarkerForegroundColor: number;

        /**
		* DataLabel
		**/
        readonly DataLabel: EtDataLabel;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Left
		**/
        readonly Left: number;

        /**
		* InvertIfNegative
		**/
        InvertIfNegative: boolean;

        _ApplyDataLabels(Type?: Kso.KsoXlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, RHS?: any): void;

        /**
		* MarkerStyle
		**/
        MarkerStyle: Kso.KsoXlMarkerStyle;

        Copy(RHS?: any): void;

        ClearFormats(RHS?: any): void;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

        /**
		* Explosion
		**/
        Explosion: number;

        /**
		* HasDataLabel
		**/
        HasDataLabel: boolean;

        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* MarkerBackgroundColor
		**/
        MarkerBackgroundColor: number;

        /**
		* MarkerBackgroundColorIndex
		**/
        MarkerBackgroundColorIndex: Kso.KsoXlColorIndex;

        /**
		* MarkerForegroundColorIndex
		**/
        MarkerForegroundColorIndex: Kso.KsoXlColorIndex;

        /**
		* MarkerSize
		**/
        MarkerSize: number;

        /**
		* Width
		**/
        readonly Width: number;

        /**
		* PictureType
		**/
        PictureType: Kso.KsoXlChartPictureType;

        Paste(RHS?: any): void;

        /**
		* PictureUnit2
		**/
        PictureUnit2: number;

        /**
		* PictureUnit
		**/
        PictureUnit: number;

        Select(RHS?: any): void;

        /**
		* ApplyPictToSides
		**/
        ApplyPictToSides: boolean;

        /**
		* ApplyPictToFront
		**/
        ApplyPictToFront: boolean;

        /**
		* ApplyPictToEnd
		**/
        ApplyPictToEnd: boolean;

        /**
		* Shadow
		**/
        Shadow: boolean;

        ApplyDataLabels(Type?: Kso.KsoXlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any, RHS?: any): void;

        /**
		* SecondaryPlot
		**/
        SecondaryPlot: boolean;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
		* Has3DEffect
		**/
        Has3DEffect: boolean;

        /**
		* Height
		**/
        readonly Height: number;

        /**
		* Top
		**/
        readonly Top: number;

        PieSliceLocation(loc?: Kso.KsoXlPieSliceLocation, Index?: Kso.KsoXlPieSliceIndex, RHS?: number): void;

    }

    interface EtDataLabels {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* ShowSeriesName
		**/
        ShowSeriesName: boolean;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

        /**
		* Separator
		**/
        Separator: any;

        _Dummy9(): void;

        /**
		* ShowCategoryName
		**/
        ShowCategoryName: boolean;

        _Dummy17(): void;

        _Dummy16(): void;

        _Dummy13(): void;

        _Dummy10(): void;

        /**
		* NumberFormatLinked
		**/
        NumberFormatLinked: boolean;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* Shadow
		**/
        Shadow: boolean;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* Position
		**/
        Position: Kso.KsoXlDataLabelPosition;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        /**
		* AutoText
		**/
        AutoText: boolean;

        /**
		* NumberFormat
		**/
        NumberFormat: string;

        /**
		* NumberFormatLocal
		**/
        NumberFormatLocal: any;

        /**
		* ShowLegendKey
		**/
        ShowLegendKey: boolean;

        /**
		* Type
		**/
        Type: any;

        /**
		* ShowBubbleSize
		**/
        ShowBubbleSize: boolean;

        /**
		* ShowValue
		**/
        ShowValue: boolean;

        /**
		* ShowPercentage
		**/
        ShowPercentage: boolean;

        /**
		* Count
		**/
        readonly Count: number;

        Item(Index?: any, RHS?: EtDataLabel): void;

        _NewEnum(RHS?: any): void;

        _Default(Index?: any, RHS?: EtDataLabel): void;

        Propagate(Index?: any): void;

        /**
		* ShowRange
		**/
        ShowRange: boolean;

    }

    interface EtDataLabel {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* ShowSeriesName
		**/
        ShowSeriesName: boolean;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        Select(RHS?: any): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
		* Caption
		**/
        Caption: string;

        /**
		* Top
		**/
        Top: number;

        Characters(Start?: any, Length?: any, RHS?: EtCharacters): void;

        /**
		* NumberFormatLinked
		**/
        NumberFormatLinked: boolean;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* HorizontalAlignment
		**/
        HorizontalAlignment: any;

        /**
		* Left
		**/
        Left: number;

        /**
		* Orientation
		**/
        Orientation: any;

        /**
		* FormulaLocal
		**/
        FormulaLocal: string;

        /**
		* Shadow
		**/
        Shadow: boolean;

        /**
		* _Width
		**/
        readonly _Width: number;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

        /**
		* Separator
		**/
        Separator: any;

        /**
		* Text
		**/
        Text: string;

        /**
		* VerticalAlignment
		**/
        VerticalAlignment: any;

        /**
		* ReadingOrder
		**/
        ReadingOrder: number;

        /**
		* Position
		**/
        Position: Kso.KsoXlDataLabelPosition;

        /**
		* AutoScaleFont
		**/
        AutoScaleFont: any;

        /**
		* AutoText
		**/
        AutoText: boolean;

        /**
		* NumberFormat
		**/
        NumberFormat: string;

        /**
		* NumberFormatLocal
		**/
        NumberFormatLocal: any;

        /**
		* ShowLegendKey
		**/
        ShowLegendKey: boolean;

        /**
		* Type
		**/
        Type: any;

        /**
		* ShowCategoryName
		**/
        ShowCategoryName: boolean;

        /**
		* ShowBubbleSize
		**/
        ShowBubbleSize: boolean;

        /**
		* ShowValue
		**/
        ShowValue: boolean;

        /**
		* ShowPercentage
		**/
        ShowPercentage: boolean;

        /**
		* _Height
		**/
        readonly _Height: number;

        /**
		* FormulaR1C1Local
		**/
        FormulaR1C1Local: string;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* FormulaR1C1
		**/
        FormulaR1C1: string;

        /**
		* ShowRange
		**/
        ShowRange: boolean;

        /**
		* Height
		**/
        Height: number;

        /**
		* Width
		**/
        Width: number;

    }

    interface EtLegendKey {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(RHS?: any): void;

        /**
		* Border
		**/
        readonly Border: EtBorder;

        /**
		* Parent
		**/
        readonly Parent: any;

        ClearFormats(RHS?: any): void;

        /**
		* Left
		**/
        readonly Left: number;

        /**
		* InvertIfNegative
		**/
        InvertIfNegative: boolean;

        /**
		* Fill
		**/
        readonly Fill: Kso.KsoChartFillFormat;

        /**
		* Smooth
		**/
        Smooth: boolean;

        /**
		* MarkerBackgroundColor
		**/
        MarkerBackgroundColor: number;

        /**
		* MarkerBackgroundColorIndex
		**/
        MarkerBackgroundColorIndex: Kso.KsoXlColorIndex;

        /**
		* MarkerForegroundColor
		**/
        MarkerForegroundColor: number;

        /**
		* MarkerForegroundColorIndex
		**/
        MarkerForegroundColorIndex: Kso.KsoXlColorIndex;

        /**
		* MarkerSize
		**/
        MarkerSize: number;

        /**
		* MarkerStyle
		**/
        MarkerStyle: Kso.KsoXlMarkerStyle;

        /**
		* Width
		**/
        readonly Width: number;

        /**
		* PictureType
		**/
        PictureType: number;

        /**
		* PictureUnit2
		**/
        PictureUnit2: number;

        /**
		* PictureUnit
		**/
        PictureUnit: number;

        Select(RHS?: any): void;

        /**
		* Top
		**/
        readonly Top: number;

        /**
		* Height
		**/
        readonly Height: number;

        /**
		* Shadow
		**/
        Shadow: boolean;

        /**
		* Format
		**/
        readonly Format: EtChartFormat;

    }

    interface EtLegendEntry extends Kso.KsoLegendEntry {}

    interface EtLegendEntries extends Kso.KsoLegendEntries {}

    interface EtModuleView {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Sheet
		**/
        readonly Sheet: any;

    }

    interface EtDialogSheetView {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Sheet
		**/
        readonly Sheet: any;

    }

    interface EtConditionValue {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Value
		**/
        readonly Value: any;

        /**
		* Parent
		**/
        readonly Parent: any;

        Modify(newtype?: EtXlConditionValueTypes, newvalue?: any): void;

        /**
		* Type
		**/
        readonly Type: EtXlConditionValueTypes;

    }

    interface EtDataBarBorder {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Color
		**/
        readonly Color: any;

        /**
		* Type
		**/
        Type: EtXlDataBarBorderType;

    }

    interface EtIconSetCondition {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        SetLastPriority(): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        ModifyAppliesToRange(Range?: EtRange): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* StopIfTrue
		**/
        readonly StopIfTrue: boolean;

        /**
		* Priority
		**/
        Priority: number;

        /**
		* AppliesTo
		**/
        readonly AppliesTo: EtRange;

        /**
		* Type
		**/
        readonly Type: number;

        /**
		* ScopeType
		**/
        ScopeType: EtXlPivotConditionScope;

        /**
		* PTCondition
		**/
        readonly PTCondition: boolean;

        SetFirstPriority(): void;

        Delete(): void;

        /**
		* ReverseOrder
		**/
        ReverseOrder: boolean;

        /**
		* PercentileValues
		**/
        PercentileValues: boolean;

        /**
		* ShowIconOnly
		**/
        ShowIconOnly: boolean;

        /**
		* Formula
		**/
        Formula: string;

        /**
		* IconSet
		**/
        IconSet: any;

        /**
		* IconCriteria
		**/
        readonly IconCriteria: EtIconCriteria;

    }

    interface EtAboveAverage {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* CalcFor
		**/
        CalcFor: EtXlCalcFor;

        SetLastPriority(): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        ModifyAppliesToRange(Range?: EtRange): void;

        /**
		* Borders
		**/
        readonly Borders: EtBorders;

        /**
		* AboveBelow
		**/
        AboveBelow: EtXlAboveBelow;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* StopIfTrue
		**/
        StopIfTrue: boolean;

        /**
		* Priority
		**/
        Priority: number;

        /**
		* AppliesTo
		**/
        readonly AppliesTo: EtRange;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* Type
		**/
        readonly Type: number;

        /**
		* NumberFormat
		**/
        NumberFormat: any;

        SetFirstPriority(): void;

        Delete(): void;

        /**
		* ScopeType
		**/
        ScopeType: EtXlPivotConditionScope;

        /**
		* PTCondition
		**/
        readonly PTCondition: boolean;

        /**
		* NumStdDev
		**/
        NumStdDev: number;

    }

    interface EtUniqueValues {
        /**
		* Interior
		**/
        readonly Interior: EtInterior;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        SetLastPriority(): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        ModifyAppliesToRange(Range?: EtRange): void;

        /**
		* Borders
		**/
        readonly Borders: EtBorders;

        /**
		* DupeUnique
		**/
        DupeUnique: EtXlDupeUnique;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* StopIfTrue
		**/
        StopIfTrue: boolean;

        /**
		* Priority
		**/
        Priority: number;

        /**
		* AppliesTo
		**/
        readonly AppliesTo: EtRange;

        /**
		* Font
		**/
        readonly Font: EtFont;

        /**
		* Type
		**/
        readonly Type: number;

        /**
		* NumberFormat
		**/
        NumberFormat: any;

        SetFirstPriority(): void;

        Delete(): void;

        /**
		* ScopeType
		**/
        ScopeType: EtXlPivotConditionScope;

        /**
		* PTCondition
		**/
        readonly PTCondition: boolean;

    }

    interface EtColorStops {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        Item(Index?: any, RHS?: EtColorStop): void;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* Count
		**/
        readonly Count: number;

        Clear(): void;

        Add(Position?: number, RHS?: EtColorStop): void;

        _Default(Index?: any, RHS?: EtColorStop): void;

        /**
		* _NewEnum
		**/
        readonly _NewEnum: any;

    }

    interface EtColorStop {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        Delete(): void;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* TintAndShade
		**/
        TintAndShade: any;

        /**
		* Color
		**/
        Color: any;

        /**
		* ThemeColor
		**/
        ThemeColor: number;

        /**
		* Position
		**/
        Position: number;

    }

    interface EtLinearGradient {
        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* ColorStops
		**/
        readonly ColorStops: EtColorStops;

        /**
		* Degree
		**/
        Degree: number;

    }

    interface EtRectangularGradient {
        /**
		* RectangleTop
		**/
        RectangleTop: number;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Parent
		**/
        readonly Parent: any;

        /**
		* RectangleLeft
		**/
        RectangleLeft: number;

        /**
		* ColorStops
		**/
        readonly ColorStops: EtColorStops;

        /**
		* RectangleBottom
		**/
        RectangleBottom: number;

        /**
		* RectangleRight
		**/
        RectangleRight: number;

    }

    interface EtDummy {
        _ActiveSheetOrChart(): void;

        RGB(): void;

        AddNonVisibleSignature(SigProv?: any, RHS?: Kso.KsoSignature): void;

        DirectObject(): void;

        ChDir(): void;

        DoScript(): void;

        AddSignatureLine(SigProv?: any, RHS?: Kso.KsoSignature): void;

        RefreshDocument(): void;

        ThemeFontScheme(): void;

        /**
		* ShowSignaturesPane
		**/
        ShowSignaturesPane: boolean;

        ThemeColorScheme(): void;

        ThemeEffectScheme(): void;

        Load(): void;

    }

    interface EtFullSeriesCollection extends Kso.KsoFullSeriesCollection {}

    interface EtChartCategory {
        /**
		* IsFiltered
		**/
        IsFiltered: boolean;

        /**
		* Application
		**/
        readonly Application: EtApplication;

        /**
		* Creator
		**/
        readonly Creator: EtXlCreator;

        /**
		* Name
		**/
        readonly Name: string;

        /**
		* Parent
		**/
        readonly Parent: any;

    }

    interface EtCategoryCollection extends Kso.KsoCategoryCollection {}

    export enum EtXlDataSeriesType {
        xlAutoFill=4,
        xlChronological=3,
        xlGrowth=2,
        xlDataSeriesLinear=-4132,
    }

    export enum EtXlDataSeriesDate {
        xlMonth=3,
        xlDay=1,
        xlWeekday=2,
        xlYear=4,
    }

    export enum EtXlBackground {
        xlBackgroundAutomatic=-4105,
        xlBackgroundOpaque=3,
        xlBackgroundTransparent=2,
    }

    export enum EtConstants {
        xlSimple=-4154,
        xlOff=-4146,
        xlCenter=-4108,
        xlAll=-4104,
        xlAutomatic=-4105,
        xlCrissCross=16,
        xlColor3=9,
        xlColor2=8,
        xlColor1=7,
        xlSingle=2,
        xlChecker=9,
        xlGray75=-4126,
        xlCorner=2,
        xlGray8=18,
        xlBoth=1,
        xlShowPercent=3,
        xlNone=-4142,
        xlCross=4,
        xlCircle=8,
        xlWorksheetCell=3,
        xlDiamond=2,
        xlLightVertical=12,
        xlLeft=-4131,
        xlLow=-4134,
        xlDistributed=-4117,
        xlGrid=15,
        xlDoubleAccounting=5,
        xlFixedValue=1,
        xlFormats=-4122,
        xlChartTitles=18,
        xlGray16=17,
        xlDefaultAutoFormat=-1,
        xlMultiply=4,
        xlHigh=-4127,
        xlInside=2,
        xlJustify=-4130,
        xlGray50=-4125,
        xlSemiGray75=10,
        xlLightDown=13,
        xlEntireChart=20,
        xlLightHorizontal=11,
        xlRight=-4152,
        xlLightUp=14,
        xlManual=-4135,
        xlMaximum=2,
        xlNotes=-4144,
        xlMinusValues=3,
        xlModule=-4141,
        xlSolid=1,
        xl3DSurface=-4103,
        xlNextToAxis=4,
        xlOn=1,
        xlCombination=-4111,
        xlGeneral=1,
        xlPercent=2,
        xlPlus=9,
        xlWide=3,
        xlPlusValues=2,
        xlShowLabel=4,
        xlShowLabelAndPercent=5,
        xlShowValue=2,
        xlLocalFormat2=16,
        xlLocalFormat1=15,
        xlSingleAccounting=4,
        xlStError=4,
        xlSquare=1,
        xlStar=5,
        xlToolbarButton=2,
        xlTiled=1,
        xlTriangle=3,
        xlGray25=-4124,
        xlBottom=-4107,
        xlLotusHelp=2,
        xlTop=-4160,
        xl3DBar=-4099,
        xlBar=2,
        xlColumn=3,
        xlCustom=-4114,
        xlMinimum=4,
        xlContext=-5002,
        xlOpaque=3,
        xlTransparent=2,
        xlBidi=-5000,
        xlLatin=-5001,
        xlRTL=-5004,
        xlLTR=-5003,
        xlFullScript=1,
        xlPartialScript=2,
        xlMixedScript=3,
        xlMixedAuthorizedScript=4,
        xlVisualCursor=2,
        xlLogicalCursor=1,
        xlSystem=1,
        xlPartial=3,
        xlHindiNumerals=3,
        xlBidiCalendar=3,
        xlGregorian=2,
        xlInteger=2,
        xlComplete=4,
        xlScale=3,
        xlClosed=3,
        xlConstants=2,
        xlContents=2,
        xlBelow=1,
        xlCascade=7,
        xlCenterAcrossSelection=7,
        xlChart4=2,
        xlChartSeries=17,
        xlChartShort=6,
        xlClassic3=3,
        xlClassic2=2,
        xlClassic1=1,
        xlLastCell=11,
        xl3DEffects2=14,
        xl3DEffects1=13,
        xlFormula=5,
        xlAbove=0,
        xlAccounting1=4,
        xlAccounting2=5,
        xlAccounting3=6,
        xlAccounting4=17,
        xlAdd=2,
        xlDoubleOpen=4,
        xlDebugCodePane=13,
        xlDesktop=9,
        xlOutside=3,
        xlDirect=1,
        xlDivide=5,
        xlDoubleClosed=5,
        xlDoubleQuote=1,
        xlExcelMenus=1,
        xlStrict=2,
        xlExtended=3,
        xlFill=5,
        xlFirst=0,
        xlFloating=5,
        xlGridline=22,
        xlIcons=1,
        xlImmediatePane=12,
        xlLast=1,
        xlList1=10,
        xlSemiautomatic=2,
        xlList2=11,
        xlList3=12,
        xlLong=3,
        xlMacrosheetCell=7,
        xlMixed=2,
        xlNarrow=1,
        xlNoDocuments=3,
        xlOpen=2,
        xlReference=4,
        xlShort=1,
        xlSingleQuote=2,
        xlSubtract=3,
        xlTextBox=16,
        xlTitleBar=8,
        xlToolbar=1,
        xlVisible=12,
        xlWatchPane=11,
        xlWorkbookTab=6,
        xlWorksheet4=1,
        xlWorksheetShort=5,
        xlAllExceptBorders=7,
        xlLeftToRight=2,
        xlTopToBottom=1,
        xlVeryHidden=2,
        xlDrawingObject=14,
    }

    export enum EtXlCreator {
        xlCreatorCode=1480803660,
    }

    export enum EtXlPasteSpecialOperation {
        xlPasteSpecialOperationAdd=2,
        xlPasteSpecialOperationMultiply=4,
        xlPasteSpecialOperationDivide=5,
        xlPasteSpecialOperationNone=-4142,
        xlPasteSpecialOperationSubtract=3,
    }

    export enum EtXlDeleteShiftDirection {
        xlShiftToLeft=-4159,
        xlShiftUp=-4162,
    }

    export enum EtXlObjectSize {
        xlScreenSize=1,
        xlFitToPage=2,
        xlFullPage=3,
    }

    export enum EtXlChartGallery {
        xlBuiltIn=21,
        xlAnyGallery=23,
        xlUserDefined=22,
    }

    export enum EtXlLookFor {
        xlLookForBlanks=0,
        xlLookForErrors=1,
        xlLookForFormulas=2,
    }

    export enum EtXlMSApplication {
        xlMicrosoftAccess=4,
        xlMicrosoftFoxPro=5,
        xlMicrosoftMail=3,
        xlMicrosoftPowerPoint=2,
        xlMicrosoftSchedulePlus=7,
        xlMicrosoftProject=6,
        xlMicrosoftWord=1,
    }

    export enum EtXlLinkStatus {
        xlLinkStatusMissingSheet=2,
        xlLinkStatusOK=0,
        xlLinkStatusMissingFile=1,
        xlLinkStatusOld=3,
        xlLinkStatusSourceNotOpen=8,
        xlLinkStatusIndeterminate=5,
        xlLinkStatusSourceNotCalculated=4,
        xlLinkStatusInvalidName=7,
        xlLinkStatusNotStarted=6,
        xlLinkStatusSourceOpen=9,
        xlLinkStatusCopiedValues=10,
    }

    export enum EtXlSearchWithin {
        xlWithinSheet=1,
        xlWithinWorkbook=2,
    }

    export enum EtXlSortMethod {
        xlPinYin=1,
        xlStroke=2,
    }

    export enum EtXlWindowState {
        xlMaximized=-4137,
        xlNormal=-4143,
        xlMinimized=-4140,
    }

    export enum EtXlArrowHeadLength {
        xlArrowHeadLengthLong=3,
        xlArrowHeadLengthMedium=-4138,
        xlArrowHeadLengthShort=1,
    }

    export enum EtXlSummaryReportType {
        xlSummaryPivotTable=-4148,
        xlStandardSummary=1,
    }

    export enum EtXlCutCopyMode {
        xlCopy=1,
        xlCut=2,
    }

    export enum EtXlCalculation {
        xlCalculationManual=-4135,
        xlCalculationAutomatic=-4105,
        xlCalculationSemiautomatic=2,
    }

    export enum EtXlArabicModes {
        xlArabicNone=0,
        xlArabicBothStrict=3,
        xlArabicStrictAlefHamza=1,
        xlArabicStrictFinalYaa=2,
    }

    export enum EtXlLink {
        xlExcelLinks=1,
        xlOLELinks=2,
        xlSubscribers=6,
        xlPublishers=5,
    }

    export enum EtXlReferenceStyle {
        xlA1=1,
        xlR1C1=-4150,
    }

    export enum EtXlPasteType {
        xlPasteAll=-4104,
        xlPasteAllUsingSourceTheme=13,
        xlPasteAllMergingConditionalFormats=14,
        xlPasteAllExceptBorders=7,
        xlPasteFormulas=-4123,
        xlPasteValues=-4163,
        xlPasteFormats=-4122,
        xlPasteValidation=6,
        xlPasteComments=-4144,
        xlPasteColumnWidths=8,
        xlPasteFormulasAndNumberFormats=11,
        xlPasteValuesAndNumberFormats=12,
    }

    export enum EtXlChartPicturePlacement {
        xlFrontEnd=6,
        xlFrontSides=5,
        xlSides=1,
        xlEnd=2,
        xlEndSides=3,
        xlFront=4,
        xlAllFaces=7,
    }

    export enum EtXlDisplayDrawingObjects {
        xlHide=3,
        xlDisplayShapes=-4104,
        xlPlaceholders=2,
    }

    export enum EtXlCalculatedMemberType {
        xlCalculatedMember=0,
        xlCalculatedSet=1,
        xlCalculatedMeasure=2,
    }

    export enum EtXlPattern {
        xlPatternAutomatic=-4105,
        xlPatternChecker=9,
        xlPatternLightHorizontal=11,
        xlPatternGray8=18,
        xlPatternGray25=-4124,
        xlPatternGray50=-4125,
        xlPatternGray75=-4126,
        xlPatternCrissCross=16,
        xlPatternDown=-4121,
        xlPatternGray16=17,
        xlPatternGrid=15,
        xlPatternHorizontal=-4128,
        xlPatternLightDown=13,
        xlPatternLinearGradient=4000,
        xlPatternLightUp=14,
        xlPatternLightVertical=12,
        xlPatternNone=-4142,
        xlPatternSemiGray75=10,
        xlPatternSolid=1,
        xlPatternUp=-4162,
        xlPatternVertical=-4166,
        xlPatternRectangularGradient=4001,
    }

    export enum EtXlArrowHeadStyle {
        xlArrowHeadStyleDoubleOpen=4,
        xlArrowHeadStyleClosed=3,
        xlArrowHeadStyleDoubleClosed=5,
        xlArrowHeadStyleNone=-4142,
        xlArrowHeadStyleOpen=2,
    }

    export enum EtXlArrowHeadWidth {
        xlArrowHeadWidthMedium=-4138,
        xlArrowHeadWidthNarrow=1,
        xlArrowHeadWidthWide=3,
    }

    export enum EtXlPivotTableSourceType {
        xlScenario=4,
        xlConsolidation=3,
        xlDatabase=1,
        xlPivotTable=-4148,
        xlExternal=2,
    }

    export enum EtXlSaveAction {
        xlDoNotSaveChanges=2,
        xlSaveChanges=1,
    }

    export enum EtXlPivotFieldCalculation {
        xlRunningTotal=5,
        xlPercentOfRow=6,
        xlDifferenceFrom=2,
        xlPercentOfTotal=8,
        xlIndex=9,
        xlNoAdditionalCalculation=-4143,
        xlPercentDifferenceFrom=4,
        xlPercentOf=3,
        xlPercentOfColumn=7,
        xlPercentOfParentRow=10,
        xlPercentOfParentColumn=11,
        xlPercentOfParent=12,
        xlPercentRunningTotal=13,
        xlRankAscending=14,
        xlRankDecending=15,
    }

    export enum EtXlOrientation {
        xlDownward=-4170,
        xlHorizontal=-4128,
        xlUpward=-4171,
        xlVertical=-4166,
    }

    export enum EtXlIMEMode {
        xlIMEModeNoControl=0,
        xlIMEModeAlpha=8,
        xlIMEModeOn=1,
        xlIMEModeKatakana=5,
        xlIMEModeHiragana=4,
        xlIMEModeOff=2,
        xlIMEModeAlphaFull=7,
        xlIMEModeDisable=3,
        xlIMEModeKatakanaHalf=6,
        xlIMEModeHangulFull=9,
        xlIMEModeHangul=10,
    }

    export enum EtXlSlicerCacheType {
        xlTimeline=2,
        xlSlicer=1,
    }

    export enum EtXlEditionOptionsOption {
        xlManualUpdate=5,
        xlAutomaticUpdate=4,
        xlSendPublisher=2,
        xlSelect=3,
        xlCancel=1,
        xlChangeAttributes=6,
        xlOpenSource=3,
        xlUpdateSubscriber=2,
    }

    export enum EtXlBuiltInDialog {
        xlDialogNew=119,
        xlDialogUpdateLink=201,
        xlDialogSetPrintTitles=23,
        xlDialogOpen=1,
        xlDialogPublishAsWebPage=653,
        xlDialogPrinterSetup=9,
        xlDialogMove=262,
        xlDialogFileDelete=6,
        xlDialogFormulaGoto=63,
        xlDialogVbaMakeAddin=478,
        xlDialogOpenLinks=2,
        xlDialogGalleryArea=67,
        xlDialogSaveAs=5,
        xlDialogSaveWorkbook=145,
        xlDialogRowHeight=127,
        xlDialogPageSetup=7,
        xlDialogFormulaFind=64,
        xlDialogClear=52,
        xlDialogLabelProperties=436,
        xlDialogPromote=202,
        xlDialogWindowSize=13,
        xlDialogDeleteFormat=111,
        xlDialogWorkbookName=386,
        xlDialogEditDelete=54,
        xlDialogApplyNames=133,
        xlDialogArrangeAll=12,
        xlDialogGalleryLine=70,
        xlDialogPrint=8,
        xlDialogInsert=55,
        xlDialogWindowMove=14,
        xlDialogFormatSize=129,
        xlDialogActivate=103,
        xlDialogAlignment=43,
        xlDialogRun=17,
        xlDialogExtract=35,
        xlDialogFont=26,
        xlDialogStyle=44,
        xlDialogPivotTableWhatIfAnalysisSettings=1153,
        xlDialogSize=261,
        xlDialogMainChart=85,
        xlDialogCopyPicture=108,
        xlDialogRecommendedPivotTables=1258,
        xlDialogUnhide=94,
        xlDialogDisplay=27,
        xlDialogStandardFont=190,
        xlDialogProtectDocument=28,
        xlDialogGalleryPie=71,
        xlDialogCalculation=32,
        xlDialogEditionOptions=251,
        xlDialogShowDetail=204,
        xlDialogFormatNumber=42,
        xlDialogWorkbookOptions=284,
        xlDialogDataDelete=36,
        xlDialogSort=39,
        xlDialogDataSeries=40,
        xlDialogWorkspace=95,
        xlDialogTable=41,
        xlDialogSelectSpecial=132,
        xlDialogFormatFont=150,
        xlDialogFormatMove=128,
        xlDialogBorder=45,
        xlDialogFormatLegend=88,
        xlDialogCellProtection=46,
        xlDialogParse=91,
        xlDialogColumnWidth=47,
        xlDialogPasteSpecial=53,
        xlDialogPasteNames=58,
        xlDialogGalleryDoughnut=344,
        xlDialogDefineName=61,
        xlDialogAttachText=80,
        xlDialogGalleryColumn=69,
        xlDialogCreateNames=62,
        xlDialogGalleryBar=68,
        xlDialogGalleryScatter=72,
        xlDialogCombination=73,
        xlDialogGridlines=76,
        xlDialogOverlay=86,
        xlDialogAxes=78,
        xlDialogPatterns=84,
        xlDialogScale=87,
        xlDialogFormatText=89,
        xlDialogInsertPicture=342,
        xlDialogFormatOverlay=226,
        xlDialogFormulaReplace=130,
        xlDialogDeleteName=110,
        xlDialogReplaceFont=134,
        xlDialogSplit=137,
        xlDialogSlicerSettings=1179,
        xlDialogOutline=142,
        xlDialogCopyChart=147,
        xlDialogNote=154,
        xlDialogSetUpdateStatus=159,
        xlDialogColorPalette=161,
        xlDialogChangeLink=166,
        xlDialogAppMove=170,
        xlDialogGallery3dBar=272,
        xlDialogAppSize=171,
        xlDialogMainChartType=185,
        xlDialogOverlayChartType=186,
        xlDialogOpenMail=188,
        xlDialogSendMail=189,
        xlDialogConsolidate=191,
        xlDialogSortSpecial=192,
        xlDialogSeriesX=461,
        xlDialogGallery3dArea=193,
        xlDialogSeriesShape=504,
        xlDialogGallery3dColumn=194,
        xlDialogGallery3dLine=195,
        xlDialogFormatMain=225,
        xlDialogGallery3dPie=196,
        xlDialogView3d=197,
        xlDialogSetMDXEditor=1208,
        xlDialogGoalSeek=198,
        xlDialogWorkgroup=199,
        xlDialogSparklineInsertWinLoss=1135,
        xlDialogOptionsGeneral=356,
        xlDialogFillGroup=200,
        xlDialogWebOptionsFonts=687,
        xlDialogDemote=203,
        xlDialogObjectProtection=214,
        xlDialogObjectProperties=207,
        xlDialogSaveNewObject=208,
        xlDialogApplyStyle=212,
        xlDialogAssignToObject=213,
        xlDialogCreatePublisher=217,
        xlDialogSubscribeTo=218,
        xlDialogShowToolbar=220,
        xlDialogPrintPreview=222,
        xlDialogEditColor=223,
        xlDialogConditionalFormatting=583,
        xlDialogEditSeries=228,
        xlDialogDefineStyle=229,
        xlDialogGalleryRadar=249,
        xlDialogZoom=256,
        xlDialogRoutingSlip=336,
        xlDialogInsertObject=259,
        xlDialogWorkbookProtect=417,
        xlDialogChartWizard=288,
        xlDialogFormatAuto=269,
        xlDialogGallery3dSurface=273,
        xlDialogInsertNameLabel=496,
        xlDialogCustomizeToolbar=276,
        xlDialogWorkbookAdd=281,
        xlDialogWorkbookMove=282,
        xlDialogWorkbookCopy=283,
        xlDialogSaveWorkspace=285,
        xlDialogAssignToTool=293,
        xlDialogPlacement=300,
        xlDialogFillWorkgroup=301,
        xlDialogWorkbookNew=302,
        xlDialogScenarioCells=305,
        xlDialogScenarioAdd=307,
        xlDialogScenarioEdit=308,
        xlDialogScenarioSummary=311,
        xlDialogCreateRelationship=1272,
        xlDialogPivotTableWizard=312,
        xlDialogPropertyFields=754,
        xlDialogPivotFieldProperties=313,
        xlDialogOptionsCalculation=318,
        xlDialogOptionsEdit=319,
        xlDialogOptionsView=320,
        xlDialogAddinManager=321,
        xlDialogPivotSolveOrder=568,
        xlDialogMenuEditor=322,
        xlDialogAttachToolbars=323,
        xlDialogOptionsChart=325,
        xlDialogVbaInsertFile=328,
        xlDialogSparklineInsertLine=1133,
        xlDialogVbaProcedureDefinition=330,
        xlDialogSubtotalCreate=398,
        xlDialogMailLogon=339,
        xlDialogChartTrend=350,
        xlDialogWorkbookInsert=354,
        xlDialogOptionsTransition=355,
        xlDialogFilterAdvanced=370,
        xlDialogMailNextLetter=378,
        xlDialogDataLabel=379,
        xlDialogWebOptionsGeneral=683,
        xlDialogInsertTitle=380,
        xlDialogFontProperties=381,
        xlDialogMacroOptions=382,
        xlDialogWorkbookUnhide=384,
        xlDialogGalleryCustom=388,
        xlDialogAddChartAutoformat=390,
        xlDialogPermission=832,
        xlDialogFindFile=475,
        xlDialogChartAddData=392,
        xlDialogChartLocation=527,
        xlDialogTabOrder=394,
        xlDialogWorkbookTabSplit=415,
        xlDialogScrollbarProperties=420,
        _xlDialogPhonetic=538,
        xlDialogPivotShowPages=421,
        xlDialogTextToColumns=422,
        xlDialogFormatCharttype=423,
        xlDialogPivotFieldGroup=433,
        xlDialogPivotFieldUngroup=434,
        xlDialogCheckboxProperties=435,
        xlDialogSetManager=1109,
        xlDialogListboxProperties=437,
        xlDialogEditboxProperties=438,
        xlDialogOpenText=441,
        xlDialogSetTupleEditorOnColumns=1108,
        xlDialogPushbuttonProperties=445,
        xlDialogFilter=447,
        xlDialogFunctionWizard=450,
        xlDialogSaveCopyAs=456,
        xlDialogOptionsListsAdd=458,
        xlDialogManageRelationships=1271,
        xlDialogSeriesAxes=460,
        xlDialogSeriesY=462,
        xlDialogErrorbarY=464,
        xlDialogErrorbarX=463,
        xlDialogFormatChart=465,
        xlDialogWebOptionsPictures=685,
        xlDialogSeriesOrder=466,
        xlDialogMailEditMailer=470,
        xlDialogStandardWidth=472,
        xlDialogAutoCorrect=485,
        xlDialogScenarioMerge=473,
        xlDialogProperties=474,
        xlDialogSlicerPivotTableConnections=1184,
        xlDialogSummaryInfo=474,
        xlDialogActiveCellFont=476,
        xlDialogFileSharing=481,
        xlDialogCustomViews=493,
        xlDialogChartOptionsDataLabels=505,
        xlDialogNewName=978,
        xlDialogChartSourceData=540,
        xlDialogChartOptionsDataTable=506,
        xlDialogSetBackgroundPicture=509,
        xlDialogDataValidation=525,
        xlDialogChartType=526,
        _xlDialogChartSourceData=541,
        xlDialogSeriesOptions=557,
        xlDialogPivotTableOptions=567,
        xlDialogPivotCalculatedField=570,
        xlDialogPivotCalculatedItem=572,
        xlDialogInsertHyperlink=596,
        xlDialogWebOptionsEncoding=686,
        xlDialogProtectSharing=620,
        xlDialogOptionsME=647,
        xlDialogPhonetic=656,
        xlDialogNewWebQuery=667,
        xlDialogImportTextFile=666,
        xlDialogSparklineInsertColumn=1134,
        xlDialogExternalDataProperties=530,
        xlDialogWebOptionsFiles=684,
        xlDialogPivotClientServerSet=689,
        xlDialogSearch=731,
        xlDialogEvaluateFormula=709,
        xlDialogDataLabelMultiple=723,
        xlDialogChartOptionsDataLabelMultiple=724,
        xlDialogErrorChecking=732,
        xlDialogWebOptionsBrowsers=773,
        xlDialogCreateList=796,
        xlDialogMyPermission=834,
        xlDialogDocumentInspector=862,
        xlDialogNameManager=977,
        xlDialogSlicerCreation=1182,
        xlDialogPivotTableSlicerConnections=1183,
        xlDialogSetTupleEditorOnRows=1107,
    }

    export enum EtXlLineStyle {
        xlDash=-4115,
        xlContinuous=1,
        xlDashDot=4,
        xlDashDotDot=5,
        xlLineStyleNone=-4142,
        xlDouble=-4119,
        xlDot=-4118,
        xlSlantDashDot=13,
    }

    export enum EtXlMouseButton {
        xlNoButton=0,
        xlPrimaryButton=1,
        xlSecondaryButton=2,
    }

    export enum EtXlPivotFieldDataType {
        xlDate=2,
        xlNumber=-4145,
        xlText=-4158,
    }

    export enum EtXlPictureConvertorType {
        xlTIF=9,
        xlDRW=4,
        xlBMP=1,
        xlPIC=11,
        xlCGM=7,
        xlDXF=5,
        xlEPS=8,
        xlHGL=6,
        xlPCT=13,
        xlPCX=10,
        xlPLT=12,
        xlWMF=2,
        xlWPG=3,
    }

    export enum EtXlLayoutRowType {
        xlOutlineRow=2,
        xlCompactRow=0,
        xlTabularRow=1,
    }

    export enum EtXlConnectionType {
        xlConnectionTypeOLEDB=1,
        xlConnectionTypeWEB=5,
        xlConnectionTypeODBC=2,
        xlConnectionTypeMODEL=7,
        xlConnectionTypeXMLMAP=3,
        xlConnectionTypeWORKSHEET=8,
        xlConnectionTypeTEXT=4,
        xlConnectionTypeDATAFEED=6,
        xlConnectionTypeNOSOURCE=9,
    }

    export enum EtXlRangeValueDataType {
        xlRangeValueMSPersistXML=12,
        xlRangeValueDefault=10,
        xlRangeValueXMLSpreadsheet=11,
    }

    export enum EtXlListObjectSourceType {
        xlSrcExternal=0,
        xlSrcModel=4,
        xlSrcRange=1,
        xlSrcXml=2,
        xlSrcQuery=3,
    }

    export enum EtXlBordersIndex {
        xlEdgeRight=10,
        xlInsideHorizontal=12,
        xlEdgeBottom=9,
        xlInsideVertical=11,
        xlDiagonalDown=5,
        xlEdgeTop=8,
        xlDiagonalUp=6,
        xlEdgeLeft=7,
    }

    export enum EtXlConsolidationFunction {
        xlAverage=-4106,
        xlProduct=-4149,
        xlCountNums=-4113,
        xlCount=-4112,
        xlMax=-4136,
        xlMin=-4139,
        xlStDev=-4155,
        xlStDevP=-4156,
        xlSum=-4157,
        xlVar=-4164,
        xlVarP=-4165,
        xlUnknown=1000,
        xlDistinctCount=11,
    }

    export enum EtXlPivotCellType {
        xlPivotCellValue=0,
        xlPivotCellSubtotal=2,
        xlPivotCellCustomSubtotal=7,
        xlPivotCellPivotItem=1,
        xlPivotCellPivotField=5,
        xlPivotCellGrandTotal=3,
        xlPivotCellDataPivotField=8,
        xlPivotCellDataField=4,
        xlPivotCellPageFieldItem=6,
        xlPivotCellBlankCell=9,
    }

    export enum EtXlSummaryColumn {
        xlSummaryOnLeft=-4131,
        xlSummaryOnRight=-4152,
    }

    export enum EtXlCheckInVersionType {
        xlCheckInMajorVersion=1,
        xlCheckInMinorVersion=0,
        xlCheckInOverwriteVersion=2,
    }

    export enum EtXlInsertShiftDirection {
        xlShiftDown=-4121,
        xlShiftToRight=-4161,
    }

    export enum EtXlDirection {
        xlDown=-4121,
        xlToLeft=-4159,
        xlToRight=-4161,
        xlUp=-4162,
    }

    export enum EtXlFilterAction {
        xlFilterInPlace=1,
        xlFilterCopy=2,
    }

    export enum EtXlWindowType {
        xlChartInPlace=4,
        xlChartAsWindow=5,
        xlClipboard=3,
        xlWorkbook=1,
        xlInfo=-4129,
    }

    export enum EtXlCalculationInterruptKey {
        xlAnyKey=2,
        xlNoKey=0,
        xlEscKey=1,
    }

    export enum EtXlSheetType {
        xlChart=-4109,
        xlDialogSheet=-4116,
        xlExcel4IntlMacroSheet=4,
        xlExcel4MacroSheet=3,
        xlWorksheet=-4167,
    }

    export enum EtXlGradientFillType {
        xlGradientFillLinear=0,
        xlGradientFillPath=1,
    }

    export enum EtXlCopyPictureFormat {
        xlBitmap=2,
        xlPicture=-4147,
    }

    export enum EtXlLocationInTable {
        xlTableBody=8,
        xlPageHeader=2,
        xlPageItem=6,
        xlColumnHeader=-4110,
        xlDataItem=7,
        xlColumnItem=5,
        xlRowHeader=-4153,
        xlDataHeader=3,
        xlRowItem=4,
    }

    export enum EtXlPaperSize {
        xlPaperA4Small=10,
        xlPaperLedger=4,
        xlPaper10x14=16,
        xlPaper11x17=17,
        xlPaperStatement=6,
        xlPaperA3=8,
        xlPaperLegal=5,
        xlPaperEsheet=26,
        xlPaperDsheet=25,
        xlPaperCsheet=24,
        xlPaperA4=9,
        xlPaperB4=12,
        xlPaperA5=11,
        xlPaperB5=13,
        xlPaperEnvelope14=23,
        xlPaperEnvelope12=22,
        xlPaperEnvelope11=21,
        xlPaperEnvelope10=20,
        xlPaperTabloid=3,
        xlPaperEnvelope9=19,
        xlPaperEnvelopeB6=35,
        xlPaperEnvelopeB5=34,
        xlPaperEnvelopeB4=33,
        xlPaperEnvelopeC65=32,
        xlPaperEnvelopeC6=31,
        xlPaperEnvelopeC5=28,
        xlPaperEnvelopeC4=30,
        xlPaperEnvelopeC3=29,
        xlPaperEnvelopeDL=27,
        xlPaperEnvelopeItaly=36,
        xlPaperEnvelopeMonarch=37,
        xlPaperQuarto=15,
        xlPaperEnvelopePersonal=38,
        xlPaperExecutive=7,
        xlPaperFanfoldLegalGerman=41,
        xlPaperFanfoldStdGerman=40,
        xlPaperFanfoldUS=39,
        xlPaperFolio=14,
        xlPaperLetter=1,
        xlPaperLetterSmall=2,
        xlPaperNote=18,
        xlPaperUser=256,
    }

    export enum EtXlFindLookIn {
        xlFormulas=-4123,
        xlComments=-4144,
        xlValues=-4163,
    }

    export enum EtXlFillWith {
        xlFillWithAll=-4104,
        xlFillWithContents=2,
        xlFillWithFormats=-4122,
    }

    export enum EtXlOrder {
        xlDownThenOver=1,
        xlOverThenDown=2,
    }

    export enum EtXlYesNoGuess {
        xlNo=2,
        xlGuess=0,
        xlYes=1,
    }

    export enum EtXlLinkType {
        xlLinkTypeExcelLinks=1,
        xlLinkTypeOLELinks=2,
    }

    export enum EtXlApplyNamesOrder {
        xlColumnThenRow=2,
        xlRowThenColumn=1,
    }

    export enum EtXlPageBreak {
        xlPageBreakAutomatic=-4105,
        xlPageBreakManual=-4135,
        xlPageBreakNone=-4142,
    }

    export enum EtXlEnableCancelKey {
        xlDisabled=0,
        xlErrorHandler=2,
        xlInterrupt=1,
    }

    export enum EtXlOLEType {
        xlOLEControl=2,
        xlOLEEmbed=1,
        xlOLELink=0,
    }

    export enum EtXlPageOrientation {
        xlLandscape=2,
        xlPortrait=1,
    }

    export enum EtXlAutoFillType {
        xlFillCopy=1,
        xlFillDefault=0,
        xlFillMonths=7,
        xlFillValues=4,
        xlFillWeekdays=6,
        xlFillDays=5,
        xlFillFormats=3,
        xlFillSeries=2,
        xlFillYears=8,
        xlGrowthTrend=10,
        xlLinearTrend=9,
        xlFlashFill=11,
    }

    export enum EtXlLinkInfo {
        xlEditionDate=2,
        xlUpdateState=1,
        xlLinkInfoStatus=3,
    }

    export enum EtXlCommandUnderlines {
        xlCommandUnderlinesAutomatic=-4105,
        xlCommandUnderlinesOff=-4146,
        xlCommandUnderlinesOn=1,
    }

    export enum EtXlOLEVerb {
        xlVerbOpen=2,
        xlVerbPrimary=1,
    }

    export enum EtXlFileAccess {
        xlReadWrite=2,
        xlReadOnly=3,
    }

    export enum EtXlEditionType {
        xlPublisher=1,
        xlSubscriber=2,
    }

    export enum EtXlLookAt {
        xlWhole=1,
        xlPart=2,
    }

    export enum EtXlMailSystem {
        xlMAPI=1,
        xlNoMailSystem=0,
        xlPowerTalk=2,
    }

    export enum EtXlLinkInfoType {
        xlLinkInfoSubscribers=6,
        xlLinkInfoOLELinks=2,
        xlLinkInfoPublishers=5,
    }

    export enum EtXlPrintErrors {
        xlPrintErrorsDisplayed=0,
        xlPrintErrorsDash=2,
        xlPrintErrorsBlank=1,
        xlPrintErrorsNA=3,
    }

    export enum EtXlCVError {
        xlErrNull=2000,
        xlErrDiv0=2007,
        xlErrValue=2015,
        xlErrNA=2042,
        xlErrName=2029,
        xlErrRef=2023,
        xlErrNum=2036,
    }

    export enum EtXlTotalsCalculation {
        xlTotalsCalculationNone=0,
        xlTotalsCalculationSum=1,
        xlTotalsCalculationMin=5,
        xlTotalsCalculationMax=6,
        xlTotalsCalculationVar=8,
        xlTotalsCalculationStdDev=7,
        xlTotalsCalculationAverage=2,
        xlTotalsCalculationCount=3,
        xlTotalsCalculationCountNums=4,
        xlTotalsCalculationCustom=9,
    }

    export enum EtXlEditionFormat {
        xlBIFF=2,
        xlPICT=1,
        xlRTF=4,
        xlVALU=8,
    }

    export enum EtXlSaveConflictResolution {
        xlLocalSessionChanges=2,
        xlOtherSessionChanges=3,
        xlUserResolution=1,
    }

    export enum EtXlCellType {
        xlCellTypeVisible=12,
        xlCellTypeBlanks=4,
        xlCellTypeAllValidation=-4174,
        xlCellTypeAllFormatConditions=-4172,
        xlCellTypeConstants=2,
        xlCellTypeSameFormatConditions=-4173,
        xlCellTypeFormulas=-4123,
        xlCellTypeLastCell=11,
        xlCellTypeComments=-4144,
        xlCellTypeSameValidation=-4175,
    }

    export enum EtXlTextQualifier {
        xlTextQualifierSingleQuote=2,
        xlTextQualifierDoubleQuote=1,
        xlTextQualifierNone=-4142,
    }

    export enum EtXlArrangeStyle {
        xlArrangeStyleCascade=7,
        xlArrangeStyleHorizontal=-4128,
        xlArrangeStyleTiled=1,
        xlArrangeStyleVertical=-4166,
    }

    export enum EtXlMousePointer {
        xlIBeam=3,
        xlDefault=-4143,
        xlWait=2,
        xlNorthwestArrow=1,
    }

    export enum EtXlQueryType {
        xlODBCQuery=1,
        xlDAORecordset=2,
        xlWebQuery=4,
        xlOLEDBQuery=5,
        xlADORecordset=7,
        xlTextImport=6,
    }

    export enum EtXlAutoFilterOperator {
        xlFilterValues=7,
        xlFilterNoIcon=14,
        xlAnd=1,
        xlBottom10Items=4,
        xlFilterCellColor=8,
        xlBottom10Percent=6,
        xlFilterFontColor=9,
        xlOr=2,
        xlTop10Items=3,
        xlTop10Percent=5,
        xlFilterIcon=10,
        xlFilterDynamic=11,
        xlFilterNoFill=12,
        xlFilterAutomaticFontColor=13,
    }

    export enum EtXlClipboardFormat {
        xlClipboardFormatBitmap=9,
        xlClipboardFormatBIFF12=63,
        xlClipboardFormatBIFF4=30,
        xlClipboardFormatPICT=2,
        xlClipboardFormatObjectDesc=31,
        xlClipboardFormatDIF=4,
        xlClipboardFormatBIFF=8,
        xlClipboardFormatCGM=13,
        xlClipboardFormatBinary=15,
        xlClipboardFormatEmbeddedObject=21,
        xlClipboardFormatBIFF2=18,
        xlClipboardFormatDspText=12,
        xlClipboardFormatBIFF3=20,
        xlClipboardFormatCSV=5,
        xlClipboardFormatSYLK=6,
        xlClipboardFormatEmbedSource=22,
        xlClipboardFormatLink=11,
        xlClipboardFormatTable=16,
        xlClipboardFormatLinkSource=23,
        xlClipboardFormatLinkSourceDesc=32,
        xlClipboardFormatMovie=24,
        xlClipboardFormatNative=14,
        xlClipboardFormatStandardFont=28,
        xlClipboardFormatPrintPICT=3,
        xlClipboardFormatObjectLink=19,
        xlClipboardFormatOwnerLink=17,
        xlClipboardFormatRTF=7,
        xlClipboardFormatText=0,
        xlClipboardFormatScreenPICT=29,
        xlClipboardFormatStandardScale=27,
        xlClipboardFormatToolFace=25,
        xlClipboardFormatToolFacePICT=26,
        xlClipboardFormatVALU=1,
        xlClipboardFormatWK1=10,
    }

    export enum EtXlPivotConditionScope {
        xlDataFieldScope=2,
        xlSelectionScope=0,
        xlFieldsScope=1,
    }

    export enum EtXlFileFormat {
        xlWJ3=40,
        xlAddIn=18,
        xlCSV=6,
        xlTemplate8=17,
        xlOpenXMLTemplateMacroEnabled=53,
        xlCSVMac=22,
        xlDIF=9,
        xlCSVMSDOS=24,
        xlDBF3=8,
        xlOpenDocumentSpreadsheet=60,
        xlCurrentPlatformText=-4158,
        xlDBF4=11,
        xlAddIn8=18,
        xlSYLK=2,
        xlCSVWindows=23,
        xlDBF2=7,
        xlExcel8=56,
        xlWJ3FJ3=41,
        xlExcel7=39,
        xlExcel5=39,
        xlExcel4=33,
        xlExcel3=29,
        xlExcel2=16,
        xlExcel2FarEast=27,
        xlExcel9795=43,
        xlExcel4Workbook=35,
        xlIntlAddIn=26,
        xlOpenXMLAddIn=55,
        xlIntlMacro=25,
        xlTextMac=19,
        xlWorkbookNormal=-4143,
        xlTemplate=17,
        xlTextMSDOS=21,
        xlXMLSpreadsheet=46,
        xlTextPrinter=36,
        xlTextWindows=20,
        xlWK1FMT=30,
        xlWJ2WD1=14,
        xlWK1=5,
        xlWK1ALL=31,
        xlWK3=15,
        xlWK4=38,
        xlWK3FM3=32,
        xlWKS=4,
        xlWorks2FarEast=28,
        xlWQ1=34,
        xlUnicodeText=42,
        xlHtml=44,
        xlWebArchive=45,
        xlWorkbookDefault=51,
        xlExcel12=50,
        xlOpenXMLWorkbook=51,
        xlOpenXMLWorkbookMacroEnabled=52,
        xlOpenXMLTemplate=54,
        xlOpenXMLStrictWorkbook=61,
    }

    export enum EtXlApplicationInternational {
        xl24HourClock=33,
        xl4DigitYears=43,
        xlColumnSeparator=14,
        xlAlternateArraySeparator=16,
        xlUpperCaseColumnLetter=7,
        xlGeneralFormatName=26,
        xlCurrencyDigits=27,
        xlCurrencyCode=25,
        xlCurrencyNegative=28,
        xlCountryCode=1,
        xlRowSeparator=15,
        xlLowerCaseColumnLetter=9,
        xlCountrySetting=2,
        xlListSeparator=5,
        xlCurrencyBefore=37,
        xlNonEnglishFunctions=34,
        xlDecimalSeparator=3,
        xlCurrencyLeadingZeros=40,
        xlMonthNameChars=30,
        xlCurrencyMinusSign=38,
        xlCurrencySpaceBefore=36,
        xlCurrencyTrailingZeros=39,
        xlHourCode=22,
        xlDateOrder=32,
        xlDateSeparator=17,
        xlMonthCode=20,
        xlDayCode=21,
        xlDayLeadingZero=42,
        xlLeftBrace=12,
        xlLeftBracket=10,
        xlLowerCaseRowLetter=8,
        xlThousandsSeparator=4,
        xlMDY=44,
        xlMetric=35,
        xlMinuteCode=23,
        xlMonthLeadingZero=41,
        xlTimeLeadingZero=45,
        xlNoncurrencyDigits=29,
        xlRightBrace=13,
        xlTimeSeparator=18,
        xlRightBracket=11,
        xlSecondCode=24,
        xlUpperCaseRowLetter=6,
        xlWeekdayNameChars=31,
        xlYearCode=19,
    }

    export enum EtXlPageBreakExtent {
        xlPageBreakFull=1,
        xlPageBreakPartial=2,
    }

    export enum EtXlCellInsertionMode {
        xlOverwriteCells=0,
        xlInsertDeleteCells=1,
        xlInsertEntireRows=2,
    }

    export enum EtXlFormulaLabel {
        xlNoLabels=-4142,
        xlRowLabels=1,
        xlColumnLabels=2,
        xlMixedLabels=3,
    }

    export enum EtXlPivotFormatType {
        xlReport9=8,
        xlReport10=9,
        xlReport1=0,
        xlReport2=1,
        xlReport3=2,
        xlReport4=3,
        xlReport5=4,
        xlReport6=5,
        xlReport7=6,
        xlReport8=7,
        xlTable9=18,
        xlTable8=17,
        xlTable7=16,
        xlTable6=15,
        xlTable5=14,
        xlTable4=13,
        xlTable3=12,
        xlTable2=11,
        xlTable1=10,
        xlTable10=19,
        xlPTClassic=20,
        xlPTNone=21,
    }

    export enum EtXlHighlightChangesTime {
        xlSinceMyLastSave=1,
        xlAllChanges=2,
        xlNotYetReviewed=3,
    }

    export enum EtXlContainsOperator {
        xlBeginsWith=2,
        xlContains=0,
        xlDoesNotContain=1,
        xlEndsWith=3,
    }

    export enum EtXlCommentDisplayMode {
        xlNoIndicator=0,
        xlCommentIndicatorOnly=-1,
        xlCommentAndIndicator=1,
    }

    export enum EtXlFormatConditionType {
        xlUniqueValues=8,
        xlColorScale=3,
        xlCellValue=1,
        xlBlanksCondition=10,
        xlExpression=2,
        xlDatabar=4,
        xlTop10=5,
        xlTextString=9,
        xlIconSets=6,
        xlTimePeriod=11,
        xlAboveAverageCondition=12,
        xlNoBlanksCondition=13,
        xlErrorsCondition=16,
        xlNoErrorsCondition=17,
    }

    export enum EtXlFormatConditionOperator {
        xlEqual=3,
        xlBetween=1,
        xlNotBetween=2,
        xlGreaterEqual=7,
        xlLess=6,
        xlNotEqual=4,
        xlGreater=5,
        xlLessEqual=8,
    }

    export enum EtXlEnableSelection {
        xlNoSelection=-4142,
        xlNoRestrictions=0,
        xlUnlockedCells=1,
    }

    export enum EtXlDVType {
        xlValidateCustom=7,
        xlValidateList=3,
        xlValidateInputOnly=0,
        xlValidateWholeNumber=1,
        xlValidateDate=4,
        xlValidateDecimal=2,
        xlValidateTextLength=6,
        xlValidateTime=5,
    }

    export enum EtXlDVAlertStyle {
        xlValidAlertStop=1,
        xlValidAlertWarning=2,
        xlValidAlertInformation=3,
    }

    export enum EtXlIconSet {
        xl3ArrowsGray=2,
        xlCustomSet=-1,
        xl3TrafficLights2=5,
        xl3Arrows=1,
        xl3Symbols2=8,
        xl3Symbols=7,
        xl3Flags=3,
        xl3TrafficLights1=4,
        xl3Signs=6,
        xl4Arrows=9,
        xl4ArrowsGray=10,
        xl4RedToBlack=11,
        xl4CRV=12,
        xl4TrafficLights=13,
        xl5Arrows=14,
        xl5ArrowsGray=15,
        xl5CRV=16,
        xl5Boxes=20,
        xl5Quarters=17,
        xl3Stars=18,
        xl3Triangles=19,
    }

    export enum EtXlChartLocation {
        xlLocationAsNewSheet=1,
        xlLocationAsObject=2,
        xlLocationAutomatic=3,
    }

    export enum EtXlPhoneticCharacterType {
        xlKatakanaHalf=0,
        xlKatakana=1,
        xlHiragana=2,
        xlNoConversion=3,
    }

    export enum EtXlPhoneticAlignment {
        xlPhoneticAlignNoControl=0,
        xlPhoneticAlignLeft=1,
        xlPhoneticAlignCenter=2,
        xlPhoneticAlignDistributed=3,
    }

    export enum EtXlDataBarFillType {
        xlDataBarFillSolid=0,
        xlDataBarFillGradient=1,
    }

    export enum EtXlPictureAppearance {
        xlPrinter=2,
        xlScreen=1,
    }

    export enum EtXlPlacement {
        xlFreeFloating=3,
        xlMoveAndSize=1,
        xlMove=2,
    }

    export enum EtXlPlatform {
        xlWindows=2,
        xlMacintosh=1,
        xlMSDOS=3,
    }

    export enum EtXlPrintLocation {
        xlPrintSheetEnd=1,
        xlPrintNoComments=-4142,
        xlPrintInPlace=16,
    }

    export enum EtXlPriority {
        xlPriorityHigh=-4127,
        xlPriorityLow=-4134,
        xlPriorityNormal=-4143,
    }

    export enum EtXlPTSelectionMode {
        xlLabelOnly=1,
        xlDataAndLabel=0,
        xlDataOnly=2,
        xlOrigin=3,
        xlButton=15,
        xlBlanks=4,
        xlFirstRow=256,
    }

    export enum EtXlRangeAutoFormat {
        xlRangeAutoFormatList3=12,
        xlRangeAutoFormat3DEffects1=13,
        xlRangeAutoFormat3DEffects2=14,
        xlRangeAutoFormatAccounting1=4,
        xlRangeAutoFormatAccounting2=5,
        xlRangeAutoFormatAccounting3=6,
        xlRangeAutoFormatAccounting4=17,
        xlRangeAutoFormatClassic1=1,
        xlRangeAutoFormatClassic2=2,
        xlRangeAutoFormatClassic3=3,
        xlRangeAutoFormatColor3=9,
        xlRangeAutoFormatColor2=8,
        xlRangeAutoFormatColor1=7,
        xlRangeAutoFormatList1=10,
        xlRangeAutoFormatList2=11,
        xlRangeAutoFormatLocalFormat4=20,
        xlRangeAutoFormatLocalFormat3=19,
        xlRangeAutoFormatLocalFormat2=16,
        xlRangeAutoFormatLocalFormat1=15,
        xlRangeAutoFormatReport9=29,
        xlRangeAutoFormatReport8=28,
        xlRangeAutoFormatReport7=27,
        xlRangeAutoFormatReport6=26,
        xlRangeAutoFormatReport5=25,
        xlRangeAutoFormatReport4=24,
        xlRangeAutoFormatReport3=23,
        xlRangeAutoFormatReport2=22,
        xlRangeAutoFormatReport1=21,
        xlRangeAutoFormatReport10=30,
        xlRangeAutoFormatClassicPivotTable=31,
        xlRangeAutoFormatTable10=41,
        xlRangeAutoFormatTable9=40,
        xlRangeAutoFormatTable8=39,
        xlRangeAutoFormatTable7=38,
        xlRangeAutoFormatTable6=37,
        xlRangeAutoFormatTable5=36,
        xlRangeAutoFormatTable4=35,
        xlRangeAutoFormatTable3=34,
        xlRangeAutoFormatTable2=33,
        xlRangeAutoFormatTable1=32,
        xlRangeAutoFormatPTNone=42,
        xlRangeAutoFormatNone=-4142,
        xlRangeAutoFormatSimple=-4154,
    }

    export enum EtXlReferenceType {
        xlAbsolute=1,
        xlAbsRowRelColumn=2,
        xlRelative=4,
        xlRelRowAbsColumn=3,
    }

    export enum EtXlModelChangeSource {
        xlChangeByExcel=0,
        xlChangeByPowerPivotAddIn=1,
    }

    export enum EtXlLayoutFormType {
        xlTabular=0,
        xlOutline=1,
    }

    export enum EtXlRoutingSlipDelivery {
        xlAllAtOnce=2,
        xlOneAfterAnother=1,
    }

    export enum EtXlImportDataAs {
        xlQueryTable=0,
        xlPivotTableReport=1,
        xlTable=2,
    }

    export enum EtXlRoutingSlipStatus {
        xlNotYetRouted=0,
        xlRoutingComplete=2,
        xlRoutingInProgress=1,
    }

    export enum EtXlRunAutoMacro {
        xlAutoActivate=3,
        xlAutoClose=2,
        xlAutoDeactivate=4,
        xlAutoOpen=1,
    }

    export enum EtXlSaveAsAccessMode {
        xlNoChange=1,
        xlExclusive=3,
        xlShared=2,
    }

    export enum EtXlSparklineRowCol {
        xlSparklineNonSquare=0,
        xlSparklineRowsSquare=1,
        xlSparklineColumnsSquare=2,
    }

    export enum EtXlSearchDirection {
        xlNext=1,
        xlPrevious=2,
    }

    export enum EtXlSearchOrder {
        xlByColumns=2,
        xlByRows=1,
    }

    export enum EtXlSheetVisibility {
        xlSheetVisible=-1,
        xlSheetHidden=0,
        xlSheetVeryHidden=2,
    }

    export enum EtXlSortMethodOld {
        xlSyllabary=1,
        xlCodePage=2,
    }

    export enum EtXlSortOrder {
        xlDescending=2,
        xlAscending=1,
    }

    export enum EtXlAllocationValue {
        xlAllocateValue=1,
        xlAllocateIncrement=2,
    }

    export enum EtXlSortOrientation {
        xlSortRows=2,
        xlSortColumns=1,
    }

    export enum EtXlSortType {
        xlSortLabels=2,
        xlSortValues=1,
    }

    export enum EtXlSpecialCellsValue {
        xlLogical=4,
        xlErrors=16,
        xlNumbers=1,
        xlTextValues=2,
    }

    export enum EtXlSubscribeToFormat {
        xlSubscribeToPicture=-4147,
        xlSubscribeToText=-4158,
    }

    export enum EtXlSortDataOption {
        xlSortNormal=0,
        xlSortTextAsNumbers=1,
    }

    export enum EtXlSummaryRow {
        xlSummaryBelow=1,
        xlSummaryAbove=0,
    }

    export enum EtXlTabPosition {
        xlTabPositionFirst=0,
        xlTabPositionLast=1,
    }

    export enum EtXlTextParsingType {
        xlFixedWidth=2,
        xlDelimited=1,
    }

    export enum EtXlWBATemplate {
        xlWBATChart=-4109,
        xlWBATExcel4IntlMacroSheet=4,
        xlWBATExcel4MacroSheet=3,
        xlWBATWorksheet=-4167,
    }

    export enum EtXlWindowView {
        xlNormalView=1,
        xlPageBreakPreview=2,
        xlPageLayoutView=3,
    }

    export enum EtXlXLMMacroType {
        xlCommand=2,
        xlFunction=1,
        xlNotXLM=3,
    }

    export enum EtXlToolbarProtection {
        xlNoDockingChanges=3,
        xlNoButtonChanges=1,
        xlToolbarProtectionNone=-4143,
        xlNoChanges=4,
        xlNoShapeChanges=2,
    }

    export enum EtXlColumnDataType {
        xlDMYFormat=4,
        xlGeneralFormat=1,
        xlTextFormat=2,
        xlYMDFormat=5,
        xlYDMFormat=8,
        xlMDYFormat=3,
        xlMYDFormat=6,
        xlDYMFormat=7,
        xlSkipColumn=9,
        xlEMDFormat=10,
    }

    export enum EtXlParameterType {
        xlPrompt=0,
        xlConstant=1,
        xlRange=2,
    }

    export enum EtXlParameterDataType {
        xlParamTypeInteger=4,
        xlParamTypeChar=1,
        xlParamTypeUnknown=0,
        xlParamTypeBit=-7,
        xlParamTypeNumeric=2,
        xlParamTypeTinyInt=-6,
        xlParamTypeDecimal=3,
        xlParamTypeDouble=8,
        xlParamTypeSmallInt=5,
        xlParamTypeFloat=6,
        xlParamTypeReal=7,
        xlParamTypeVarChar=12,
        xlParamTypeDate=9,
        xlParamTypeTime=10,
        xlParamTypeTimestamp=11,
        xlParamTypeLongVarChar=-1,
        xlParamTypeBinary=-2,
        xlParamTypeVarBinary=-3,
        xlParamTypeLongVarBinary=-4,
        xlParamTypeBigInt=-5,
        xlParamTypeWChar=-8,
    }

    export enum EtXlFormControl {
        xlCheckBox=1,
        xlButtonControl=0,
        xlDropDown=2,
        xlEditBox=3,
        xlListBox=6,
        xlLabel=5,
        xlGroupBox=4,
        xlOptionButton=7,
        xlScrollBar=8,
        xlSpinner=9,
    }

    export enum EtXlSourceType {
        xlSourcePivotTable=6,
        xlSourceWorkbook=0,
        xlSourceSheet=1,
        xlSourceChart=5,
        xlSourcePrintArea=2,
        xlSourceAutoFilter=3,
        xlSourceRange=4,
        xlSourceQuery=7,
    }

    export enum EtXlHtmlType {
        xlHtmlCalc=1,
        xlHtmlStatic=0,
        xlHtmlList=2,
        xlHtmlChart=3,
    }

    export enum EtXlCmdType {
        xlCmdDefault=4,
        xlCmdCube=1,
        xlCmdDAX=8,
        xlCmdExcel=7,
        xlCmdSql=2,
        xlCmdList=5,
        xlCmdTable=3,
        xlCmdTableCollection=6,
    }

    export enum EtXlWebSelectionType {
        xlEntirePage=1,
        xlAllTables=2,
        xlSpecifiedTables=3,
    }

    export enum EtXlCubeFieldType {
        xlHierarchy=1,
        xlMeasure=2,
        xlSet=3,
    }

    export enum EtXlWebFormatting {
        xlWebFormattingAll=1,
        xlWebFormattingRTF=2,
        xlWebFormattingNone=3,
    }

    export enum EtXlSmartTagDisplayMode {
        xlIndicatorAndButton=0,
        xlButtonOnly=2,
        xlDisplayNone=1,
    }

    export enum EtXlSubtototalLocationType {
        xlAtTop=1,
        xlAtBottom=2,
    }

    export enum EtXlPivotTableVersionList {
        xlPivotTableVersion2000=0,
        xlPivotTableVersion15=5,
        xlPivotTableVersion14=4,
        xlPivotTableVersion12=3,
        xlPivotTableVersion11=2,
        xlPivotTableVersion10=1,
        xlPivotTableVersionCurrent=-1,
    }

    export enum EtXlPivotTableMissingItems {
        xlMissingItemsDefault=-1,
        xlMissingItemsNone=0,
        xlMissingItemsMax2=1048576,
        xlMissingItemsMax=32500,
    }

    export enum EtXlCalculationState {
        xlDone=0,
        xlCalculating=1,
        xlPending=2,
    }

    export enum EtXlUpdateLinks {
        xlUpdateLinksUserSetting=1,
        xlUpdateLinksNever=2,
        xlUpdateLinksAlways=3,
    }

    export enum EtXlCorruptLoad {
        xlNormalLoad=0,
        xlRepairFile=1,
        xlExtractData=2,
    }

    export enum EtXlRobustConnect {
        xlAsRequired=0,
        xlAlways=1,
        xlNever=2,
    }

    export enum EtXlErrorChecks {
        xlEvaluateToError=1,
        xlListDataValidation=8,
        xlTextDate=2,
        xlInconsistentListFormula=9,
        xlNumberAsText=3,
        xlInconsistentFormula=4,
        xlOmittedCells=5,
        xlEmptyCellReferences=7,
        xlUnlockedFormulaCells=6,
    }

    export enum EtXlDataLabelSeparator {
        xlDataLabelSeparatorDefault=1,
    }

    export enum EtXlSpeakDirection {
        xlSpeakByRows=0,
        xlSpeakByColumns=1,
    }

    export enum EtXlTableStyleElementType {
        xlTimelineTimeLevel=37,
        xlSlicerUnselectedItemWithData=28,
        xlColumnSubheading3=22,
        xlWholeTable=0,
        xlLastColumn=4,
        xlColumnStripe2=8,
        xlHeaderRow=1,
        xlTotalRow=2,
        xlRowStripe1=5,
        xlRowStripe2=6,
        xlLastHeaderCell=10,
        xlGrandTotalRow=2,
        xlFirstColumn=3,
        xlGrandTotalColumn=4,
        xlColumnStripe1=7,
        xlLastTotalCell=12,
        xlFirstHeaderCell=9,
        xlFirstTotalCell=11,
        xlSubtotalColumn3=15,
        xlSubtotalColumn2=14,
        xlSubtotalColumn1=13,
        xlSubtotalRow3=18,
        xlSubtotalRow2=17,
        xlSubtotalRow1=16,
        xlRowSubheading3=25,
        xlRowSubheading2=24,
        xlRowSubheading1=23,
        xlBlankRow=19,
        xlColumnSubheading1=20,
        xlColumnSubheading2=21,
        xlPageFieldLabels=26,
        xlPageFieldValues=27,
        xlSlicerUnselectedItemWithNoData=29,
        xlSlicerSelectedItemWithData=30,
        xlSlicerHoveredUnselectedItemWithData=32,
        xlSlicerSelectedItemWithNoData=31,
        xlSlicerHoveredSelectedItemWithData=33,
        xlSlicerHoveredUnselectedItemWithNoData=34,
        xlSlicerHoveredSelectedItemWithNoData=35,
        xlTimelineSelectionLabel=36,
        xlTimelinePeriodLabels2=39,
        xlTimelinePeriodLabels1=38,
        xlTimelineSelectedTimeBlock=40,
        xlTimelineUnselectedTimeBlock=41,
        xlTimelineSelectedTimeBlockSpace=42,
    }

    export enum EtXlInsertFormatOrigin {
        xlFormatFromLeftOrAbove=0,
        xlFormatFromRightOrBelow=1,
    }

    export enum EtXlHebrewModes {
        xlHebrewFullScript=0,
        xlHebrewPartialScript=1,
        xlHebrewMixedScript=2,
        xlHebrewMixedAuthorizedScript=3,
    }

    export enum EtXlTextVisualLayoutType {
        xlTextVisualRTL=2,
        xlTextVisualLTR=1,
    }

    export enum EtXlListDataType {
        xlListDataTypeMultiLineText=2,
        xlListDataTypeCounter=11,
        xlListDataTypeNone=0,
        xlListDataTypeText=1,
        xlListDataTypeDateTime=5,
        xlListDataTypeNumber=3,
        xlListDataTypeCurrency=4,
        xlListDataTypeChoice=6,
        xlListDataTypeChoiceMulti=7,
        xlListDataTypeListLookup=8,
        xlListDataTypeCheckbox=9,
        xlListDataTypeHyperLink=10,
        xlListDataTypeMultiLineRichText=12,
    }

    export enum EtXlDataBarAxisPosition {
        xlDataBarAxisMidpoint=1,
        xlDataBarAxisAutomatic=0,
        xlDataBarAxisNone=2,
    }

    export enum EtXlXmlLoadOption {
        xlXmlLoadPromptUser=0,
        xlXmlLoadOpenXml=1,
        xlXmlLoadImportToList=2,
        xlXmlLoadMapXml=3,
    }

    export enum EtXlSmartTagControlType {
        xlSmartTagControlSmartTag=1,
        xlSmartTagControlLabel=7,
        xlSmartTagControlLink=2,
        xlSmartTagControlImage=8,
        xlSmartTagControlHelp=3,
        xlSmartTagControlHelpURL=4,
        xlSmartTagControlButton=6,
        xlSmartTagControlSeparator=5,
        xlSmartTagControlCheckbox=9,
        xlSmartTagControlTextbox=10,
        xlSmartTagControlListbox=11,
        xlSmartTagControlCombo=12,
        xlSmartTagControlActiveX=13,
        xlSmartTagControlRadioGroup=14,
    }

    export enum EtXlListConflict {
        xlListConflictRetryAllConflicts=1,
        xlListConflictDialog=0,
        xlListConflictDiscardAllConflicts=2,
        xlListConflictError=3,
    }

    export enum EtXlXmlExportResult {
        xlXmlExportValidationFailed=1,
        xlXmlExportSuccess=0,
    }

    export enum EtXlXmlImportResult {
        xlXmlImportSuccess=0,
        xlXmlImportValidationFailed=2,
        xlXmlImportElementsTruncated=1,
    }

    export enum EtXlRemoveDocInfoType {
        xlRDIScenarioComments=12,
        xlRDIRemovePersonalInformation=4,
        xlRDIComments=1,
        xlRDIEmailHeader=5,
        xlRDIDocumentProperties=8,
        xlRDIRoutingSlip=6,
        xlRDISendForReview=7,
        xlRDIDocumentWorkspace=10,
        xlRDIInkAnnotations=11,
        xlRDIPublishInfo=13,
        xlRDIDocumentServerProperties=14,
        xlRDIDocumentManagementPolicy=15,
        xlRDIContentType=16,
        xlRDIDefinedNameComments=18,
        xlRDIInactiveDataConnections=19,
        xlRDIPrinterPath=20,
        xlRDIInlineWebExtensions=21,
        xlRDITaskpaneWebExtensions=22,
        xlRDIExcelDataModel=23,
        xlRDIAll=99,
    }

    export enum EtXlThemeColor {
        xlThemeColorDark1=1,
        xlThemeColorLight1=2,
        xlThemeColorLight2=4,
        xlThemeColorDark2=3,
        xlThemeColorAccent1=5,
        xlThemeColorAccent2=6,
        xlThemeColorAccent3=7,
        xlThemeColorAccent4=8,
        xlThemeColorAccent5=9,
        xlThemeColorAccent6=10,
        xlThemeColorHyperlink=11,
        xlThemeColorFollowedHyperlink=12,
    }

    export enum EtXlThemeFont {
        xlThemeFontNone=0,
        xlThemeFontMinor=2,
        xlThemeFontMajor=1,
    }

    export enum EtXlRgbColor {
        rgbAzure=16777200,
        rgbFireBrick=2237106,
        rgbAntiqueWhite=14150650,
        rgbAliceBlue=16775408,
        rgbAqua=16776960,
        rgbViolet=15631086,
        rgbAquamarine=13959039,
        rgbLightYellow=14745599,
        rgbDeepSkyBlue=16760576,
        rgbPaleGoldenrod=7071982,
        rgbBlanchedAlmond=13495295,
        rgbGoldenrod=2139610,
        rgbCornflowerBlue=15570276,
        rgbBeige=14480885,
        rgbBisque=12903679,
        rgbLavender=16443110,
        rgbBlack=0,
        rgbMediumSpringGreen=10156544,
        rgbGold=55295,
        rgbDarkGrey=11119017,
        rgbOldLace=15136253,
        rgbBlue=16711680,
        rgbIndianRed=6053069,
        rgbBlueViolet=14822282,
        rgbLemonChiffon=13499135,
        rgbGreen=32768,
        rgbBrown=2763429,
        rgbBurlyWood=8894686,
        rgbCadetBlue=10526303,
        rgbChartreuse=65407,
        rgbDarkKhaki=7059389,
        rgbCoral=5275647,
        rgbCornsilk=14481663,
        rgbCrimson=3937500,
        rgbDarkBlue=9109504,
        rgbDarkCyan=9145088,
        rgbGray=8421504,
        rgbGrey=8421504,
        rgbDarkGoldenrod=755384,
        rgbDarkGreen=25600,
        rgbDarkMagenta=9109643,
        rgbDarkGray=11119017,
        rgbKhaki=9234160,
        rgbDarkOliveGreen=3107669,
        rgbDarkRed=139,
        rgbDarkOrange=36095,
        rgbLawnGreen=64636,
        rgbMediumTurquoise=13422920,
        rgbDarkOrchid=13382297,
        rgbDarkSalmon=8034025,
        rgbDarkSeaGreen=9419919,
        rgbSnow=16448255,
        rgbDarkSlateBlue=9125192,
        rgbDimGray=6908265,
        rgbDarkSlateGray=5197615,
        rgbDarkSlateGrey=5197615,
        rgbFuchsia=16711935,
        rgbTurquoise=13688896,
        rgbDarkTurquoise=13749760,
        rgbDarkViolet=13828244,
        rgbHoneydew=15794160,
        rgbDeepPink=9639167,
        rgbDodgerBlue=16748574,
        rgbDimGrey=6908265,
        rgbFloralWhite=15792895,
        rgbSilver=12632256,
        rgbForestGreen=2263842,
        rgbGainsboro=14474460,
        rgbGhostWhite=16775416,
        rgbGreenYellow=3145645,
        rgbHotPink=11823615,
        rgbIndigo=8519755,
        rgbIvory=15794175,
        rgbLavenderBlush=16118015,
        rgbOrchid=14053594,
        rgbLightBlue=15128749,
        rgbLightCoral=8421616,
        rgbPapayaWhip=14020607,
        rgbLightCyan=9145088,
        rgbLightGoldenrodYellow=13826810,
        rgbLightGrey=13882323,
        rgbLightGray=13882323,
        rgbLightGreen=9498256,
        rgbLightPink=12695295,
        rgbSalmon=7504122,
        rgbLightSalmon=8036607,
        rgbLightSeaGreen=11186720,
        rgbLightSkyBlue=16436871,
        rgbLimeGreen=3329330,
        rgbLightSlateGray=10061943,
        rgbLightSlateGrey=10061943,
        rgbLightSteelBlue=14599344,
        rgbPaleVioletRed=9662683,
        rgbLime=65280,
        rgbLinen=15134970,
        rgbMaroon=128,
        rgbTeal=8421376,
        rgbMediumAquamarine=11206502,
        rgbMediumBlue=13434880,
        rgbPowderBlue=15130800,
        rgbMediumOrchid=13850042,
        rgbRed=255,
        rgbMediumPurple=14381203,
        rgbMediumSeaGreen=7451452,
        rgbMediumSlateBlue=15624315,
        rgbMediumVioletRed=8721863,
        rgbMidnightBlue=7346457,
        rgbMintCream=16449525,
        rgbPlum=14524637,
        rgbMistyRose=14804223,
        rgbMoccasin=11920639,
        rgbNavajoWhite=11394815,
        rgbNavy=8388608,
        rgbNavyBlue=8388608,
        rgbOlive=32896,
        rgbOliveDrab=2330219,
        rgbOrange=42495,
        rgbOrangeRed=17919,
        rgbPaleGreen=10025880,
        rgbPaleTurquoise=15658671,
        rgbPeachPuff=12180223,
        rgbPeru=4163021,
        rgbPink=13353215,
        rgbPurple=8388736,
        rgbRosyBrown=9408444,
        rgbRoyalBlue=14772545,
        rgbSandyBrown=6333684,
        rgbSeaGreen=5737262,
        rgbSeashell=15660543,
        rgbSienna=2970272,
        rgbSkyBlue=15453831,
        rgbSlateBlue=13458026,
        rgbSlateGrey=9470064,
        rgbSlateGray=9470064,
        rgbSpringGreen=8388352,
        rgbSteelBlue=11829830,
        rgbTan=9221330,
        rgbThistle=14204888,
        rgbTomato=4678655,
        rgbYellow=65535,
        rgbYellowGreen=3329434,
        rgbWheat=11788021,
        rgbWhite=16777215,
        rgbWhiteSmoke=16119285,
    }

    export enum EtXlStdColorScale {
        xlColorScaleWhiteBlack=4,
        xlColorScaleRYG=1,
        xlColorScaleGYR=2,
        xlColorScaleBlackWhite=3,
    }

    export enum EtXlConditionValueTypes {
        xlConditionValueNone=-1,
        xlConditionValueHighestValue=2,
        xlConditionValueNumber=0,
        xlConditionValueLowestValue=1,
        xlConditionValuePercent=3,
        xlConditionValueAutomaticMin=6,
        xlConditionValueAutomaticMax=7,
        xlConditionValueFormula=4,
        xlConditionValuePercentile=5,
    }

    export enum EtXlFormatFilterTypes {
        xlFilterBottom=0,
        xlFilterTopPercent=3,
        xlFilterTop=1,
        xlFilterBottomPercent=2,
    }

    export enum EtXlAboveBelow {
        xlBelowAverage=1,
        xlAboveAverage=0,
        xlEqualAboveAverage=2,
        xlEqualBelowAverage=3,
        xlBelowStdDev=5,
        xlAboveStdDev=4,
    }

    export enum EtXlTimePeriods {
        xlNextWeek=7,
        xlToday=0,
        xlYesterday=1,
        xlTomorrow=6,
        xlLast7Days=2,
        xlThisWeek=3,
        xlLastWeek=4,
        xlLastMonth=5,
        xlNextMonth=8,
        xlThisMonth=9,
    }

    export enum EtXlDupeUnique {
        xlDuplicate=1,
        xlUnique=0,
    }

    export enum EtXlTopBottom {
        xlTop10Top=1,
        xlTop10Bottom=0,
    }

    export enum EtXlPivotLineType {
        xlPivotLineRegular=0,
        xlPivotLineSubtotal=1,
        xlPivotLineGrandTotal=2,
        xlPivotLineBlank=3,
    }

    export enum EtXlPropertyDisplayedIn {
        xlDisplayPropertyInPivotTable=1,
        xlDisplayPropertyInTooltip=2,
        xlDisplayPropertyInPivotTableAndTooltip=3,
    }

    export enum EtXlActionType {
        xlActionTypeReport=128,
        xlActionTypeUrl=1,
        xlActionTypeRowset=16,
        xlActionTypeDrillthrough=256,
    }

    export enum EtXlMeasurementUnits {
        xlInches=0,
        xlMillimeters=2,
        xlCentimeters=1,
    }

    export enum EtXlPivotFilterType {
        xlDateBetween=35,
        xlDateToday=38,
        xlTopCount=1,
        xlTopSum=5,
        xlBottomCount=2,
        xlTopPercent=3,
        xlBottomPercent=4,
        xlDateTomorrow=37,
        xlValueIsLessThanOrEqualTo=12,
        xlBottomSum=6,
        xlDateThisWeek=41,
        xlAfterOrEqualTo=34,
        xlValueEquals=7,
        xlValueIsGreaterThan=9,
        xlAllDatesInPeriodFebruary=58,
        xlCaptionContains=21,
        xlValueDoesNotEqual=8,
        xlAllDatesInPeriodJuly=63,
        xlCaptionIsNotBetween=28,
        xlValueIsGreaterThanOrEqualTo=10,
        xlValueIsLessThan=11,
        xlBeforeOrEqualTo=32,
        xlCaptionBeginsWith=17,
        xlValueIsBetween=13,
        xlDateNextWeek=40,
        xlValueIsNotBetween=14,
        xlCaptionIsGreaterThanOrEqualTo=24,
        xlCaptionEquals=15,
        xlCaptionDoesNotEqual=16,
        xlCaptionEndsWith=19,
        xlCaptionDoesNotBeginWith=18,
        xlCaptionDoesNotEndWith=20,
        xlDateThisYear=50,
        xlCaptionDoesNotContain=22,
        xlCaptionIsGreaterThan=23,
        xlCaptionIsLessThan=25,
        xlDateLastWeek=42,
        xlCaptionIsLessThanOrEqualTo=26,
        xlCaptionIsBetween=27,
        xlAfter=33,
        xlNotSpecificDate=30,
        xlSpecificDate=29,
        xlBefore=31,
        xlDateNotBetween=36,
        xlAllDatesInPeriodQuarter1=53,
        xlAllDatesInPeriodQuarter2=54,
        xlAllDatesInPeriodQuarter3=55,
        xlAllDatesInPeriodQuarter4=56,
        xlDateYesterday=39,
        xlDateNextMonth=43,
        xlDateThisMonth=44,
        xlDateLastMonth=45,
        xlDateNextQuarter=46,
        xlDateThisQuarter=47,
        xlDateLastQuarter=48,
        xlAllDatesInPeriodMarch=59,
        xlDateNextYear=49,
        xlAllDatesInPeriodSeptember=65,
        xlDateLastYear=51,
        xlYearToDate=52,
        xlAllDatesInPeriodJanuary=57,
        xlAllDatesInPeriodApril=60,
        xlAllDatesInPeriodMay=61,
        xlAllDatesInPeriodJune=62,
        xlAllDatesInPeriodAugust=64,
        xlAllDatesInPeriodOctober=66,
        xlAllDatesInPeriodNovember=67,
        xlAllDatesInPeriodDecember=68,
    }

    export enum EtXlCredentialsMethod {
        xlCredentialsMethodIntegrated=0,
        xlCredentialsMethodNone=1,
        xlCredentialsMethodStored=2,
    }

    export enum EtXlCubeFieldSubType {
        xlCubeHierarchy=1,
        xlCubeKPITrend=9,
        xlCubeMeasure=2,
        xlCubeSet=3,
        xlCubeKPIValue=6,
        xlCubeAttribute=4,
        xlCubeCalculatedMeasure=5,
        xlCubeKPIGoal=7,
        xlCubeKPIStatus=8,
        xlCubeKPIWeight=10,
        xlCubeImplicitMeasure=11,
    }

    export enum EtXlSortOn {
        xlSortOnValues=0,
        xlSortOnCellColor=1,
        xlSortOnFontColor=2,
        xlSortOnIcon=3,
    }

    export enum EtXlDynamicFilterCriteria {
        xlFilterAllDatesInPeriodDecember=32,
        xlFilterAllDatesInPeriodMay=25,
        xlFilterAllDatesInPeriodMarch=23,
        xlFilterToday=1,
        xlFilterThisMonth=7,
        xlFilterYesterday=2,
        xlFilterTomorrow=3,
        xlFilterAllDatesInPeriodApril=24,
        xlFilterNextMonth=9,
        xlFilterYearToDate=16,
        xlFilterThisWeek=4,
        xlFilterLastWeek=5,
        xlFilterLastMonth=8,
        xlFilterNextWeek=6,
        xlFilterThisQuarter=10,
        xlFilterLastQuarter=11,
        xlFilterNextQuarter=12,
        xlFilterThisYear=13,
        xlFilterLastYear=14,
        xlFilterNextYear=15,
        xlFilterAllDatesInPeriodQuarter4=20,
        xlFilterAllDatesInPeriodQuarter3=19,
        xlFilterAllDatesInPeriodQuarter2=18,
        xlFilterAllDatesInPeriodQuarter1=17,
        xlFilterAllDatesInPeriodNovember=31,
        xlFilterAllDatesInPeriodJanuary=21,
        xlFilterAllDatesInPeriodFebruray=22,
        xlFilterAllDatesInPeriodJuly=27,
        xlFilterAllDatesInPeriodJune=26,
        xlFilterAboveAverage=33,
        xlFilterAllDatesInPeriodAugust=28,
        xlFilterAllDatesInPeriodSeptember=29,
        xlFilterAllDatesInPeriodOctober=30,
        xlFilterBelowAverage=34,
    }

    export enum EtXlFilterAllDatesInPeriod {
        xlFilterAllDatesInPeriodYear=0,
        xlFilterAllDatesInPeriodMinute=4,
        xlFilterAllDatesInPeriodMonth=1,
        xlFilterAllDatesInPeriodDay=2,
        xlFilterAllDatesInPeriodHour=3,
        xlFilterAllDatesInPeriodSecond=5,
    }

    export enum EtXlCalcFor {
        xlAllValues=0,
        xlRowGroups=1,
        xlColGroups=2,
    }

    export enum EtXlDataBarNegativeColorType {
        xlDataBarColor=0,
        xlDataBarSameAsPositive=1,
    }

    export enum EtXlFixedFormatType {
        xlTypePDF=0,
        xlTypeXPS=1,
    }

    export enum EtXlFixedFormatQuality {
        xlQualityStandard=0,
        xlQualityMinimum=1,
    }

    export enum EtXlGenerateTableRefs {
        xlGenerateTableRefA1=0,
        xlGenerateTableRefStruct=1,
    }

    export enum EtXlThreadMode {
        xlThreadModeManual=1,
        xlThreadModeAutomatic=0,
    }

    export enum EtXlOartHorizontalOverflow {
        xlOartHorizontalOverflowClip=1,
        xlOartHorizontalOverflowOverflow=0,
    }

    export enum EtXlOartVerticalOverflow {
        xlOartVerticalOverflowOverflow=0,
        xlOartVerticalOverflowClip=1,
        xlOartVerticalOverflowEllipsis=2,
    }

    export enum EtXlSparkScale {
        xlSparkScaleGroup=1,
        xlSparkScaleSingle=2,
        xlSparkScaleCustom=3,
    }

    export enum EtXlSparkType {
        xlSparkLine=1,
        xlSparkColumnStacked100=3,
        xlSparkColumn=2,
    }

    export enum EtXlDataBarBorderType {
        xlDataBarBorderNone=0,
        xlDataBarBorderSolid=1,
    }

    export enum EtXlAllocation {
        xlManualAllocation=1,
        xlAutomaticAllocation=2,
    }

    export enum EtXlAllocationMethod {
        xlEqualAllocation=1,
        xlWeightedAllocation=2,
    }

    export enum EtXlCellChangedState {
        xlCellChanged=2,
        xlCellNotChanged=1,
        xlCellChangeApplied=3,
    }

    export enum EtXlPivotFieldRepeatLabels {
        xlDoNotRepeatLabels=1,
        xlRepeatLabels=2,
    }

    export enum EtXlSpanishModes {
        xlSpanishTuteoOnly=0,
        xlSpanishTuteoAndVoseo=1,
        xlSpanishVoseoOnly=2,
    }

    export enum EtXlSlicerCrossFilterType {
        xlSlicerCrossFilterHideButtonsWithNoData=4,
        xlSlicerCrossFilterShowItemsWithNoData=3,
        xlSlicerNoCrossFilter=1,
        xlSlicerCrossFilterShowItemsWithDataAtTop=2,
    }

    export enum EtXlSlicerSort {
        xlSlicerSortDescending=3,
        xlSlicerSortDataSourceOrder=1,
        xlSlicerSortAscending=2,
    }

    export enum EtXlIcon {
        xlIconNoCellIcon=-1,
        xlIconGreenFlag=7,
        xlIconGrayUpArrow=4,
        xlIconGraySideArrow=5,
        xlIconGreenUpArrow=1,
        xlIcon1FilledBox=51,
        xlIconWhiteCircleAllWhiteQuarters=36,
        xlIconYellowSideArrow=2,
        xlIconYellowFlag=8,
        xlIconGrayUpInclineArrow=27,
        xlIconYellowTriangle=17,
        xlIconRedDownArrow=3,
        xlIconGrayDownArrow=6,
        xlIcon0FilledBoxes=52,
        xlIconRedFlag=9,
        xlIconCircleWithOneWhiteQuarter=33,
        xlIconYellowUpInclineArrow=25,
        xlIconGreenCircle=10,
        xlIconYellowCircle=11,
        xlIcon3FilledBoxes=49,
        xlIconGoldStar=42,
        xlIconRedCircleWithBorder=12,
        xlIconYellowTrafficLight=15,
        xlIconBlackCircleWithBorder=13,
        xlIcon3Bars=40,
        xlIconGreenTrafficLight=14,
        xlIconRedTrafficLight=16,
        xlIconBlackCircle=32,
        xlIconRedDiamond=18,
        xlIconYellowDownInclineArrow=26,
        xlIconGreenCheckSymbol=19,
        xlIconYellowExclamationSymbol=20,
        xlIconRedCrossSymbol=21,
        xlIconGreenCheck=22,
        xlIcon4FilledBoxes=48,
        xlIconYellowExclamation=23,
        xlIcon4Bars=41,
        xlIconRedCross=24,
        xlIconGrayDownInclineArrow=28,
        xlIcon1Bar=38,
        xlIconRedCircle=29,
        xlIconPinkCircle=30,
        xlIconGrayCircle=31,
        xlIconCircleWithTwoWhiteQuarters=34,
        xlIconCircleWithThreeWhiteQuarters=35,
        xlIcon0Bars=37,
        xlIcon2Bars=39,
        xlIconSilverStar=44,
        xlIconHalfGoldStar=43,
        xlIconGreenUpTriangle=45,
        xlIconYellowDash=46,
        xlIconRedDownTriangle=47,
        xlIcon2FilledBoxes=50,
    }

    export enum EtXlProtectedViewCloseReason {
        xlProtectedViewCloseEdit=1,
        xlProtectedViewCloseNormal=0,
        xlProtectedViewCloseForced=2,
    }

    export enum EtXlProtectedViewWindowState {
        xlProtectedViewWindowMaximized=2,
        xlProtectedViewWindowMinimized=1,
        xlProtectedViewWindowNormal=0,
    }

    export enum EtXlFileValidationPivotMode {
        xlFileValidationPivotDefault=0,
        xlFileValidationPivotRun=1,
        xlFileValidationPivotSkip=2,
    }

    export enum EtXlCalcMemNumberFormatType {
        xlNumberFormatTypeDefault=0,
        xlNumberFormatTypeNumber=1,
        xlNumberFormatTypePercent=2,
    }

    export enum EtXlPortugueseReform {
        xlPortuguesePreReform=1,
        xlPortuguesePostReform=2,
        xlPortugueseBoth=3,
    }

    export enum EtXlQuickAnalysisMode {
        xlRecommendedCharts=2,
        xlLensOnly=0,
        xlFormatConditions=1,
        xlTotals=3,
        xlTables=4,
        xlSparklines=5,
    }

    export enum EtXlTimelineLevel {
        xlTimelineLevelYears=0,
        xlTimelineLevelMonths=2,
        xlTimelineLevelQuarters=1,
        xlTimelineLevelDays=3,
    }

    export enum EtXlFilterStatus {
        xlFilterStatusOK=0,
        xlFilterStatusDateWrongOrder=1,
        xlFilterStatusDateHasTime=2,
        xlFilterStatusInvalidDate=3,
    }

}