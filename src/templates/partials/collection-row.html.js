<td>
    <a href="<%= obj.url() %>" class="name"><%= obj.get('name') %></a>
</td>
<td>
    <span class="documents"><%= obj.get('count') %></span>
</td>
<td>
    <span class="indexes has-details"><%= obj.get('indexes').length %></span>
    <div class="details" title="Indexes">
        <% if (obj.get('indexes').length > 0) { %>
            <ul class="index-details">
                <% _.each(obj.get('indexes'), function(index) { %>
                    <li><%= Genghis.Util.formatJSON(index.key) %></li>
                <% }); %>
            </ul>
        <% } else { %>
            <em>None.</em>
        <% } %>
    </div>
</td>
<td class="action-column">
    <button class="btn small danger destroy">Remove</button>
</td>
