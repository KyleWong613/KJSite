#pragma checksum "C:\Users\USER\source\repos\MySite\MySite\Pages\Contact.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d86078d664eefacfc3a873a3c3426d6259968c66"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(MySite.Pages.Pages_Contact), @"mvc.1.0.razor-page", @"/Pages/Contact.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure.RazorPageAttribute(@"/Pages/Contact.cshtml", typeof(MySite.Pages.Pages_Contact), null)]
namespace MySite.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\USER\source\repos\MySite\MySite\Pages\_ViewImports.cshtml"
using MySite;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"d86078d664eefacfc3a873a3c3426d6259968c66", @"/Pages/Contact.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"50491dbcd9dc45bc789962104f8e3ea784e0d00a", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Contact : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 2 "C:\Users\USER\source\repos\MySite\MySite\Pages\Contact.cshtml"
  
    ViewData["Title"] = "Contact";

#line default
#line hidden
            BeginContext(50, 4, true);
            WriteLiteral("<h2>");
            EndContext();
            BeginContext(55, 17, false);
#line 5 "C:\Users\USER\source\repos\MySite\MySite\Pages\Contact.cshtml"
Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(72, 369, true);
            WriteLiteral(@"</h2>

<address>
    One Microsoft Way<br />
    Redmond, WA 98052-6399<br />
    <abbr title=""Phone"">P:</abbr>
    425.555.0100
</address>

<address>
    <strong>Support:</strong> <a href=""mailto:Support@example.com"">Support@example.com</a><br />
    <strong>Marketing:</strong> <a href=""mailto:Marketing@example.com"">Marketing@example.com</a>
</address>
");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Pages_Contact> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<Pages_Contact> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<Pages_Contact>)PageContext?.ViewData;
        public Pages_Contact Model => ViewData.Model;
    }
}
#pragma warning restore 1591
